// ==UserScript==

// @name          erevolution tools

// @namespace     https://www.erevollution.com

// @description  erevolution prof

// @include       https://www.erevollution.com/*

var x = document.getElementsByClassName("vs164-2");
var moč = x[0].innerHTML;
var razmerje = document.getElementsByClassName("vs165-5");
var list=[];
for (i=0; i<razmerje.length ; i++){
var thisseznam = razmerje[i].innerHTML;

thisseznam= thisseznam.replace(/<[^>]*>/g, ''); // Remove HTML tags
thisseznam = thisseznam.replace(/[[^]]*]/g, ''); // Remove anything within square brackets
list[i]=thisseznam;
}

var tp= list[0];
var ta= list[1];
var htmlStringdiv = $(".vs164-11").html();

$(document).ready(function(){
      $(".vs164-11").load("https://raw.githubusercontent.com/nime11/erevolution-tools/master/infCalc.html");
      body = document.getElementsByid('nalozi')[0];
      body.appendChild(htmlStringdiv);
    });
});
