<?php


    $con = mysqli_connect('localhost','root','','xiaomi');

    if(!$con){
        echo '数据库连接失败';
        return;
    }


    header('Content-Type:text/html; charset=utf-8'); 
    mysqli_query($con,'set names utf8');

    $username = @$_REQUEST['username'];
    $password = @$_REQUEST['password'];

    if(!$username){
        echo '<script>alert("用户名不能为空");</script>';
        return;
    }
    $sql = "SELECT * FROM phonenumber LEFT JOIN user
    ON phonenumber.phonenumber = user.phonenumber
    WHERE (phonenumber.phonenumber = $username or user.id = $username)
    AND phonenumber.password = $password";

    // echo $sql;
    $query = mysqli_query($con , $sql);



    if( $query && $query->num_rows ){
        $sql2 = "select user.id 
        from user
        left join phonenumber
        on user.phonenumber = phonenumber.phonenumber
        where phonenumber.phonenumber = '{$username}' or user.id = '{$username}'";
        $query2 = mysqli_query($con , $sql2);
        while($row = mysqli_fetch_assoc($query2)){
            $arr[] = $row;
        }
        echo '{"code":1,"list" : '. json_encode($arr) .'}';
    }
    else if($query){
        echo '{"code":0}';;
    }
    else{
        echo '<script>alert("登录失败");</script>';
    }


?>