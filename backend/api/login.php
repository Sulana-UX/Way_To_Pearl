<?php
// Basic PHP config for CORS + debugging
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

ini_set('display_errors', 1);
error_reporting(E_ALL);

// Handle CORS preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(200);
  exit();
}

// Only accept POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  echo json_encode(["message" => "Invalid request"]);
  exit();
}

// Read JSON input
$data = json_decode(file_get_contents("php://input"), true);


$usernameOrEmail = trim($data['username'] ?? '');
$password = trim($data['password'] ?? '');

if (!$usernameOrEmail || !$password) {
  echo json_encode(["message" => "Missing fields"]);
  exit();
}

require_once '../config/db.php';

// Check user by username or email and only allow 'tourist' role
$stmt = $conn->prepare("SELECT * FROM user_login WHERE (name = ? OR email = ?) AND role = 'tourist'");
$stmt->bind_param("ss", $usernameOrEmail, $usernameOrEmail);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 0) {
  echo json_encode([
    "message" => "No user found with that username/email and role 'tourist'.",
    "debug" => [
      "entered_username_or_email" => $usernameOrEmail,
      "entered_password" => $password
    ]
  ]);
  exit();
}

$user = $result->fetch_assoc();

// Debug: output hash and entered password for troubleshooting
if (!password_verify($password, $user['password'])) {
  echo json_encode([
    "message" => "Password does not match.",
    "debug" => [
      "entered_password" => $password,
      "stored_hash" => $user['password']
    ]
  ]);
  $stmt->close();
  $conn->close();
  exit();
}

echo json_encode([
  "message" => "Login successful",
  "user" => [
    "login_id" => $user['login_id'],
    "name" => $user['name'],
    "email" => $user['email'],
    "role" => $user['role']
  ]
]);

$stmt->close();
$conn->close();
