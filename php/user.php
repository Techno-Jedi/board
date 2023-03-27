<?php
session_start();
require_once("../classes/Database.php");
require_once("../classes/Model.php");

class User extends Model
{
    public function getUser($id)
    {
        $query =  Database::query("SELECT * FROM `forms` WHERE `user_id` =" . $id );

        while ($row[] = Database::fetch($query)) {
         $user = $row;
         };
         print_r(json_encode($user));
    }
};
    if ($_SERVER["REQUEST_METHOD"] == "GET") {
        $user = new User();
        $user_id = $_SESSION["id"];
        $showUser = $user->getUser($user_id );
    };