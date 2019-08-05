<?php
	header("Content-type:text/html;charset=utf-8");
	
	//接收前端的输入 （接收前端传来的数据）
	$userphone = $_POST['userphone'];
	$userpassword = $_POST['userpassword'];
	
	//2保存
	//1）建立连接
	$con = mysql_connect('localhost','root','root');
	
	if(!$con){
		die('连接失败');
	}
	
	//2)选择数据库
	mysql_select_db('chuangwei',$con);
	
	//3)执行sql语句
	$sqlstr = "select * from vip where userphone = '$userphone' and userpassword = '$userpassword'";
	
	$result = mysql_query($sqlstr);  //查询结果是否是表格
	
	
	//4)关闭数据库
	mysql_close($con);
	
	//3响应
	//判断查询出来的表格的行数
	$rows = mysql_num_rows($result);
	
	if($rows==1){
		echo 1;
		// header('Location: index.html');
	}else{
		echo 0;
	}
	
	
?>