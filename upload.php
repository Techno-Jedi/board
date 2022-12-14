<?php
// $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
// $password = filter_var(trim($_POST['password']), FILTER_SANITIZE_EMAIL); // поменять фильтр пароля
// // $password = md5($password . "******");
// $phone = ""; // поменять фильтр телефона

$email = $_REQUEST['email'];
$password = $_REQUEST['password'];

if (!empty($email && $password)) {
    $user = new Users();
    $user->getUser($email, $password);
};
if (!empty($_REQUEST['phone'])) {
    $phone = $_REQUEST['phone'];
} else {
    $phone = "";
};
if (!empty($email && $phone && $password)) {
    $user = new Users();
    $user->createUser($email, $password, $phone);
    header('Location: /index2.html');
} else {
    echo "Пароль не верный или не все поля заполнены";
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
            header('Location: /index2.html');
        };
    }
}