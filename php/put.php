<?php
require_once("../classes/Database.php");
require_once("../classes/Model.php");
require_once("../classes/Crud.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    print_r($_POST["id"]);
    $filename = "files/" . $_FILES["image"]["name"];
    $user = new Crud();
    $user->updateUser($_POST["title"], $_POST["textarea"], $_POST["price"], $filename, $_POST["id"], );
};