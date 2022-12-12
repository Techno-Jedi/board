<?php
$email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
$password = filter_var(trim($_POST['password']), FILTER_SANITIZE_EMAIL);// поменять фильтр пароля
$password = md5($password. "******");
// $phone = filter_var(trim($_POST['phone']), FILTER_SANITIZE_EMAIL);

if($email == "" || $password == ""){
echo "не все поля заполненны";
}else{
$user = new Users();
$user->createUser($email, $password,);
header('Location: /index2.html');
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
    public function createUser($email, $password)
    {
        Database::query("INSERT INTO `users` (`email`, `password`) VALUES ('" . $email . "', '" . $password . "')" );
    }

}
exit();