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


        $sql1 = "insert into user (id, phonenumber) 
        SELECT MAX(mk.id)+1,'{$username}'
        FROM user as mk
        ";
        $query = mysqli_query($con , $sql1);

        $sql2 = 'select MAX(mk.id) FROM user as mk';
        $query = mysqli_query($con , $sql2);

        while($row = mysqli_fetch_assoc($query)){
           $str =  array_shift($row);
        };

        if($query){
            echo '{"code":1,"id" : '. json_encode($str) .'}';
        }
        else{
            echo '<script>alert("注册失败");location.href="";</script>';
        }
    }

}
else{
    echo '数据库连接失败！';
}









?>