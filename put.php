<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
print_r($_POST["id"]);
  $user = new Users();
  $user->createUser($_POST["title"],$_POST["textarea"],$_POST["price"],$_POST["id"],);

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
    public function createUser($name, $description, $price,$id)
    {
        $query = Database::query("UPDATE `forms` SET `name` = '$name',`description` = '$description',`price` = '$price' WHERE `forms`.`id` =  '$id'");
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
}