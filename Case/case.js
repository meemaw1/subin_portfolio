$(document).ready(function(){

  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      } 
    });
  }

  $("#hamburger").click(function(){
    $("#timeline").toggleClass("timeline_slide");
    $("#line1").toggleClass("line1");
    $("#line2").toggleClass("line2");
    $("#line3").toggleClass("line3");
  });

});