var yes = document.getElementById('yes')
var no = document.getElementById('no')
var nextpage = document.getElementById('nextpage');

nextpage.onclick = function(){
  if (yes.checked) {
    window.location.assign("26.html");
  }
  if (no.checked) {
    window.location.assign("comments.html");
  }
}
