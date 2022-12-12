<?php
$email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
$password = filter_var(trim($_POST['password']), FILTER_SANITIZE_EMAIL);
$password = md5($password. "******");
// $phone = filter_var(trim($_POST['phone']), FILTER_SANITIZE_EMAIL);
// if(mb_strlen($email)< 5 || (mb_strlen($email) > 90 ){
// echo "Недопустимая длина email";
// exit();
// }else if(mb_strlen($password)< 5 || (mb_strlen($password) > 40){
// echo "Недопустимая длина email";
// exit();
// }
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $user = new Users();
  $user-> getUser($email,$password);
}else{
echo "ho";
exit();
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
    public function getUser($email,$password)
        {
            $query = Database::query("SELECT * FROM `users` WHERE `email` = '$email' AND `password` = '$password'");
            $users = Database::fetch($query);
            $result = (array)$users;
            if(count($result) == 0 ){
            echo "Такого пользователя нет";
          header('Location: /index3.html');
            exit();
            }else{
            header('Location: /index2.html');
            print_r($result);
            }

        }
}



// header('Location: /index2.html');
exit();