// expands the name of the course to show it's description
var expand = document.getElementsByClassName("course_btn");
var k;

for (k=0; k < expand.length; k++) {
    expand[k].addEventListener("click", function() {
        this.classList.toggle("active");
        var info_course = this.nextElementSibling;
        if (info_course.style.maxHeight) {
            info_course.style.maxHeight = null;
        } else {
            info_course.style.maxHeight = info_course.scrollHeight + "px";
        }
    });
}
