// ==UserScript==

// @name          erevolution tools

// @namespace     https://www.erevollution.com

// @description  erevolution prof

// @include       https://www.erevollution.com/*

var x = document.getElementsByClassName("vs164-2");
var moc = x[0].innerHTML;
var car="";
for(i=0;i<moc.length;i++)
{
  if(moc[i]==","){
    car=moc[i-1];
    break;
  }
}

moc=moc.replace(car+',',car);
moc = parseInt(moc, 10)

var razmerje = document.getElementsByClassName("vs165-5");
var level = document.getElementsByClassName("vs164-6 vs164-13");
level=level[0].innerHTML;
achivment= $(".vs164-5").attr("src");
achivment=achivment[19]+achivment[20];
var list=[];
for (i=0; i<razmerje.length ; i++){
var thisseznam = razmerje[i].innerHTML;

thisseznam= thisseznam.replace(/<[^>]*>/g, ''); // Remove HTML tags
thisseznam = thisseznam.replace(/[[^]]*]/g, ''); // Remove anything within square brackets
list[i]=thisseznam;
}
var wep=1;
var tp= list[0];
var ta= list[1];
var lk=5;
var ak=0.05;
var l=level*lk+moc;
var a=1+achivment*ak;
var ne=1;
var k=l*a*ne;
k=Math.ceil(k);
var ene=1;
var boos=1;
var hit=k*ene*boos;
var hitwone=hit*wep;
var htmlStringdiv = "<div id='vse'><br></br> <h3 style='margin-top: 15px;clear: both;'>"+
"<span>Info Calc</span></h3>"+
"<div id='infCalc' >"+
  "<label >energy<input id='infCalc_energy' value='1' type='text'></input></label>"+
  "<label>Damege Booster </label> <select id='dmg'>"+
    "<option value='1'>none</option>"+
    "<option value='1.1'>1.1</option>"+
    "<option value='1.2'>1.2</option>"+
    "<option value='1.3'>1.3</option>"+
    "<option value='1.4'>1.4</option>"+
    "<option value='1.5'>1.5</option>"+
  "</select>"+
  "<label> Wep </label> <select id='oroz'>"+
    "<option value='1'>none</option>"+
    "<option value='1.2'>1.2</option>"+
    "<option value='1.4'>1.4</option>"+
    "<option value='1.6'>1.6</option>"+
    "<option value='1.8'>1.8</option>"+
    "<option value='2'>2</option>"+
    "<option value='2.2'>2.2</option>"+
    "<option value='2.4'>2.4</option>"+
    "<option value='2.6'>2.6</option>"+
    "<option value='2.8'>2.8</option>"+
    "<option value='3'>3</option>"+
    "<option value='3.2'>3.2</option>"+
    "<option value='3.4'>3.4</option>"+
    "<option value='3.6'>3.6</option>"+
    "<option value='3.8'>3.8</option>"+
    "<option value='4'>4</option>"+
    "<option value='5'>5</option>"+
  "</select>"+
"<label >gold/peac<input id='infCalc_gold' value='0' type='text'></input></label>"+
  "<table> "+
    "<tbody>"+
      "<tr id=#infoCalctable>"+
       "<td><b>Influence:   <br> Rank up:  <br> Next TP:  <br>  Cost g/m  </b> <td>"+
        "<td><span id='udar'> <b>"+hit+"<br>  rank up  <br> tp <br> 0  </b> </span></td>"+
        "<td><span id='udardve'><b>"+hitwone+"<br>  rank up <br> tp <br> cost g/m  </b> </span></td>"+
       "</tr>"+
    "</tdbody>"+
  "</table>"+

"</div>"+
"<br></br>"+
"<div>";
$(htmlStringdiv).insertAfter(".vs165:last");
$("select").css("display","inline");

$('#infCalc_energy').on('input',function(e){
    ene=$("#infCalc_energy").val();
    hit=k*ene*boos;
    $('#udar').html('<b>'+hit+'<br>rank up<br> tp <br>cost g/e</b>');
});

$('#dmg').on('change', function (e) {
    var optionSelected =$("option:selected", this);
    boos=this.value;
    hit=k*ene*boos;
    hit=Math.ceil(hit);
    hitwone=hit*wep;
    hitwone=Math.ceil(hitwone);
    $('#udar').html('<b>'+hit+'<br>rank up<br> tp <br>cost g/e</b>');

});

$('#oroz').on('change', function (e) {
    var optionSelected =$("option:selected", this);
    wep=this.value;
    hitwone=hit*wep;
    hitwone=Math.ceil(hitwone);
    $('#udardve').html('<b>'+hitwone+'<br>rank up<br> tp <br>cost g/e</b>');
});
