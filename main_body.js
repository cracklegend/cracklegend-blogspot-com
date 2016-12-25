var cl_body = `<style>
div#body.body {
  background: transparent url('https://resources.blogblog.com/blogblog/data/1kt/transparent/white80.png') repeat scroll top left;
  border-radius: 20px 20px 0 0;
  margin: auto;
  width: 1024px;
  min-width: 1024px;
  max-width: 1024px;
  padding-bottom: 30px;
  margin-bottom: 15px;
  position: relative;
  box-shadow: 0 1px 3px rgba(0, 0, 0, .15);
}
div#body-left.body-left {
  background-color: rgba(255, 255, 255, 0.75);
  border: solid 1px #C1C1FF;
  width: 685px;
  margin-right: 11px;
  border-radius: 5px;
  display: block;
  position: relative;
  top: 15px;
  left: 15px;
  min-height: 542px;
}
div#body-right.body-right {
  background-color: rgba(255, 255, 255, 0.25);
  border: solid 1px #C1C1FF;
  width: 260px;
  border-radius: 5px;
  display: block;
  position: absolute;
  top: 15px;
  right: 15px;
  padding-top: 15px;
  padding-left: 15px;
  padding-right: 15px;
  font-family: 'Gruppo';
}
div#footer.footer {
  height: 100px;
  color: #ffffff;
  background: transparent url(https://resources.blogblog.com/blogblog/data/1kt/transparent/black50.png) repeat scroll top left;
  margin: auto;
  width: 974px;
  min-width: 974px;
  max-width: 974px;
  height: 50px;
  position: relative;
  top: -15px;
  border-radius: 0 0 20px 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, .15);
  padding: 50px 25px 0px 25px;
  text-align: center;
  font-family: serif;
  font-size: x-large;
  margin-bottom: 100px;
}
div#post-title.post-title h1 {
  padding-left: 15px;
  margin-top: 30px;
  padding-top: 15px;
  margin-bottom: 30px;
  padding-bottom: 15px;
  background-color: #E7E7FF;
  border-top: 1px solid #D7D7FF;
  border-bottom: 1px solid #D7D7FF;
}
table.hptable {
    border-collapse: collapse;
    border: 1px solid #D7D7FF !important;
    background-color: #E7E7FF;
    opacity: 1;
    margin: 15px;
}
.hptable tr:hover, .hptable tr:hover td {
    background-color: #E5E5FF;
}
.left {
    vertical-align: middle;
    min-width: 220px;
    max-width: 222px;
    text-align: center;
}
.right {
  vertical-align: top;
  min-width: 379px;
}
.hptable td {
    font-family: "Verdana" !important;
    padding: 10px;
}
.hptable img {
    box-shadow: 3px 3px 3px #888888;
    vertical-align:middle;
    max-width: 200px;
}
.label {
    display:inline-block;
    background: #E0E0FF;
    position: relative;
}
.label:before {
    content: '';
    position: absolute;
    top: 0; right: 0;
    border-top: 11px solid #E7E7FF;
    border-left: 11px solid #E0E0FF;
    width: 0;
}
.label:after {
    content: '';
    position: absolute;
    bottom: 0; right: 0;
    border-bottom: 11px solid #E7E7FF;
    border-left: 11px solid #E0E0FF;
    width: 0;
}
.hptable tr:hover .label:before {
    content: '';
    position: absolute;
    top: 0; right: 0;
    border-top: 11px solid #E5E5FF;
    border-left: 11px solid #E0E0FF;
    width: 0;
}
.hptable tr:hover .label:after {
    content: '';
    position: absolute;
    bottom: 0; right: 0;
    border-bottom: 11px solid #E5E5FF;
    border-left: 11px solid #E0E0FF;
    width: 0;
}
.hptable tr td, .hptable tr, .label, .label:before, .label:after {
  -webkit-transition: all 1666ms;
     -moz-transition: all 1666ms;
       -o-transition: all 1666ms;
          transition: all 1666ms;
}
h1 {
  font-family: 'Gruppo';
}
blog-name {
  font-family: &#39;UnifrakturMaguntia&#39; !important;
}
hr {
    border-left: 1px solid #C1C1FF !important;
     border-top: 1px solid #C1C1FF !important;
   border-right: 1px solid #E0E0FF !important;
  border-bottom: 1px solid #E0E0FF !important;
}
ul {
  margin: 0 !important;
  padding-left: 30px !important;
  font-size: large;
}
ul li{
   list-style: none !important;
}
ul li:before {
   margin-right: 10px !important;
   content: '' !important;
   display: inline-block !important;
   height: 7px !important;
   width: 7px !important;
   background-size: 100% 100% !important;
   background-image: url('http://i.imgur.com/LZn5SZ9.png') !important;
   position: relative !important;
   top: -1.5px;
   image-rendering: pixelated !important;
}
kbd {
  margin-left: 5px;
  margin-right: 5px;
  border-bottom: 1px dotted black;
}
div.muri {
  vertical-align: middle;
  text-align: center;
}
textarea.muri {
  font-family: 'Lucida Console', Monaco, monospace !important;
  vertical-align: middle;
  word-break: break-all;
  height: 48px;
  width: 167px;
}
button.muri {
  padding: 2px;
  border-radius: 7.5px;
  vertical-align: middle;
  margin-left: 10px;
  background-color: #E0E0FF;
}
button.muri img {
  vertical-align: middle;
  width: 30px;
  height: 30px;
}
div.cmsg {
  position: absolute;
  border-top: 1px solid #C1C1FF;
  border-left: 1px solid #C1C1FF;
  border-right: 2px solid #C1C1FF;
  border-bottom: 2px solid #C1C1FF;
  background-color: #E0E0FF;
  padding: 2px;
  text-align: center;
  vertical-align: middle;
  display: none;
  top: 0;
  left: 0;
  pointer-events: none;
  border-radius: 5px;
  font-weight: bold;
}
textarea, input.cbox {
  border-color: #C1C1FF !important;
  background-color: #F4F4FF !important;
}
</style>
<div class='body' id='body'>
<div class='body-left' id='body-left'>
<div class='post-title' id='post-title'>
<h1></h1>
</div>
<div class='post-body' id='post-body'>
</div>
</div>
<div class='body-right' id='body-right'>

<div class='htdlb' style="vertical-align:middle; font-size: large; margin-bottom: 15px;">
<b>◇ 如何下載 ◇</b><br/>
<div class='readmore' style='font-size: small !important;'><ul><li>查看更多…</li></ul></div>
<div class='htdl'>
<kbd><b>1.</b></kbd>點擊<kbd><img src="http://i.imgur.com/TTNrTDE.png" height="17.5px" style="
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    vertical-align: text-top;" /></kbd><br/>
<kbd><b>2.</b></kbd>點擊後會進入<kbd>keeplinks.eu</kbd><br/>
<kbd><b>3.</b></kbd>輸入正確的<kbd>Captcha</kbd><br/>
<kbd><b>4.</b></kbd>點擊網頁右下方的<kbd>Submit</kbd><br/>
<kbd><b>5.</b></kbd>點擊<kbd>Live Link</kbd>下載連結
</div>
</div>

<hr/>

<style>
div.muri.a {
  text-align: left !important;
}
div.muri.a textarea.muri {
    height: 32px;
    width: 127px;
}
</style>
<div class='creqb' style="vertical-align:middle; font-size: large; margin-top: 15px; margin-bottom: 15px;">
<b>◇ 沒有您需要的軟件嗎  ◇</b><br/>
<b>◇ 下載連結已經失效嗎  ◇</b><br/>
<div class='readmore' style='font-size: small !important;'><ul><li>查看更多…</li></ul></div>
<div class='creq'>
<!--如果這裡沒有您需要的軟件，或您需要的軟件的下載連結已經失效，您可以-->請透過E-mail發出軟件請求或回報失效問題：<br />
<div class="muri a">enquiry.cracklegend@gmail.com</div>
</div>
</div>

<hr/>

<style>
div.sarea {
  text-align: center;
}
input.sbox {
  padding-left: 5px;
  vertical-align: middle;
  border: 1px solid #C1C1FF;
  width: 70%;
  font-size: 15px;
  height: 25px;
}
input.sbutton {
  display: inline-block;
  border-radius: 5px;
  vertical-align: middle;
  background-color: #E0E0FF;
  font-size: 15px;
}
div.sarea {
  vertical-align: middle;
}
</style>
<div style='margin-top: 15px; margin-bottom: 15px;'>
<span style="font-size: large;"><b>◇ 搜尋此網誌 ◇</b></span><br/>
<br/>
<div class="sarea">
<form id="sform">
<input type="text" class="sbox" placeholder="寫點東西…" />&nbsp;&nbsp;
<input type="submit" class="sbutton" value="搜尋" />
  </form>
</div>
</div>

<hr/>

<div class='smb' style="vertical-align:middle; font-size: large; min-height: 50px;margin-top: 15px; margin-bottom: 15px;">
<b>◇ Ｓ<u>itemap</u> ◇</b><br/>
<div class='readmore' style='font-size: small !important;'><ul><li>查看更多…</li></ul></div>
<div class='sm'>
<ul><li><a href='http://cracklegend.blogspot.com/p/sitemap_23.html'>點擊查看</a></li></ul>
</div>
</div>

<hr/>

<style>
li#view-count.view-count:before {
  top: -5px !important;
}
</style>
<div style='margin-top: 15px; margin-bottom: 15px;'>
<span style="font-size: large;"><b>◇ 總瀏覽量 ◇</b></span><br/>
<ul><li class='view-count' id='view-count' style='
    letter-spacing: 10px;
    font-size: x-large;
    font-weight: bold;
    font-family: cursive;'></li></ul>
</div>

</div>
</div>
<div class='footer' id='footer'>
Copyright © 2016 破解傳說，Crack Legend，\極\，UltimateUser，UU。
</div>`;
$('body').append(cl_body);
var post_body_html = $('div.post-body.entry-content').html();
if (typeof post_body_html == 'undefined') {
  var data_post_title = 'HTTP ERROR 404 ‒ 找不到網頁';
  var post_body_html = `<div style='
    font-size: x-large;
    margin: 30px;'>抱歉！ <span style="font-family: 'bname';">.: 破解傳說 :.</span> 找不到目前網頁。<br/>
請嘗試進行<kbd>搜尋</kbd>或到 <a href='http://cracklegend.blogspot.com/'>原網誌</a> 查看。</div>
<hr width='95%' />`;
}
$('div#post-body.post-body').append( post_body_html );
if (typeof data_post_title !== 'undefined') {
  $('div#post-title.post-title h1').html(data_post_title);
}
