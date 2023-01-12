<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $user = new Users();
    $showUsers = $user->getUser();
} else if ($_SERVER["REQUEST_METHOD"] == "POST") {

  $user = new Users();
  $user->createUser($_REQUEST["title"],$_REQUEST["textarea"], $_REQUEST["price"]);
  $user->getUser();
} else if ($_SERVER["REQUEST_METHOD"] == "PUT") {

//
// // $json = file_get_contents('php://input');
// //  $id = json_decode($json,true);
// // print_r($id["id"]);
// //
// $description = $id["description"];
// $price = $id["price"];
// $id = $id["id"];
// // print_r($_GET["id"]);
//   $user = new Users();
// //   print_r($_GET["id"]);
// //   $data = [$_REQUEST["id"], $_REQUEST["title"], $_REQUEST["textarea"], $_REQUEST["price"]];
//   $user->updateUser($_PUT);
//     $user->createUser($description, $price, $id);
//     $user->getUser();
// print_r(json_encode($user));



} else if ($_SERVER["REQUEST_METHOD"] == "DELETE") {
  $json = file_get_contents('php://input');
  $id = json_decode($json, JSON_BIGINT_AS_STRING);
  print_r($id["id"]);
  $user = new Users();
  $user->deleteUser($id["id"]);
}
class Database
{
    private static $connection_to_db;
    public static function connect()
    {
        if (empty(self::$connection_to_db)) {
            self::$connection_to_db = mysqli_connect("localhost:3306", "root", "", "bulletin_board");
        }
    }
    public static function query($sqlStr)
    {
        return mysqli_query(self::$connection_to_db, $sqlStr);
    }
    public static function fetch($query)
    {
        return mysqli_fetch_assoc($query);
    }
};

class Model
{
    public function __construct()
    {
        Database::connect();
    }
};

class Users extends Model
{
    public function createUser($name, $description, $price)
    {
        Database::query("INSERT INTO `forms` (`name`, `description`, `price`) VALUES ('" . $name . "', '" . $description . "', '" . $price . "')");
    }
    public function getUser()
    {
        $query = Database::query("SELECT * FROM `forms` ");
        //         $user = Database::fetch($query);
        $users;
        while ($row[] = Database::fetch($query)) {
        $users = $row;
        };
        print_r(json_encode($users));
    }

    public function updateUser($description, $price, $id)
    {
        $query = Database::query("UPDATE `forms` SET `description` = '$description',`price` = '$price' WHERE `forms`.`id` =  '$id'");

    }

    public function deleteUser($id)
    {
        $query = Database::query("DELETE FROM `forms` WHERE `forms`.`id`= " . $id);
    }
}