<?php
session_start();
require_once("classes/Database.php");
require_once("classes/Model.php");
require_once("classes/Crud.php");

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $user = new Crud();
    $showUsers = $user->getUser();

} else if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $filename = "files/" . $_FILES["image"]["name"];
    move_uploaded_file($_FILES["image"]["tmp_name"], $filename);
    $user_id = $_SESSION["id"];
    $user = new Crud();
    $user->createUser($_REQUEST["title"], $_REQUEST["textarea"], $_REQUEST["price"], $filename, $user_id);
    $user->getUser();

} else if ($_SERVER["REQUEST_METHOD"] == "PUT") {

} else if ($_SERVER["REQUEST_METHOD"] == "DELETE") {
    $json = file_get_contents('php://input');
    $id = json_decode($json, JSON_BIGINT_AS_STRING);
    print_r($id["id"]);
    $user = new Crud();
    $user->deleteUser($id["id"]);
};
?>