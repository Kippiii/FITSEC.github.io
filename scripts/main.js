// JavaScript Document
//console.log(location.pathname.split("/").slice(-1)[0]);
file = location.pathname.split("/").slice(-1)[0];
x = document.getElementsByTagName("nav")[0].getElementsByTagName("li");
var y;
for (var i=0; i<x.length; i++) {
	y = x[i].innerHTML.split("\"")[1];
    if (y === file) {
        x[i].className = "active";
    }
}
/*$(document).ready(function(e) {
    $(li).select()
});*/