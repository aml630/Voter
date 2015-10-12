
$(document).ready(function (){
  $("h1").click(function(){
    alert("Here we go");
  });

  $("#show").click(function(){
var fav1input = $("input#favors1").val();
// $(this).css("list-style-type", "square");


//    $(".fav1").text(fav1input);
  
$("ul").append("<li>"+fav1input+"</li>");




  })



})
