<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$response = [
    'message' => 'Login logic will go here',
    'status' => 'success'
];

echo json_encode($response);
?>