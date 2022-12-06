<?php
$filename = "files/" . $_FILES["image"]["name"];
echo $filename;
if(move_uploaded_file($_FILES["image"]["tmp_name"], $filename)){
echo "Успех";
}
else{
echo "неудача";
}
