//点击p1对象,其字体颜色变成红色;
//点击p2对象,将h1的内容变成当前的日期,其格式为 yyyy-mm-dd ;
//点击p3对象,将其父对象的li元素增加 fn-active 类;
//点击p4对象,删除表格的p8元素;
//点击p5对象,打开一个新窗口,里面显示淘宝主页;
//点击p6对象,在 ul 的最后添加一个 li 元素，其内容是 p9;
//点击li对象, 弹出 alert 对话框显示当前点击 li 的序号;
//点击p7对象,将 m-box 的宽度设置到屏幕宽度;
window.onload=function(){
    var oul=document.getElementById("ul");
    var ali=oul.getElementsByTagName("li");
    var H=document.getElementById("h1");
    var date=new Date();
        ali[0].onclick=function(){
            this.style.color="red";
            alert(1); 
        }
        ali[1].onclick=function(){
            var month=date.getMonth()+1;
            month.toString().padStart(2,'0');
//           H.innerText=date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
            H.innerText=date.getFullYear()+"-"+month+"-"+date.getDate();
            alert(2); 
        }
        ali[2].onclick=function(){
            var parent=ali[2].parentNode;
            var Ali=parent.querySelectorAll("li");
            for(var i=0;i<Ali.length;++i){
                Ali[i].classList.add("fn-active");
            }
            alert(3); 
        }
        ali[3].onclick=function(){
            ali[7].remove();
            alert(4); 
        }
        ali[4].onclick=function(){
            location.href="https://www.tmall.com/?ali_trackid=2:mm_26632258_3504122_48284354:1616141145_219_1813480041&union_lens=recoveryid:1616141145_219_1813480041&clk1=4bbd8ee147935f52c49a6ec199563590&bxsign=tbkiTzeUdmevDtEf8+J8RSpr2/CLv6JbQrbxFUYz/9m+omMb1ZxifOP079PTolF5QhoDUPCIY2xpQmgJIDQTaPndEfMiGamXcVYb8B9epzHJCs=";
            alert(5); 
        }
        ali[5].onclick=function(){
            var oLi = document.createElement("li");
                oLi.innerText = "p9";
                oul.appendChild(oLi);
            alert(6); 
        }
        ali[6].onclick=function(){
            var box=document.querySelector(".m-box");
            var str=screen.availWidth+"px";
            box.style.width=str;
            alert(7); 
        }
}
