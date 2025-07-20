<?php
// Show PHP errors for debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

// Handle preflight (CORS)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(["message" => "Invalid request method."]);
    exit();
}

// Get JSON input
$data = json_decode(file_get_contents("php://input"), true);
if (!$data) {
    echo json_encode(["message" => "No JSON received"]);
    exit();
}

// Extract and validate fields
$username = trim($data['username'] ?? '');
$password = trim($data['password'] ?? '');
$email = trim($data['email'] ?? '');
$role = trim($data['role'] ?? '');

if (!$username || !$password || !$email || !$role) {
    echo json_encode([
        "message" => "Missing required fields",
        "debug" => [
            "username" => $username,
            "password" => $password,
            "email" => $email,
            "role" => $role,
            "raw_data" => $data
        ]
    ]);
    exit();
}

// Import your database connection
require_once '../config/db.php'; // Adjust path if needed
if (!$conn) {
    echo json_encode([
        "message" => "Database connection failed",
        "error" => mysqli_connect_error()
    ]);
    exit();
}

// Hash password
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);
// Debug: show password and hash
// Remove this in production
$debugPassword = [
    "entered_password" => $password,
    "hashed_password" => $hashedPassword
];

// Check for duplicate email
$checkStmt = $conn->prepare("SELECT login_id FROM user_login WHERE email = ?");
if ($checkStmt === false) {
    echo json_encode([
        "message" => "Prepare failed (duplicate email check)",
        "error" => $conn->error,
        "debug" => $debugPassword
    ]);
    exit();
}
$checkStmt->bind_param("s", $email);
$checkStmt->execute();
$checkStmt->store_result();
if ($checkStmt->num_rows > 0) {
    echo json_encode([
        "message" => "Email already exists. Please use a different email.",
        "debug" => $debugPassword
    ]);
    $checkStmt->close();
    $conn->close();
    exit();
}
$checkStmt->close();

// Prepare and execute insert
$stmt = $conn->prepare("INSERT INTO user_login (name, password, email, role) VALUES (?, ?, ?, ?)");
if ($stmt === false) {
    echo json_encode([
        "message" => "Prepare failed (insert)",
        "error" => $conn->error,
        "debug" => $debugPassword
    ]);
    exit();
}
$stmt->bind_param("ssss", $username, $hashedPassword, $email, $role);

if ($stmt->execute()) {
    echo json_encode([
        "message" => "Signup successful!",
        "debug" => $debugPassword
    ]);
} else {
    echo json_encode([
        "message" => "Signup failed",
        "sql_error" => $stmt->error,
        "query" => $stmt->error_list,
        "debug" => $debugPassword
    ]);
}

$stmt->close();
$conn->close();
?>
