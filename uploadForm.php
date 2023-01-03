<?php
$name = $_POST['title'];
$description = $_POST['textarea'];
$price = $_POST['price'];
if (!empty($name && $description && $price)) {
    $user = new Users();
    $user->createUser($name, $description, $price);
}
if (!empty($name && $description && $price)) {
    $user = new Users();
    $user->getUser($name, $description, $price);
};
if (!empty($id)) {
    $user = new Users();
    $user->deleteUser($id);
};
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
    public function getUser($name, $description, $price)
    {
        $query = Database::query("SELECT * FROM `forms` ");
        //         $user = Database::fetch($query);
        $users;
        while ($row[] = Database::fetch($query)) {
        $users = $row;

        };
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