
$(document).ready(function (){

  $("h1").click(function(){
    alert("Here we go");
  });

  $("#show").click(function(){
    var fav1input = $("input#favors1").val();
    $("ul#fav").append("<li>"+fav1input+"</li>");
  })

  $("#showfood").click(function(){
    var foo1 = $("input#1").val();
    var foo2 = $("input#2").val();
    var foo3 = $("input#3").val();
    var foo4 = $("input#4").val();
    var foo5 = $("input#5").val();

  $("li.foo1").text(foo1);
  $("li.foo2").text(foo2);
  $("li.foo3").text(foo3);
  $("li.foo4").text(foo4);
  $("li.foo5").text(foo5);

  $(".invis").show();

  event.preventDefault();

  })

})
