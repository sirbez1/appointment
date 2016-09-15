$(document).ready(function() {
  $("form#appointment").submit(function(event){
    $("#name").text($("#fullName").val());
    $("#selecteddate").text($("#date").val());
    $("#selectedtime").text($("input:radio[name=time]:checked").val());
    $(".confirmation").show();
    event.preventDefault();

  });

});
