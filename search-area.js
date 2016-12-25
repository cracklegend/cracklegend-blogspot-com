$('input.sbox').hover(function(){
  $(this).focus();
}, function(){
  $(this).blur();
});
$("form#sform").submit(function(event) {
  event.preventDefault();
  var qstring = encodeURIComponent($('input.sbox').val());
  if ( qstring.match('%E4%B9%9D%E6%96%B9') || qstring.match('q9') || qstring.match('Q9') ) {
    window.open("http://cracklegend.blogspot.com/p/exclusive.html", "_blank")
  } else {
    var parameter = '%20site:cracklegend.blogspot.com';
    var suri = "http://www.google.com/search?q=" + qstring + parameter;
    window.open(suri, "_blank");
  }
});
