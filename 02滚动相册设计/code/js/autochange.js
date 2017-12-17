var picScroll=document.getElementById("picScroll");
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
var timer=setInterval(changeToLeft,10);
picScroll.onmouseover=function()
{
	clearInterval(timer);
}
picScroll.onmouseout=function()
{
	timer=setInterval(changeToLeft,10);
}