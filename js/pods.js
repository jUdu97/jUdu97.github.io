//get plus sign and pod content


function podShow(year) {
    var pod = document.getElementById(year);
    if (pod.style.display === "none") {
        pod.style.display = "block";
    } else {
        pod.style.display = "none";
    }
}
