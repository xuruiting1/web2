var arr=["1分 很不满意,差的太离谱，与卖家描述的严重不符，非常不满",
"2分 不满意,部分有破损，与卖家描述的不符，不满意",
"3分 一般,质量一般，没有卖家描述的那么好",
"4分 满意,质量一般，与卖家描述的基本一致，还是挺满意的",
"5分 很满意，质量非常好，与卖家描述的完全一致，非常满意"];
var star = document.getElementsByTagName('img');
var textcontent = document.getElementById('content');
var i,j;
var k=1;
var m;
for(i=0;i<5;i++)
{	
	star[i].index=i;
	star[i].onmouseover=function()
	{
		if(k==1)
		{
			if(this.index<2)
			{
				textcontent.innerHTML=arr[this.index];
				for(j=0;j<=this.index;j++)
				{
					star[j].src="images/star1.png";
				}
			}
		
			else
			{
				textcontent.innerHTML=arr[this.index];
				for(j=0;j<=this.index;j++)
				{
					star[j].src="images/star2.png";
				}
			}
		}
	}
			
}
for(i=0;i<5;i++)
{	
	star[i].index=i;
	star[i].onmouseout=function()
	{
		if(k==1)
		{
			textcontent.innerHTML=' ';
			for(j=0;j<=this.index;j++)
			{
				star[j].src="images/star0.png";
			}
		}
	}
}
for(i=0;i<5;i++)
{	
	star[i].index=i;
	star[i].onclick=function()
	{
		if(this.index<2)
		{
			textcontent.innerHTML=arr[this.index];
			for(j=0;j<=this.index;j++)
			{
				k=0;
				star[j].src="images/star1.png";
			}
			for(;j<5;j++)
			{
				star[j].src="images/star0.png";
			}
		}
		
		else
		{
			textcontent.innerHTML=arr[this.index];
			for(j=0;j<=this.index;j++)
			{
				k=0;
				star[j].src="images/star2.png";
			}
			for(;j<5;j++)
			{
				star[j].src="images/star0.png";
			}
		}
	}			
}
for(m=0;m<5;m++)
{

}