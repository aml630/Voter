$(document).ready(function() {
  $("button#hello").click(function() {
  $("ul#user").prepend("<li>Hello!</li>");
  $("ul#web").prepend("<li>Oh Hey</li>");
  $(this).remove();

  });

  $("button#goodbye").click(function() {
    $("ul").prepend("<li>Goodbye!</li>");
  });

  $("button#stop").click(function() {
    $("ul").prepend("<li>Stop copying me!</li>");
  });


  $("button#stop").click(function() {
    $("ul").prepend("<li>Stop copying me!</li>");
  });








});
