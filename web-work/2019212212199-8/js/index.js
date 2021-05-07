
//--------

var pic=document.getElementsByClassName("pic"),
    outer=document.getElementsByClassName("outer")[0],
	bigimg=document.getElementById("bigimg"),
	items=document.getElementsByClassName("item"),
	slid=document.getElementsByClassName("slidemain")[0],
	addBox=document.getElementsByClassName("add-box")[0],
	DATA=document.getElementsByClassName("DATA")[0];


//------点击图片放大--------------
for(let i=0;i<pic.length;++i){
	pic[i].onclick=function(e){
		var src=pic[i].src;
        bigimg.src=src;
        outer.style.display='block';
}
}
outer.onclick=function(e){
    outer.style.display='none';
}


//----滑动界面--------------------------
for(var i=0;i<items.length;++i){
	items[i].onclick=function(){
		for(let j=0;j<items.length;++j){
			items[j].style.backgroundColor="white";
		}
		this.style.backgroundColor="#00a0e9";
		slid.getElementsByTagName("span")[0].innerHTML=Array.prototype.indexOf.call(this.parentNode.children,this)+1;
	}
}
//----------数据管理操作--------------------
window.onload=function(){
    addBox.onclick=function(){
	var fa=this.parentElement;
	var num=fa.childElementCount>1?parseInt(fa.children[fa.childElementCount-2].children[0].innerText)+1:1;
	var addHtml="<div class=\"data-box\"><div class=\"data-box-ft font\"><span>1</span></div><div class=\"data-box-se font\"><span>Delete</span></div></div>";
	this.insertAdjacentHTML("beforeBegin",addHtml);
	fa.children[fa.childElementCount-2].children[0].innerText=num;
	fa.children[fa.childElementCount-2].children[1].addEventListener("click",function(){
		this.parentElement.remove();
	});
}
}
for(let i=0;i<DATA.childElementCount-1;++i){
	DATA.children[i].children[1].addEventListener("click",function(){
		this.parentElement.remove();
	});
}



//----------------初始化--------
outer.style.display='none';
items[0].style.backgroundColor="#00a0e9";