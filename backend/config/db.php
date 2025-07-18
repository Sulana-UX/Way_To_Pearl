<?php
$host = 'localhost';     // Usually localhost if MySQL is on the same machine
$user = 'root';          // Your MySQL username
$password = '';          // Your MySQL password (empty by default in XAMPP)
$dbname = 'way_to_pearl';   // The database you created in phpMyAdmin

// Create connection
$conn = new mysqli($host, $user, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>