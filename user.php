<?php
session_start();
require_once("classes/Database.php");
require_once("classes/Model.php");

class Users extends Model
{
    public function getUsers()
    {
        $query = Database::query("SELECT * FROM `forms`");

        while ($row[] = Database::fetch($query) ) {
                   $users = $row;
               };
               print_r(json_encode($users));
    }
};
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $user = new Users();
    $showUsers = $user->getUsers();
};