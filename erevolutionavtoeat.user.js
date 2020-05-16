// ==UserScript==

// @name          edom tools

// @namespace     https://www.edominations.com/

// @description  erevolution prof

// @include       https://www.edominations.com/*

// @exclude     https://www.edominations.com/en/special-items

// ==/UserScript==

 function myFunction() {
     rec =  prompt("Please enter your how much food you want to recover at once", "10");
     cas=k*rec;
     console.log(cas);
     setInterval(myMethod, cas);
}
 
 // setInterval(myMethod, cas);

function myMethod( )
{
  console.log(cas);
  document.getElementById("energyButton").click();
}
//auto eat
var a = $('#energyTime').data('original-title');
var m = parseInt( a[25]);
var s = parseInt( a[27]+a[28]);
var rec=60;
var k=(m*60+ s) * 100;
var cas=k*rec;
var htmlStringdiv= "<li class='active'><span><p style='text-align: center;'> <button onclick='myFunction()'>SCRIPPT</button></p> </span></li>";
 $(htmlStringdiv).insertAfter(".nav-header-first");
 

