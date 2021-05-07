
$(document).ready(function(){
    $(".outer").hide();
    $(".pic").click(function(){
       var _this=$(this);
       var src=_this.attr("src");
       $(".bigimg").attr("src",src);
        $(".pic").attr("opacity",0.5);
       $(".outer").fadeIn("fast");
    });
    $(".outer").click(function(){
         $(".pic").attr("opacity",1);
       $(".outer").fadeOut("fast");
    });
    
    $(".item:nth-child(1)").css({"background-color":"#00a0e9"});
    $(".item").click(function(){
		$(".item").css({"background-color":""});
		$(this).css({"background-color":"#00a0e9"});
		$(".slidemain>span").html(($(this).index()+1));
	});
    
    
    var addData=function(){
		$(".data-box:nth-last-child(1)").clone(true).appendTo($(".data-box:nth-last-child(1)"));
		$(".data-box:nth-last-child(1)>.data-box-ft").html($(".g-thwk").children().length);
	}
	$(".add-box").click(function(){
		var addHtml="<div class=\"data-box\"><div class=\"data-box-ft font\"><span>1</span></div><div class=\"data-box-se font\"><span>Delete</span></div></div>";
		$(".add-box").before(addHtml);
		var num=($(".g-thwk").children().length-1)==1?1:parseInt($(".data-box:nth-last-child(3)>.data-box-ft>span").html())+1;
		$(".data-box:nth-last-child(2)>.data-box-ft>span").html(num);
	});
	$(document).on("click",".data-box-se",function(){
		$(this).parent().remove();
	})
})
