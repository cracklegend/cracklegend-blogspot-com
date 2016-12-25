$('textarea').attr('onmouseover', 'this.focus();this.select();');
$('textarea').mouseout(function() {
  $('textarea').blur();
});
