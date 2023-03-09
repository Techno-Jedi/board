<?php
session_start();
require_once("classes/Database.php");
require_once("classes/Model.php");
require_once("classes/Users.php");

$email = $_REQUEST['email'];
$password = $_REQUEST['password'];
$phone = "";
if (!empty($email && $password)) {

    $user = new Users();
    $user->getUser($email, $password);
    print_r(is_array($user));
};
if (!empty($_POST['phone'])) {
    $phone = $_POST['phone'];
} else {

};
if (!empty($email && $phone && $password)) {
    $user = new Users();
    $user->createUser($email, $password, $phone);
};