// ============ BackEnd ============

















// ============ FrontEnd ============
$(document).ready(function(){
  $("form#pingpong-form").submit(function(event){
    event.preventDefault();

    var numbers = getPonged($('#numbers').val());

    numbers.forEach(function(item) {
      $('#returnResult').append('<li>' + item + '</li>');
    });
    $('#returnResult').append(numbers);
    $("#result").show();
    $("#pingpong-form").toggle();

  });
});
