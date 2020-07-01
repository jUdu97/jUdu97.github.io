//get table
var table = $('#sp').DataTable();

//get display type options
var var1 = document.getElementById("supers");
var var2 = document.getElementById("villains");
var var3 = document.getElementById("portals");
var var4 = document.getElementById("all");

//add Event Listeners
var1.addEventListener("click", showSuper);
var2.addEventListener("click", showVillain);
var3.addEventListener("click", showPortal);
var4.addEventListener("click", showALL);

//function to only show Superheroes by state
function showSuper() {
    table.column(0).visible(true);
    table.column(1).visible(true);
    table.column(2).visible(false);
    table.column(3).visible(false);
}

//function to only show Villains by state
function showVillain() {
    table.column(0).visible(true);
    table.column(1).visible(false);
    table.column(2).visible(true);
    table.column(3).visible(false);
}

//function to only show Portals by state
function showPortal() {
    table.column(0).visible(true);
    table.column(1).visible(false);
    table.column(2).visible(false);
    table.column(3).visible(true);
}

//function to show ALL categories by state
function showALL() {
    table.column(0).visible(true);
    table.column(1).visible(true);
    table.column(2).visible(true);
    table.column(3).visible(true);
}

// https://datatables.net/reference/api/column().visible()
// https://stackoverflow.com/questions/45301902/how-to-show-and-hide-columns-of-using-datatable-jquery
// https://www.w3schools.com/jsref/event_onclick.asp
