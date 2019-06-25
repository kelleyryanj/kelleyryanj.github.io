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
    if(!event.target.matches('dropButton')) {
        var dropdowns = document.getElementsById("show");
           
        dropdowns.classList.toggle('navDrop');
            
        }
    }


    
    var descDrop = document.getElementsByClassName("descDrop");
    var i;
    
    for (i = 0; i < descDrop.length; i++) {
        descDrop[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var descContent = this.nextElementSibling;
        if (descContent.style.display === "block") {
            descContent.style.display = "none";
        } else {
            descContent.style.display = "block";
        }
      });
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