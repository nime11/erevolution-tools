// ==UserScript==

// @name          erevolution tools

// @namespace     https://www.erevollution.com

// @description  erevolution prof

// @include       https://www.erevollution.com/*

// @exclude     https://www.erevollution.com/en/special-items

// ==/UserScript==
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
tp= tp.replace(/,/g,'')
tp=tp.split("/")
var restp=tp[1]-tp[0];

var ta= list[1];
ta=ta.replace(/,/g,'')
ta=ta.split("/")
var resta=ta[1]-ta[0];

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
var nextta=resta/hit;
nextta=Math.ceil(nextta);
var nexttp=restp/hit;
nexttp=Math.ceil(nexttp);
var hitwone=hit*wep;
wonenextta=nextta;
wonenexttp=nexttp;
var gold=0;
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
  "<table border='1'> "+
    "<tbody>"+
      "<tr id=#infoCalctable>"+
       "<td><b>Influence:   <br> Next TA: <br>  gold TA <br> Next TP:  <br>  gold TP </b> <td>"+
        "<td><span id='udar'> <b>"+hit+"<br> "+nextta+"<br> 0 <br> "+nexttp+" <br> 0   </b> </span></td>"+
        "<td><span id='udardve'><b>"+hitwone+"<br>  "+wonenextta+"<br> cost g/m  <br> "+wonenexttp+"  <br> cost g/m  </b> </span></td>"+
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


    $('#udar').html("<b>"+hit+"<br> "+nextta+"<br> 0 <br> "+nexttp+" <br> 0  </b>");
    $('#udardve').html("<b>"+hitwone+"<br>  "+wonenextta+"<br> "+(2.5-(wonenextta*gold))+"  <br> "+wonenexttp+"  <br> "+(5-(wonenexttp*gold))+"  </b>");
});

$('#dmg').on('change', function (e) {
    var optionSelected =$("option:selected", this);
    boos=this.value;
    hit=k*ene*boos;
    hit=Math.ceil(hit);
    nextta=resta/hit;
    nextta=Math.ceil(nextta);
    nexttp=restp/hit;
    nexttp=Math.ceil(nexttp);

    hitwone=hit*wep;
    hitwone=Math.ceil(hitwone);
    wonenextta=resta/hitwone;
    wonenextta=Math.ceil(wonenextta);
    wonenexttp=restp/hitwone;
    wonenexttp=Math.ceil(wonenexttp);
    $('#udar').html("<b>"+hit+"<br> "+nextta+"<br> 0 <br> "+nexttp+" <br> 0  </b>");
    $('#udardve').html("<b>"+hitwone+"<br>  "+wonenextta+"<br> "+((2.5-(wonenextta*gold)).toFixed(2))+"  <br> "+wonenexttp+"  <br> "+(5-(wonenexttp*gold))+"  </b>");
});

$('#oroz').on('change', function (e) {
    var optionSelected =$("option:selected", this);
    wep=this.value;
    hitwone=hit*wep;
    hitwone=Math.ceil(hitwone);

    wonenextta=resta/hitwone;
    wonenextta=Math.ceil(wonenextta);
    wonenexttp=restp/hitwone;
    wonenexttp=Math.ceil(wonenexttp);
    $('#udardve').html("<b>"+hitwone+"<br>  "+wonenextta+"<br> "+((2.5-(wonenextta*gold)).toFixed(2))+"  <br> "+wonenexttp+"  <br> "+(5-(wonenexttp*gold))+"  </b>");
});

$('#infCalc_gold').on('input',function(e){
    gold =$("#infCalc_gold").val();
    $('#udardve').html("<b>"+hitwone+"<br>  "+wonenextta+"<br> "+((2.5-(wonenextta*gold)).toFixed(2))+"  <br> "+wonenexttp+"  <br> "+(5-(wonenexttp*gold))+"  </b>");
});
