var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);

}

function currentSlide(n){
     showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("imageCarousel");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block"; 
}

function navOnClick() {
    document.getElementById("navDrop").classList.toggle("show");
        
}

window.onclick = function(event) {
      var dropdowns = document.getElementsByClassName("dropdownContent");
      if(event.target == dropdowns) {
            dropdowns.style.display = "none";
        }
    }


var closebtns = document.getElementsByClassName("close1");
var i;

for (i = 0; i < closebtns.length; i++) {
        closebtns[i].addEventListener("click", function() {
        this.parentElement.style.display = 'none';
      });
    }
function openTab(tabName) {
    let i, x;
    x = document.getElementsByClassName("descContent");
    for (i=0; i< x.length; i++) { if(
        x[i].style.display = "none")      
          document.getElementById(tabName).style.display ="block"  }
        //   if(x[i].style.display = "block")   {
        //     document.getElementById(tabName).style.display ="none"
        //   } 
              
        }

var modal = document.getElementById("contactModal");

var btn = document.getElementById("contactButton");

var span = document.getElementsByClassName("close")[0];


btn.onclick= function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";

}

window.onclick =function (event) {
    if(event.target == modal) {
        modal.style.display = "none";
    }
}