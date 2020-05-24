$(document).ready(function(){
  $("#timeline_button").click(function(){
    $("#timeline").css({"margin-left":"0%"});
    $("#black_screen").css({"opacity":"1",
    					   "z-index":"10"});
  });

  $("#cross").click(function(){
    $("#timeline").css({"margin-left": "-100%"});
    $("#black_screen").css({"opacity":"0",
    					   "z-index":"-10"});
  });

  $("#hamburger").click(function(){
    $("#navbar").toggleClass("slide");
    $("#line1").toggleClass("line1");
    $("#line2").toggleClass("line2");
    $("#line3").toggleClass("line3");
  });

  $("#timeline_button").click(function(){
    $("#timeline").toggleClass("timeline_slide");
  });

});