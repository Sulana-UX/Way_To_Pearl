<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

// DB connection
require_once '../config/db.php';

// CORS preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(200);
  exit();
}

// Check method
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(["status" => "error", "message" => "Invalid method"]);
  exit();
}

// Input fields
$hotelName = trim($_POST['hotelName'] ?? '');
$registrationNumber = trim($_POST['registrationNumber'] ?? '');
$roomsAvailable = intval($_POST['roomsAvailable'] ?? 0);
$location = trim($_POST['location'] ?? '');
$packages = isset($_POST['packages']) ? json_decode($_POST['packages'], true) : [];
$facilities = isset($_POST['facilities']) ? json_decode($_POST['facilities'], true) : [];

// File upload
$uploadedPhotos = [];
$uploadDir = __DIR__ . "/uploads/";
if (!file_exists($uploadDir)) {
  mkdir($uploadDir, 0777, true);
}

if (!empty($_FILES['photos'])) {
  foreach ($_FILES['photos']['tmp_name'] as $key => $tmpName) {
    if ($_FILES['photos']['size'][$key] > 5 * 1024 * 1024) continue;
    if (!in_array($_FILES['photos']['type'][$key], ['image/jpeg', 'image/png'])) continue;

    $safeName = preg_replace("/[^A-Z0-9._-]/i", "_", basename($_FILES['photos']['name'][$key]));
    $finalName = uniqid() . "_" . $safeName;
    $targetPath = $uploadDir . $finalName;

    if (move_uploaded_file($tmpName, $targetPath)) {
      $uploadedPhotos[] = "uploads/" . $finalName;
    }
  }
}

try {
  $stmt = $pdo->prepare("
    INSERT INTO hotelD
    (hotel_name, registration_number, rooms_available, location, packages, facilities, photos)
    VALUES
    (:hotel_name, :registration_number, :rooms_available, :location, :packages, :facilities, :photos)
  ");

  $stmt->execute([
    ':hotel_name' => $hotelName,
    ':registration_number' => $registrationNumber,
    ':rooms_available' => $roomsAvailable,
    ':location' => $location,
    ':packages' => json_encode($packages),
    ':facilities' => json_encode($facilities),
    ':photos' => json_encode($uploadedPhotos)
  ]);

  echo json_encode(["status" => "success", "message" => "Hotel saved successfully"]);
} catch (PDOException $e) {
  http_response_code(500);
  echo json_encode([
    "status" => "error",
    "message" => $e->getMessage(),
    "debug" => [
      "POST" => $_POST,
      "FILES" => $_FILES
    ]
  ]);
}
?>
