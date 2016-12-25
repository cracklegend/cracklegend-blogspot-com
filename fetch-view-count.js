var data_blog_view_count;
data_blog_view_count = $('span#Stats1_totalCount.counter-wrapper.text-counter-wrapper').text();
console.log(data_blog_view_count);
$('li#view-count.view-count').text(data_blog_view_count);
if (typeof myFunction1 == 'function') {
  myFunction1();
}
