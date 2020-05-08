$(document).ready(function(){

    $("#btnFollow").hover(function(){

      $("#Iconsdiv").css("visibility","visible");
    });
    
    $("#nav1").click(function(){

      $("#rightDiv").css("background-image","url(newWall3.jpg)")
   });

    $("#nav2").click(function(){

       $("#rightDiv").css("background-image","url(newWall2.jpg)")
    });

    $("#nav3").click(function(){

      $("#rightDiv").css("background-image","url(newWall6.jpg)");
      
   });

   $("#nav4").click(function(){

    $("#rightDiv").css("background-image","url(newWall3.jpg)")
 });

   $("#contactDiv1").mouseover(function(){
         
      $("#conH2").css("color","yellow"),
      $("#contactDiv1").css("border","1px solid yellow")
   });

   $("#contactDiv1").mouseout(function(){
         
      $("#conH2").css("color","white"),
      $("#contactDiv1").css("border","1px solid white")
   });

   $(".contactP").mouseover(function(){
         
      $(".contactP").css("color","yellow");
   });

   $(".contactP").mouseout(function(){
         
      $(".contactP").css("color","white");
   });
});