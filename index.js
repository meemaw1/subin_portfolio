$(document).ready(function(){

  $("#hamburger").click(function(){
    $("#navbar").toggleClass("slide");
    $("#line1").toggleClass("line1");
    $("#line2").toggleClass("line2");
    $("#line3").toggleClass("line3");
  });

});