<?php

@$con = mysqli_connect('localhost','root','','xiaomi');
$username = @$_REQUEST['username'];
$password = @$_REQUEST['password'];

if($con){
    
    header('Content-Type:text/html; charset=utf-8'); 
    mysqli_query($con,'set names utf8');

    $sql = "select * from phonenumber where phonenumber = '{$username}'"; 
    $query = mysqli_query($con , $sql);
    
    if($query && $query->num_rows){  //有人注册过了
        echo '<script>alert("有人注册过了，请重新注册");location.href="";</script>';
    }
    else if($query){   // 没有人注册过这个用户名

        $sql = "insert into phonenumber(phonenumber,password) values('{$username}','{$password}')";
        $query = mysqli_query($con , $sql);

        if($query){
            echo '<script>alert("恭喜你注册成功");location.href="";</script>';
        }
        else{
            echo '<script>alert("注册失败");/* history.back() */;</script>';
        }

    }

}
else{
    echo '数据库连接失败！';
}









?>