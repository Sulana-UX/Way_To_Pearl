

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

// Only check and use tourist_id
$tourist_id = isset($data['tourist_id']) ? (int)$data['tourist_id'] : 0;
$review = trim($data['review'] ?? '');

if ($tourist_id === 0) {
    echo json_encode([
        "message" => "Tourist ID is missing or not set.",
        "debug" => $data
    ]);
    exit();
}
if (!$review) {
    echo json_encode([
        "message" => "Missing review text",
        "debug" => $data
    ]);
    exit();
}

require_once '../../config/db.php'; // Adjust path if needed

// Check if tourist_id exists in tourist table
$check_tourist = $conn->prepare("SELECT tourist_id FROM tourist WHERE tourist_id = ?");
if ($check_tourist === false) {
    echo json_encode([
        "message" => "Prepare failed (tourist check)",
        "error" => $conn->error
    ]);
    exit();
}
$check_tourist->bind_param("i", $tourist_id);
$check_tourist->execute();
$check_tourist->store_result();

if ($check_tourist->num_rows > 0) {
    $check_tourist->close();
    // Save review
    $insert_stmt = $conn->prepare("INSERT INTO review (tourist_id, review, created_at) VALUES (?, ?, NOW())");
    if ($insert_stmt === false) {
        echo json_encode([
            "message" => "Prepare failed (insert)",
            "error" => $conn->error
        ]);
        exit();
    }
    $insert_stmt->bind_param("is", $tourist_id, $review);
    if ($insert_stmt->execute()) {
        echo json_encode(["message" => "Review saved successfully!"]);
    } else {
        echo json_encode([
            "message" => "Failed to save review",
            "sql_error" => $insert_stmt->error
        ]);
    }
    $insert_stmt->close();
} else {
    $check_tourist->close();
    echo json_encode([
        "message" => "No tourist found for tourist_id",
        "tourist_id" => $tourist_id
    ]);
}

$conn->close();
?>
