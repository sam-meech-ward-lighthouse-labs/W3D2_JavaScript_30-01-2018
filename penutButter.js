
$(function() {
  var jazzHands = "🤗";

  // Event handling
  $("#food-form").on('submit', (event) => {
    console.log(event);
    event.preventDefault();
    const text = $('#food-field').val();

    $('<li>')
      .text(text)
      .css({'color': 'tomato'})
      .appendTo($('#tastesBad'));
  });

  // Delegation
  $('ul').on('click', 'li', function(event){
      $(this).fadeOut();
  });

  $('h1').on('click', function(event) {
    // jQuery UI
    $(this).effect('shake');
  });
});