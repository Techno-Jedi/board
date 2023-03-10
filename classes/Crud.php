<?php

class Crud extends Model
{
    public function createUser($name, $description, $price, $filename, $user_id)
    {
        Database::query("INSERT INTO `forms` (`name`, `description`, `price`, `filename`, `user_id`) VALUES ('" . $name . "', '" . $description . "', '" . $price . "','" . $filename . "','" . $user_id . "')");
    }
    public function getUser($id)
    {
        $query = Database::query("SELECT * FROM `forms` WHERE `user_id` =" . $id );

        while ($row[] = Database::fetch($query) ) {
            $users = $row;
        };
        print_r(json_encode($users));
    }

    public function updateUser($name, $description, $price,$filename, $id)
    {
               $query = Database::query("UPDATE `forms` SET `name` = '$name',`description` = '$description',`price` = '$price',`filename` = '$filename' WHERE id=" . $id);

    }

    public function deleteUser($id)
    {
        $query = Database::query("DELETE FROM `forms` WHERE `forms`.`id`= " . $id);
    }
}