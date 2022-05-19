document.getElementById("lf").contentDocument.body.style.color = "white";

function toggleMenu() {
    document.getElementById("dropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.fa-bars')) {
      var dropdowns = document.getElementsByClassName("dropdown");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
    if (event.target == modal) {
      modal.style.display = "none";
    }
} 

var modal = document.getElementById("MainModal");
var span = document.getElementsByClassName("close")[0];
var modalimg = document.getElementById('mimg');

function openmodal(header, text, imgsrc) {
  modal.style.display = "block";
  document.getElementById('headerh2').innerHTML = header;
  document.getElementById('mainp').innerHTML = text;
  if (imgsrc == null) {
    modalimg.style.display = "none";
  }
  else {
    modalimg.style.display = "block";
    modalimg.src = imgsrc;
  }
}

span.onclick = function() {
  modal.style.display = "none";
}

/*window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} */
  
