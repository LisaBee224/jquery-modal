$(document).ready(function(){
  $("button").click(function(e){
    $(e.target).parent("body").addClass('active');
    $("#modal").show();
    $(".close").click(function(e){
      $(e.target).parent().hide();
      $("body").removeClass();
    });
  });

});