var color = function () {
  return '#FFFFFF';
}

if (window.$) {
  $(document).on('click', 'body', function () {
    $('body').css('background-color', color())
  })
}