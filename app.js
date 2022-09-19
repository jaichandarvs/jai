let button = document.querySelector(".arrow"),
    links = document.querySelector(".nav-links");

button.addEventListener("click", () => {
    links.classList.toggle("display")
    button.children[0].classList.toggle("toggle1")
    button.children[1].classList.toggle("toggle2")
    button.children[2].classList.toggle("toggle3")

})
button.children[0];
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}