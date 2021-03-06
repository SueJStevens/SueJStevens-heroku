$(function() {
    setFooterStyle();
    window.onresize = setFooterStyle;
  
    function setFooterStyle() {
      var docHeight = $(window).height();
      var footerHeight = $("#footer").outerHeight();
      var footerTop = $("#footer").position().top + footerHeight;
      if (footerTop < docHeight) {
        $("#footer").css("margin-top", docHeight - footerTop + "px");
      } else {
        $("#footer").css("margin-top", "");
      }
      $("#footer").removeClass("invisible");
    }
    
    //Initialize bootstrap 4 tooltips
    $("[data-toggle='tooltip']").tooltip();

});  