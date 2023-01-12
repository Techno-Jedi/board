<?php
// $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
// $password = filter_var(trim($_POST['password']), FILTER_SANITIZE_EMAIL); // поменять фильтр пароля
// // $password = md5($password . "******");
// $phone = ""; // поменять фильтр телефона
session_start();

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
    public function createUser($email, $password, $phone)
    {
        Database::query("INSERT INTO `users` (`email`, `password`, `phone`) VALUES ('" . $email . "', '" . $password . "', '" . $phone . "')");
    }
    public function getUser($email, $password)
    {
        $query = Database::query("SELECT * FROM `users` WHERE `email` = '$email' AND `password` = '$password'");
        $user = Database::fetch($query);
        if (
            is_array($user)
            && $email === $user["email"]
            && $password === $user["password"]
        ) {
            print_r(json_encode($_SESSION["id"] = $user["id"]));
        }else{
        echo "ok";
        }
    }
}