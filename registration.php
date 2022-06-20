<?php
$username=$_POST['username'];
$password1=$_POST['password1'];
$password2=$_POST['password2'];
$emailid=$_POST['emailid'];
// database connection
$conn=new mysqli('localhost','root','','smart_city');
if($conn->connect_error){
    die('connection failed : '.$conn->connect_error);
    }
    else
    {
        $stmt=$conn->prepare("inser into registraion(username,password1,password2,emailid)
        values(?,?,?,?)");
        $stmt->bind_param("ssss",$username,$password1,$password2,$emailid);
        $stmt->execute();
        echo "registraion Successfully...";
        $stmt->close();
        $conn->close();
    }