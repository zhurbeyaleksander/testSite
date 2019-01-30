var modal = document.getElementById('locationMap');
var linkOpen = document.getElementById("openMap");
var close = document.getElementsByClassName("close")[0];

linkOpen.onclick = function() {
  modal.style.display = "block";
}

close.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}