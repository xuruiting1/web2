var send = document.getElementsByClassName('send')[0];
var area = document.getElementsByClassName('area')[0];
var warning = document.getElementsByClassName('warning')[0];
var msgBox = document.getElementById('msgBox');
var talkMsg=document.getElementsByClassName('talkMsg')[0];
var timer;







	// 回车发送消息
	area.onkeydown = function(e){
		if(e.keyCode == 13&&e.shiftKey==false){
			send.onclick();
			e.preventDefault();
		}
	}

	// 点击发送按钮发送消息
	send.onclick = function(){
		if (area.value == '') {
			warning.style.display = 'block';
			clearTimeout(timer);
			timer = setTimeout(function(){
				warning.style.display = 'none';
			},1000)
		}else{
			var li = document.createElement('li');
			li.className = 'clearFix';
			li.innerHTML = '<p class="time">'+new Date().toLocaleString()+'</p><p class="content"><span class="conText">'+area.value+'</span><span class="myHead"></span></p>';
			msgBox.appendChild(li);
			li.scrollIntoView();
			area.value ='';
			area.focus();
		}
	}
//右键点击效果
var rightbutton=document.getElementsByClassName('rightbutton')[0];
talkMsg.oncontextmenu=function(e)
{
	e.preventDefault();

	rightbutton.style.display="block";
	rightbutton.style.left=e.clientX +5+'px';
	rightbutton.style.top=e.clientY+20+'px';
	
}
document.onclick=function()
{
	rightbutton.style.display="none";

}

// 拓展右键点击效果划上背景颜色改变
var ppp=document.getElementsByClassName('aaa');
for(var q=0;q<ppp.length;q++)
{
	ppp[q].index=q;
	ppp[q].onmouseover=function(){
		ppp[this.index].style.background='#009bdb';				
	}
	ppp[q].onmouseout=function(){
		ppp[this.index].style.background='white';				
	}
}

var ppp1=document.getElementsByClassName('aaa1');
for(var h=0;h<ppp1.length;h++)
{
	ppp1[h].index=h;
	ppp1[h].onmouseover=function(){
		ppp1[this.index].style.background='#009bdb';				
	}
	ppp1[h].onmouseout=function(){
		ppp1[this.index].style.background='white';				
	}
}



// 表情效果

var lookbox=document.getElementById('lookbox');
var express=document.getElementsByClassName('express')[0];
var n=1;
var m=1;

express.onclick=function ()
 {
 	if(n%2)
 	{
	 	lookbox.style.display='block';
	 	if(m==1)
	 	{
			for(var k=1;k<133;k++)
			{
				lookbox.innerHTML+='<img src="img/QQ/'+k+'.gif"/>';
			
			}

		}
		
	}
	n++;
	m++;
	if(n%2)
	{
		lookbox.style.display='none';
	}
}











