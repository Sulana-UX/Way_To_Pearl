<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once '../../config/db.php'; // Adjust path if needed

$user_id = isset($_GET['user_id']) ? (int)$_GET['user_id'] : 0;
if ($user_id === 0) {
    echo json_encode(["message" => "Missing or invalid user_id"]);
    exit();
}

$stmt = $conn->prepare("SELECT country, contact_number, about_you FROM tourist WHERE user_id = ?");
if ($stmt === false) {
    echo json_encode(["message" => "Prepare failed", "error" => $conn->error]);
    exit();
}
$stmt->bind_param("i", $user_id);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows > 0) {
    $stmt->bind_result($country, $contact_number, $about_you);
    $stmt->fetch();
    echo json_encode([
        "profile" => [
            "country" => $country,
            "contact_number" => $contact_number,
            "about_you" => $about_you
        ]
    ]);
} else {
    echo json_encode(["profile" => null]);
}

$stmt->close();
$conn->close();
?>
