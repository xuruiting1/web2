

var Nodes = document.getElementsByClassName("impor");


			for (var i=0; i<Nodes.length; i++)
			{
				
				Nodes[i].onmouseover = function(){
					this.className = "impor2";
				}
				Nodes[i].onmouseout = function(){
					this.className = "impor";
				}
			}
			



// 照片轮换
var box =document.getElementsByClassName('wrap')[0];
			//box是数组形式的要注意
			var i=0;
			var links=box.children;
			var timer;
			function imgtable()
			{
				links[i%9].style.display='none';
				i++;
				links[i%9].style.display='block';
			}
			timer=setInterval(imgtable,2000);
			box.onmouseover=function(){
				clearInterval(timer);
			}
			box.onmouseout=function(){
				timer=setInterval(imgtable,1500)//imgtable在 周期执行的函数里面调用
			}
			var prev=document.getElementById('prev');
			var next=document.getElementById('next');
			prev.onclick=function(){
				links[i%9].style.display='none';
				i--;
				if(i<0)
				{
					i=8;
				}
				links[i%9].style.display='block';
	
			}
			next.onclick=function(){
				imgtable();
			}


			