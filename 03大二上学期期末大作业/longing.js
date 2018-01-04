//导航栏的鼠标划上效果
var bannerchild=document.getElementsByClassName('bannerchild');
var nav=document.getElementsByClassName('nav');


//导航栏效果
for(var i=0;i<nav.length;i++)
{
	nav[i].index=i;
	nav[i].onmouseover=function()
	{
		bannerchild[this.index].style.display="block";	
	}
	nav[i].onmouseout=function()
	{
		bannerchild[this.index].style.display="none";					
	}	

}


// 照片墙用随机数随机换图片
var photowall=document.getElementById('photowall');
var banner=document.getElementById('banner');
var imgs=document.getElementById("photowall").getElementsByTagName("img")
function randomchange1()
{
	imgs[Math.floor(Math.random()*10+2)].src="images/"+Math.floor(Math.random() * 50)+".jpg";
}
setInterval(randomchange1,800);
function randomchange2()
{
	imgs[Math.floor(Math.random()*20+4)].src="images/"+Math.floor(40+Math.random() *40)+".jpg";
}
setInterval(randomchange2,1300);
function randomchange3()
{
	imgs[Math.floor(Math.random()*30+6)].src="images/"+Math.floor(80+Math.random() * 50+8)+".jpg";
}
setInterval(randomchange3,1000);
for(var j=0;j<imgs.length;j++)
{
	imgs[j].index=j;
	imgs[j].onmouseover=function ()
	{
		this.style.opacity="1";
	}
	imgs[j].onmouseout=function ()
	{
		this.style.opacity="0.7";
	}
}
//轮播效果
// 照片轮换
var box=document.getElementsByClassName('content')[0];
var links=box=document.getElementsByClassName('content1');
//box是数组形式的要注意
var i=0;
var timer;
function divchange()
{
	links[i%2].style.display='none';
	i++;
	links[i%2].style.display='block';
}
timer=setInterval(divchange,3000);
box.onmouseover=function(){
	clearInterval(timer);
}
box.onmouseout=function(){
	timer=setInterval(divchange,3000)//imgtable在 周期执行的函数里面调用
}
var prev=document.getElementById('prev');
var next=document.getElementById('next');
prev.onclick=function(){
	links[i%2].style.display='none';
	i--;
	if(i<0)
	{
		i=1;
	}
	links[i%2].style.display='block';
	
}
next.onclick=function(){
	divchange();
}
// 相册滚动效果

var picScroll=document.getElementById("change");
var picScroll1=document.getElementById("picScroll1");
function changeToLeft()
{
	if(picScroll.scrollLeft>=(picScroll1.offsetWidth))
	{
		picScroll.scrollLeft=0;
	}
	else
	{
		picScroll.scrollLeft+=1;
	}
}
var timer=setInterval(changeToLeft,30);
picScroll.onmouseover=function()
{
	clearInterval(timer);
}
picScroll.onmouseout=function()
{
	timer=setInterval(changeToLeft,30);
}


// 气球落下的效果
setInterval(
	function ()
 	{ 
 		for(var i=1;i<4;i++)
 		{ 
  			new qiqiuhuaban().slip(); 
 		} 
},1000) ;
function qiqiuhuaban() { 
   this.speed=30; 
   this.img=new Image(); 
   this.img.src="images/"+parseInt(Math.random()*11+1)+".gif"; 
   this.img.ClassName="randomimg";
   this.img.style.width=90+'px'; 
   this.img.style.height=90+'px';
   this.img.style.position="absolute"; 
   this.img.style.top=Math.random()*window.innerHeight+1+'px'; 
   this.img.style.left=Math.random()*window.innerWidth+1+'px'; 
   document.body.appendChild(this.img); 
  
 } 
  
  qiqiuhuaban.prototype.slip=function () { 
  
   var that=this; 
   function move() { 
    that.img.style.top=that.img.offsetTop+that.speed+'px'; 
    if(that.img.offsetLeft>1300){ 
     clearInterval(sh); 
     that.img.style.height=0; 
     that.img.style.width=0; 
    } 
    if(that.img.offsetTop>5800){ 
     clearInterval(sh); 
     that.img.style.height=0; 
     that.img.style.width=0; 
    } 
   } 
   var sh=setInterval(move,100); 
  } 
  




	

