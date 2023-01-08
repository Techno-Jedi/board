<?php
session_start();
// $method = $_SERVER['REQUEST_METHOD'];
// print_r($object = json_decode($_REQUEST['id'], true));
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $user = new Users();
    $showUsers = $user->getUser();


} else if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $user = new Users();
  $user->createUser($_REQUEST["title"],$_REQUEST["textarea"], $_REQUEST["price"]);
  $user->getUser();


} else if ($_SERVER["REQUEST_METHOD"] == "PUT") {
  $user = new Users();
  $data = ['id'=>$_REQUEST["id"], 'name'=>$_REQUEST["title"]];
  $user->updateUser($data);

} else if ($_SERVER["REQUEST_METHOD"] == "DELETE") {
  $user = new Users();
  $id =  $_SESSION["id_form"];
  $user->deleteUser($id);
echo  $_SESSION["id_form"];
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
         $_SESSION["id_form"] = $users[0]["id"];
        print_r(json_encode($users));

    }

    public function updateUser($data)
    {
        $query = Database::query("UPDATE `forms` SET `name`= '" . $data['name'] . "' WHERE `id` = " . $data['id']);
    }

    public function deleteUser($id)
    {
        $query = Database::query("DELETE FROM `forms` WHERE `forms`.`id`= " . $id);
    }
}