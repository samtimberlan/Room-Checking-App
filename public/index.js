function space(){
let value = parseInt(document.getElementById("num").innerHTML);
let availability = "Not Available";
let closed1 = "<img src = images/closed.jpg height='200px' width='200px'/>";
value = value -1;

if(value===0){
document.getElementById("availability").innerHTML = availability;
document.getElementById("availability").style.color = "red";
document.getElementById("image").innerHTML = closed1;

}

if(value<=0)

{
value =0;
}

document.getElementById("num").innerHTML = value;

}

function space2(){
let value = parseInt(document.getElementById("num2").innerHTML);
let availability = "Not Available";
let closed1 = "<img src = images/closed.jpg height='200px' width='200px'/>";
value = value -1;

if(value===0){
document.getElementById("availability2").innerHTML = availability;
document.getElementById("availability2").style.color = "red";
document.getElementById("image2").innerHTML = closed1;

}

if(value<=0)

{
value =0;
}

document.getElementById("num2").innerHTML = value;

}

function space3(){
let value = parseInt(document.getElementById("num3").innerHTML);
let availability = "Not Available";
let closed1 = "<img src = images/closed.jpg height='200px' width='200px'/>";
value = value -1;

if(value===0){
document.getElementById("availability3").innerHTML = availability;
document.getElementById("availability3").style.color = "red";
document.getElementById("image3").innerHTML = closed1;

}

if(value<=0)

{
value =0;
}

document.getElementById("num3").innerHTML = value;

}
