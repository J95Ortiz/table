$(document).ready(function() {
    // Underlines all <h2> elements
    // Elements have a class in HTML file:
    $("h2").addClass("underline"); // $("h2").removeClass("underline"); Removes a class

    // Elements don't have a class in HTML file:
    // $("h2").css("text-decoration", "underline"); 


    // Adds a border to all the lists in the file
    // Elements have a class in HTML file:
    $("ul").addClass("border");

    // Elements don't have a class in HTML file:
    //$("ul").css("border", "solid 1px #ccc"); 
});