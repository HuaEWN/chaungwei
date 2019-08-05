//我的购物车
my$("bymyCar").addEventListener("mouseover",function(){
	my$("fux").style.display="block";
},false);


my$("bymyCar").addEventListener("mouseout",function(){
	my$("fux").style.display="none";
},false);

my$("fux").addEventListener("mouseover",function(){
	my$("fux").style.display="block";
},false);

my$("fux").addEventListener("mouseout",function(){
	my$("fux").style.display="none";
},false);

my$("fuclo").addEventListener("click",function(){
	my$("fux").style.display="none";
},false);



my$("phoneduan").addEventListener("mouseover",function(){
	my$("mmm").style.display= "block";
},false);

my$("phoneduan").addEventListener("mouseout",function(){
	my$("mmm").style.display= "none";
},false);

my$("mmm").addEventListener("mouseover",function(){
	my$("mmm").style.display= "block";
},false);

my$("mmm").addEventListener("mouseout",function(){
	my$("mmm").style.display= "none";
},false);



function my$(id){
	return document.getElementById(id);
}