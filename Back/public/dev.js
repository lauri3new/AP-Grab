$('#button').click(function(e) {
  e.preventDefault();
  $.ajax({
    url: 'api',
    data: $('#form1').serialize()
  })
  .done(function(res) {
    console.log(res);
  })
  .fail(function(err) {
    console.log('Error: ' + err.status);
  });
});
