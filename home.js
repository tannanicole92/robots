$(document).ready(function() {
    $('#pone').toggle(function() {
      $('.container').css("background-color", "#db70b8");
    }, function() {
      $('.container').css("background-color", "#80d4ff");
    });
    $('#p').click(function() {
        if($(this).hasClass("fade")){
        console.log("has class");
        $(this).removeClass("fade");
      } else {
        $(this).addClass("fade");
      };
  });
  $('strong').click(function() {
    if ( $('img').is(":visible")) {
      $('img').slideUp("slow");
    } else {
      $('img').show();
    }
  });
});
