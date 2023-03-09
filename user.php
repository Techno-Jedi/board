<?php
session_start();
require_once("classes/Database.php");
require_once("classes/Model.php");
require_once("classes/Users.php");

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $user = new Users();
    $showUsers = $user->getUser($id);
};
class Users extends Model
{
    public function getUser($id)
    {
        $query = Database::query("SELECT * FROM `users` WHERE `id` =" . $id);
        $user = Database::fetch($query);
        if (
            is_array($user)
            && $id === $user["id"]
        ) {
            print_r(json_encode($_SESSION["id"] = $user["id"]));
        } else {
            echo "ok";
        }
    }
    }