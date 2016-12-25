var data_blog_view_count;
(function startObservation() {
  var
  /* 1) Create a MutationObserver object*/
    observer = new MutationObserver(
      function(mutations) {
        mutationObserverCallback(mutations);
      }),
    /* 2) Create a config object */
    config = {
      childList: true
    };

  /* 3) Glue'em all */
  observer.observe(Stats1_totalCount, config);
})();
function mutationObserverCallback(mutations) {
  /* Grab the first mutation */
  var mutationRecord = mutations[0];
  /* If a child node was added, 
     hide the msg after 2s  */
  if (mutationRecord.addedNodes[0] !== undefined) {
    data_blog_view_count = $('span#Stats1_totalCount.counter-wrapper.text-counter-wrapper').text();
    $('li#view-count.view-count').text(data_blog_view_count);
    if (typeof myFunction1 == 'function') {
      myFunction1();
    }
  }
}
