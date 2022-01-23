$(document).ready(function(){
  $("#js-def-hidden").click(function() {
    $("#js-def-showing").removeClass();
    $("#js-def-hidden").addClass("hidden");
  });
  $("#js-def-showing").click(function() {
    $("#js-def-hidden").removeClass();
    $("#js-def-showing").addClass("hidden");
  });
  $("#op-def-hidden").click(function() {
    $("#op-def-showing").removeClass();
    $("#op-def-hidden").addClass("hidden");
  });
  $("#op-def-showing").click(function() {
    $("#op-def-hidden").removeClass();
    $("#op-def-showing").addClass("hidden");
  });


});