

window.onload=function(){
	
	document.getElementsByClassName("yz")[0].innerHTML=yzm();
	
	
	 
	// document.getElementById("deng").onclick=function(){
		
			
		
		document.getElementById("yzm").onblur=function(){
			if(this.value==document.getElementsByClassName("yz")[0].innerHTML){
				
				document.getElementById("deng").onclick=function(){
					//1.创建对象
					let xhr = new XMLHttpRequest();
					
					//2设置请求参数
					xhr.open("post","dl.php",true);
					
					//设置回调函数
					xhr.onreadystatechange = function(){
						if(xhr.readyState==4 && xhr.status==200){
							if(xhr.responseText==1){
								console.log(xhr.responseText);
								alert("登录成功");
								location.href="index.html";
								// location
							}else{
								alert("登录失败");
							}
						}
					}
					xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
					
					let sendstr = `userphone=${$("#usphone").value}&userpassword=${$("#uspassword").value}`;
					xhr.send(sendstr);
				}
				
			}else{
				alert("验证码错误");
				return;
			}
			
		}
		
		document.getElementById("changess").onclick=function(){
			document.getElementsByClassName("yz")[0].innerHTML=yzm();
		}
		
		
	// }

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
