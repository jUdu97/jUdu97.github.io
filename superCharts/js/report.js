//get report text
var reportText = document.getElementById("reports");
//get report menu
var menuReport = document.getElementById("reports_menu");

// var iconButton = document.querySelector('svg.feather.feather-circle');

//add event listener for click on report text
reportText.addEventListener("click", chgMenu);

//function to toggle display of reports menu
function chgMenu() {
    if (menuReport.style.display === "none") {
        reportText.innerHTML = "Hide Reports";
        menuReport.style.display = "initial";
        $("svg.feather.feather-plus").replaceWith(feather.icons.minus.toSvg());
    } else {
        reportText.innerHTML = "Show Reports";
        menuReport.style.display = "none";
        $("svg.feather.feather-minus").replaceWith(feather.icons.plus.toSvg());
    }
}

//https://github.com/feathericons/feather/issues/447
