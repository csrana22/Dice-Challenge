var random=Math.floor(Math.random()*6)+1;
var imag="images/dice"+random+".png";
document.querySelectorAll("img")[0].setAttribute("src",imag);

var random2=Math.floor(Math.random()*6)+1;
var imag2="images/dice"+random2+".png";
document.querySelectorAll("img")[1].setAttribute("src",imag2);

if(random>random2)
{
  document.querySelector("h1").innerHTML="🐱‍🐉Player 1 wins!";
}

else if(random2>random)
{
  document.querySelector("h1").innerHTML="🙌Player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw!🤔";
}
