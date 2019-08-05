

window.onload=function(){
//	验证码
	document.getElementsByClassName("yanz")[0].innerHTML=yzm();
	document.getElementById("yzms").onblur=function(){
		if(this.value==document.getElementsByClassName("yanz")[0].innerHTML){
			document.getElementById("a").innerHTML="验证码正确";
			document.getElementById("a").style.color="#999";
		}else{
			document.getElementById("a").innerHTML="验证码错误";
			document.getElementById("a").style.color="red";
		}
		
	}
	
//	点击切换验证码
	document.getElementById("changes").onclick=function(){
		document.getElementsByClassName("yanz")[0].innerHTML=yzm();
	}
	
	
	//手机号
	document.getElementById("phos").onblur=function(){
		document.getElementById("b").innerHTML="";
		if(check(this.value,"phone")){
			// document.getElementById("b").innerHTML="格式正确";
			afterCheckUser((has)=>{
				if(has){
					document.getElementById("b").innerHTML="手机号已经存在";
					document.getElementById("b").style.color="red";
					return;
				}else{
					document.getElementById("b").innerHTML="正确";
					document.getElementById("b").style.color="#999";
				}	
			}); //后端验证

		}else{
			document.getElementById("b").innerHTML="格式错误";
			document.getElementById("b").style.color="red";
			return;
		}
	}
	
	
//	手机验证
	document.getElementById("telyz").onblur=function(){
		if(this.value==document.getElementById("phos").value){
			document.getElementById("c").innerHTML="验证正确";
			document.getElementById("c").style.color="#999";
		}else{
			document.getElementById("c").innerHTML="验证错误";
			document.getElementById("c").style.color="red";
		}
	}
	
	
//	第一次确认
	document.getElementById("overone").onclick=function(){
		if(isExistsUser){
			alert("手机号存在");
			return;
		}
		if((document.getElementById("yzms").value==document.getElementsByClassName("yanz")[0].innerHTML)&&(document.getElementById("telyz").value==document.getElementById("phos").value)){
			document.getElementsByClassName("phonebox")[0].style.display="none";
			document.getElementsByClassName("phoneboxas")[0].style.display="block";
			
		}else{
			alert("请查看填写信息是否正确");
			return;
		}
	}
	
	
	//验证密码格式
	document.getElementById("passw").onblur=function(){
		if(check(this.value,"password")){
			document.getElementById("pas").innerHTML="密码格式正确";
			document.getElementById("pas").style.color = "#999";
		}else{
			document.getElementById("pas").innerHTML="密码格式错误";
			document.getElementById("pas").style.color = "red";
			return;
		}
	}
	
	
	//确认密码
	document.getElementById("onespas").onblur=function(){
		if(document.getElementById("passw").value==document.getElementById("onespas").value){
			document.getElementById("repas").innerHTML="正确";
			document.getElementById("repas").style.color="#999";
		}else{
			document.getElementById("repas").innerHTML="请确认密码";
			document.getElementById("repas").style.color="red";
			return;
		}
	}
	
	//跳转
	document.getElementById("tworun").onclick=function(){
		if(check(document.getElementById("passw").value,"password")&&document.getElementById("passw").value==document.getElementById("onespas").value){
			document.getElementsByClassName("phoneboxas")[0].style.display="none";
			document.getElementsByClassName("phoneboxss")[0].style.display="block";
		}else{
			alert("请确认信息是否正确");
			return;
		}
	}
	
	//注册
	document.getElementById("placedl").onclick=function(){
		//1.创建对象
		let xhr = new XMLHttpRequest();
		
		//2设置请求参数
		xhr.open("post","zc.php",true);
		
		//设置回调函数
		xhr.onreadystatechange = function(){
			if(xhr.readyState==4 && xhr.status==200){
				if(xhr.responseText==1){
					console.log(xhr.responseText);
					alert("注册成功");
					location.href="index.html";
					// location
				}else{
					alert("注册失败");
				}
			}
		}
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		
		let sendstr = `telephone=${$("#phos").value}&userpassword=${$("#passw").value}`;
		xhr.send(sendstr);
	}
	

}




//用户名是否存在
var isExistsUser = false;
//后端验证用户名是否存在
function afterCheckUser(func){
	//1、创建对象
	let xhr = new XMLHttpRequest();
	//2、设置请求参数
	let sendstr = "telephone="+$("#phos").value;
	xhr.open("get","phone.php?"+sendstr,true);
	
	//3、设置回调函数
	xhr.onreadystatechange = ()=>{	
		if(xhr.readyState==4 && xhr.status==200){
			isExistsUser = xhr.responseText==1?true:false;
			func(isExistsUser);
		}
	}
	//4、发送请求
	xhr.send();

}



//验证码
function yzm(){
		var str = "";
		for(var i =0;i<4;i++){
			var m = parseInt(Math.random()*123)
				if(m<10){
					str+=m;
				}else if(m>=97 && m<123){
					str+=String.fromCharCode(m);
				}else if(m>=65 && m<91){
					str+=String.fromCharCode(m);
				}else{
					i--;
				}
			}
		
		return str;
	}



function check(str,type) {
	switch(type){
		case "zhangId":var r = /^[a-zA-Z_]\w{5,14}$/;break;  //账户
		case "yb" :var r = /^[1-9]\d{5}$/;break;  //邮编
		case "email":var r = /^[1-9a-zA-Z]\w{5,17}\@\w{2,10}\.(com|cn|net|com.cn)$/;break;  //邮箱
		case "phone":var r = /^1[3-9]\d{9}$/;break;   //手机号
		case "id":var r = /^[1-9]\d{5}[1-9][0-9][0-9][1-9](0[1-9]|1[0-2])\d{5}[0-9X]$/;break;   //身份证号
		case "sr":var r = /^[0-9][1-9][0-9][1-9](\*|\-|\/)[0-9][0-2](\*|\-|\/)[0-9][0-9]$/;break; //出生日期
		case "ip":var r = /^[1-9][0-9][0-9]\.[1-9][0-9][0-9]\.([0-9][0-9][0-9]|[0-9][0-9]|[0-9])\.([0-9][0-9][0-9]|[0-9][0-9]|[0-9])$/;break; //ip
		case "password":var r = /^([a-z]|[A-Z]|[0-9]){6,12}$/;break;    //密码
		
	}

		return r.test(str);

	}
	
	
	function $(str){
		if(str.charAt(0)=="#"){
			return document.getElementById(str.substring(1));
		}else if(str.charAt(0)=="."){
			return document.getElementsByClassName(str.substring(1));
		}else{
			return document.getElementsByTagName(str);
		}
	}	