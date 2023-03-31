var rn1=Math.floor(Math.random()*6)+1;
var ri1="images/dice"+rn1+".png";

var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",ri1);

var p1=prompt("Enter player 1's name");
var p2=prompt("Enter player 2's name");

document.querySelectorAll("p")[0].innerHTML=p1;
document.querySelectorAll("p")[1].innerHTML=p2;

var rn2=Math.floor(Math.random()*6)+1;
var ri2="images/dice"+rn2+".png";
document.querySelectorAll("img")[1].setAttribute("src",ri2);

if(rn1>rn2){
    document.querySelector("h1").innerHTML="🚩"+p1+" wins";
}
if(rn2>rn1)
document.querySelector("h1").innerHTML=p2+" wins🚩";
if(rn1===rn2)
document.querySelector("h1").innerHTML="🚩Both players wins🚩";