$(function() {
        
  function updateOutput() {
    $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#css-area").val() + "</style></head><body>" + $("#html-area").val() + "</body></html>");
  }

  $( "#tabs-menu" ).buttonset();

  $("#css").attr("checked","checked").button('refresh');
  $("#js").button("disable");
  $(".area").width(($(window).width()/2) - 3);

  updateOutput();

  $("input").click(function() {
    $(this).button('refresh');
    var areaId = $(this).attr("id") + "-area";
    $("#" + areaId).toggleClass("hidden");
    var numberOfHidden = $(".hidden").length;
    if (numberOfHidden < 4) {
      $(".area").width(($(window).width()/(4 - numberOfHidden)) - 5);
    }
  });

  $(".area").height($(window).height() - $("#topbar").height() - 8);

  $("textarea").on("change keyup paste", function() {
    updateOutput();
  });

});