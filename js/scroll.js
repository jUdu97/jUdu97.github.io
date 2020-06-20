//get button
var scrollBtn = document.getElementById("topBtn");

//when user scrolls down 100px from the top, show button
window.onscroll = function() {topScroll()};

function topScroll() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
}

//when user clicks on button, scroll to top
function upTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
