<?php
// Show PHP errors for debugging (remove or comment out in production!)
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Basic CORS headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

// Handle preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(["message" => "Invalid request method"]);
    exit();
}

// Get JSON input
$data = json_decode(file_get_contents("php://input"), true);
if (!$data) {
    echo json_encode(["message" => "No JSON received"]);
    exit();
}

$usernameOrEmail = trim($data['username'] ?? '');
$password = trim($data['password'] ?? '');

if (!$usernameOrEmail || !$password) {
    echo json_encode(["message" => "Missing username or password"]);
    exit();
}

// Connect to DB
require_once '../config/db.php'; // Make sure the path is correct
if (!$conn) {
    echo json_encode([
        "message" => "Database connection failed",
        "error" => mysqli_connect_error()
    ]);
    exit();
}

// Find user by name or email
$stmt = $conn->prepare(
    "SELECT login_id, name, email, password, role FROM user_login WHERE name = ? OR email = ?"
);
if ($stmt === false) {
    echo json_encode([
        "message" => "Prepare failed",
        "error" => $conn->error
    ]);
    exit();
}

$stmt->bind_param("ss", $usernameOrEmail, $usernameOrEmail);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 0) {
    echo json_encode(["message" => "Invalid username/email or password"]);
    $stmt->close();
    $conn->close();
    exit();
}

$user = $result->fetch_assoc();

// Verify password
if (!password_verify($password, $user['password'])) {
    echo json_encode(["message" => "Invalid username/email or password"]);
    $stmt->close();
    $conn->close();
    exit();
}

// Success
if ($user['role'] === 'tuorist') {
    echo json_encode([
        "message" => "Login successful",
        "user" => [
            "login_id" => $user['login_id'],
            "name" => $user['name'],
            "email" => $user['email'],
            "role" => $user['role'],
            "dashboard" => "tuorist"
        ]
    ]);
} else {
    echo json_encode([
        "message" => "Login successful",
        "user" => [
            "login_id" => $user['login_id'],
            "name" => $user['name'],
            "email" => $user['email'],
            "role" => $user['role'],
            "dashboard" => "default"
        ]
    ]);
}

$stmt->close();
$conn->close();
?>
