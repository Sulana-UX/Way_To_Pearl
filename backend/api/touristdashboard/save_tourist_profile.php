<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(["message" => "Invalid request method."]);
    exit();
}

$data = json_decode(file_get_contents("php://input"), true);
if (!$data) {
    echo json_encode(["message" => "No JSON received"]);
    exit();
}



$user_id = isset($data['user_id']) ? (int)$data['user_id'] : 0; // Always integer
$country = trim($data['country'] ?? '');
$contact_number = trim($data['contact_number'] ?? '');
$about_you = trim($data['about_you'] ?? '');

if ($user_id === 0) {
    error_log("[save_tourist_profile.php] ERROR: user_id missing or null. Received data: " . json_encode($data));
    echo json_encode([
        "message" => "User ID is missing or not set.\n\nFrontend HINT: After successful login, store user_id in localStorage using localStorage.setItem('user_id', user_id_from_backend). Then reload the dashboard.",
        "debug" => $data,
        "localStorage_example" => "localStorage.setItem('user_id', user_id_from_backend);"
    ]);
    exit();
}
if (!$country || !$contact_number || !$about_you) {
    echo json_encode([
        "message" => "Missing required fields (country, contact_number, about_you)",
        "debug" => $data
    ]);
    exit();
}

require_once '../../config/db.php'; // Adjust path if needed

// Check if user_id exists in user_signup
$check_stmt = $conn->prepare("SELECT user_id FROM user_signup WHERE user_id = ?");
if ($check_stmt === false) {
    echo json_encode([
        "message" => "Prepare failed (user check)",
        "error" => $conn->error
    ]);
    exit();
}
$check_stmt->bind_param("i", $user_id);
$check_stmt->execute();
$check_stmt->store_result();
if ($check_stmt->num_rows === 0) {
    echo json_encode([
        "message" => "User ID does not exist in user_signup table.",
        "user_id" => $user_id
    ]);
    $check_stmt->close();
    $conn->close();
    exit();
}
$check_stmt->close();


// Debug: log values to error log
error_log("user_id: $user_id, country: $country, contact_number: $contact_number, about_you: $about_you");

// Check if tourist row exists for this user_id
$check_tourist = $conn->prepare("SELECT tourist_id FROM tourist WHERE user_id = ?");
if ($check_tourist === false) {
    echo json_encode([
        "message" => "Prepare failed (tourist check)",
        "error" => $conn->error
    ]);
    exit();
}
$check_tourist->bind_param("i", $user_id);
$check_tourist->execute();
$check_tourist->store_result();

if ($check_tourist->num_rows > 0) {
    // Row exists, update it
    $check_tourist->bind_result($tourist_id);
    $check_tourist->fetch();
    $check_tourist->close();
    $update_stmt = $conn->prepare("UPDATE tourist SET country = ?, contact_number = ?, about_you = ? WHERE user_id = ?");
    if ($update_stmt === false) {
        echo json_encode([
            "message" => "Prepare failed (update)",
            "error" => $conn->error
        ]);
        exit();
    }
    $update_stmt->bind_param("sssi", $country, $contact_number, $about_you, $user_id);
    if ($update_stmt->execute()) {
        echo json_encode(["message" => "Tourist profile updated successfully!"]);
    } else {
        echo json_encode([
            "message" => "Failed to update tourist profile",
            "sql_error" => $update_stmt->error
        ]);
    }
    $update_stmt->close();
} else {
    $check_tourist->close();
    // Row does not exist, insert new
    $insert_stmt = $conn->prepare("INSERT INTO tourist (user_id, country, contact_number, about_you) VALUES (?, ?, ?, ?)");
    if ($insert_stmt === false) {
        echo json_encode([
            "message" => "Prepare failed (insert)",
            "error" => $conn->error
        ]);
        exit();
    }
    $insert_stmt->bind_param("isss", $user_id, $country, $contact_number, $about_you);
    if ($insert_stmt->execute()) {
        echo json_encode(["message" => "Tourist profile saved successfully!"]);
    } else {
        echo json_encode([
            "message" => "Failed to save tourist profile",
            "sql_error" => $insert_stmt->error
        ]);
    }
    $insert_stmt->close();
}

$conn->close();
?>