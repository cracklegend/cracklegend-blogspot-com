$('textarea.muri').bind('mousewheel DOMMouseScroll', function(e) {
  var e0 = e.originalEvent,
  delta = e0.wheelDelta;
  this.scrollTop += (delta < 0 ? 1 : -1) * 30;
  e.preventDefault();
});
