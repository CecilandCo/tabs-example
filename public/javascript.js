$( "div" ).hide();

$( "#tab1" ).on( "click", function() {
  $('#page1').show();
  $('#page2, #page3').hide();
});

$( "#tab2" ).on( "click", function() {
  $('#page2').show();
  $('#page1, #page3').hide();
});

$( "#tab3" ).on( "click", function() {
  $('#page3').show();
  $('#page1, #page2').hide();
});
