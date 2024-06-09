<?php

$con = mysqli_connect('localhost','root');

if($con){
    echo "connection successfull";

}else{
    echo "no connection";
}

mysqli_select_db($con, 'logindata');
$username=$_POST['username'];
$password=$_POST['password'];


$query =" insert into websitedata (username,password) VALUES ('$username','$password')";
echo "$query";
mysqli_query($con,$query);





?>