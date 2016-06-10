// ============ BackEnd ============

function getPonged(max) {
  var pongs = [], i;
  for (i = 1; i <= max; ++i) {
    if (i % 3 === 0 && i % 5 === 0) {
      pongs.push("Ping Pong!");
    } else if (i % 3 === 0) {
      pongs.push("Ping!");
    } else if (i % 5 === 0) {
      pongs.push("Pong!");
    } else {
      pongs.push(i);
    }
  }
  return pongs;
}

// ============ FrontEnd ============

$(document).ready(function(){
  $("form#pingPongForm").submit(function(event){
    event.preventDefault();
    var numbers = getPonged($('#numbers').val());
    numbers.forEach(function(item) {
      $('#returnResult').append('<li>' + item + '</li>');
    });
    $("#result").show();
    $("#pingPongForm").toggle();
  });
});
