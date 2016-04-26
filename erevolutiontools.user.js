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

<div  id="infCalc" class="vs165">
<label>energy<input id="infCalc_energy" value="1" type="text"></input></label>
<label>Damege Booster<select id="infCalc_booster">
  <option value="1.1">1.1</option>
  <ption value="1.2">1.2</option>
  <option value="1.3">1.3</option>
  <option value="1.4">1.4</option>
  <option value="1.5">1.5</option>
</select></label>
<table>
  <tbody>

</div>
