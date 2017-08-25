$(document).ready(function() {
  $('#showr').click(function() {
    $('img').show("slow");
    $('#hidr').click(function(){
      $('img').hide()
    });
  });

});
