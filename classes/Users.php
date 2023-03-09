<?php
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
        } else {
            echo "ok";
        }
    }
    public function updateUser($name, $description, $price, $filename, $id)
           {
               $query = Database::query("UPDATE `forms` SET `name` = '$name',`description` = '$description',`price` = '$price',`filename` = '$filename' WHERE id=" . $id);

           }
}