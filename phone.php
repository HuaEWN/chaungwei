<?php
	header("Content-type:text/html;charset=utf-8");
	
	//接受前端输入(前端传来的数据)
	$phone = $_GET['telephone'];  //接收到手机号
	
	//2保存
	//1)建立连接
	$conn = mysql_connect('localhost','root','root');
	
	if(!$conn){
		die('连接失败');
	}
	
	//2)选择数据库
	mysql_select_db('chuangwei',$conn);
	
	//3)执行sql语句
	$sqlstr = "select * from vip where userphone = '$phone'";
	$result = mysql_query($sqlstr);  //查询是不是表格
	
	
	//4)关闭数据库
	mysql_close($conn);
	
	//3响应
	//判断查询出来的表格行数
	$rows = mysql_num_rows($result);
	
	if($rows==1){
		echo 1;
	}else{
		echo 0;
	}
	
?>