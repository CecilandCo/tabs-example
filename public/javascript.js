$('div').hide();
$('div[data-number=1]').show();

$('li').on('click', function(e) {
  var number = $(e.target).data('number');
  
  $('div').hide();
  $('div[data-number="' + number + '"]').show();
})

