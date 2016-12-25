$('div.muri').each(function() {
  var temp = $(this).html();
  $(this).html('');
  $(this).append('<textarea readonly class=\'muri\'>' + temp + '</textarea>');
  $(this).append('<button class=\'muri\'><img src=\'https://i.imgur.com/cHD3ICw.png\' /></button>');
  console.log(temp);
});
$('body').append('<div class=\'cmsg\'><kbd>已複製</kbd></div>');
$('button.muri').on('click', function(e) {
  $('div.cmsg').css({
    'top': e.pageY - $('div.cmsg').outerHeight() - 20,
    'left': e.pageX - $('div.cmsg').outerWidth() / 2
  });
  $('div.cmsg').finish();
  $('div.cmsg').show();
  $(this).prev().select();
  document.execCommand('copy');
  $('div.cmsg').fadeOut(1000, 'easeInOutQuart');
});
var temp = '';
var arrh = $('textarea.muri').map(function() {
  temp = this.scrollHeight - 4;
  return temp;
});
temp = 0;
$('textarea.muri').each(function() {
  $(this).css({
    'height': arrh[temp++]
  });
});
  console.log(temp);
