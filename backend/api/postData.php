<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");

// Read the POST data
$data = json_decode(file_get_contents("php://input"), true);

$response = [
    'received_data' => $data,
    'status' => 'success'
];

echo json_encode($response);
?>