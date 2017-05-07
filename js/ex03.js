$(init) 
var sum = 3;
function init() {
  $("div.ui-frcell-big").hide();
  $("div.ui-frcell").click(function(){
  	$("div.ui-frcell-big").show();
  });
  $("div.ui-frcell-big").click(function(){
  	$("div.ui-frcell-big").hide();
  });
// 2
  $("#ui-mice-1").css("background-color","#c0c0c0");
   $("#ui-mi-2").hide();
  $("#ui-mi-3").hide();
  $("#ui-mice-1").click(function() {
  	$("#ui-mice-1").css("background-color","#c0c0c0");
  	$("#ui-mice-2").css("background-color","#ffffff");
  	$("#ui-mice-3").css("background-color","#ffffff");
  	$("#ui-mi-1").show();
    $("#ui-mi-2").hide();
    $("#ui-mi-3").hide();
  });
    $("#ui-mice-2").click(function() {
  	$("#ui-mice-2").css("background-color","#c0c0c0");
  	$("#ui-mice-1").css("background-color","#ffffff");
  	$("#ui-mice-3").css("background-color","#ffffff");
  	$("#ui-mi-2").show();
    $("#ui-mi-1").hide();
    $("#ui-mi-3").hide();
  });
    $("#ui-mice-3").click(function() {
  	$("#ui-mice-3").css("background-color","#c0c0c0");
  	$("#ui-mice-1").css("background-color","#ffffff");
  	$("#ui-mice-2").css("background-color","#ffffff");
  	$("#ui-mi-3").show();
    $("#ui-mi-2").hide();
    $("#ui-mi-1").hide();
  });
// 3
    $(".ui-bobody").on('click', ".delete",function () {
    	$(this).parent().remove();
    	$(".ui-bobox").each(function(){
    		var num = $(this).index() + 1;
    		$(this).children(".bo-cell-1").text(num);
    	});
    	sum--;
    });

    $(".bo-button").click(function(){
    	sum++;
    	var add = $("<div class=\"ui-bobox\"><div class=\"bo-cell-1\">"+ sum +"</div><div class=\"delete\">Delete</div></div>");
    	$(".ui-bobody").append(add);
    });
}