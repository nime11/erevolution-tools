// ==UserScript==

// @name          erevolution tools

// @namespace     https://www.erevollution.com

// @description  erevolution prof

// @include       https://www.erevollution.com/*

// @exclude     https://www.erevollution.com/en/special-items

// ==/UserScript==

//auto eat
var rec=50000;
var htmlStringdiv= "<li class='active'><span><p style='text-align: center;'> <button onclick='myFunction()'>SCRIPPT</button></p> </span></li>";
 $(htmlStringdiv).insertAfter(".nav-header nav-header-first hidden-sm");
 
 function myFunction() {
     rec = prompt("Please enter your time of recover", "5");

}
 
 setInterval(myMethod, rec);

function myMethod( )
{
  document.getElementById("energyButton").click();
}
