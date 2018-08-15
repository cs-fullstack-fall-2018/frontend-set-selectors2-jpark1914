var pTag = document.getElementById("first");
console.log(pTag);

var pTag2 = document.getElementsByClassName("special");
console.log(pTag2[0]);

var pTag3 = document.getElementsByTagName("p");
console.log(pTag3[0]);


//===Number 2=====

var query1 = document.querySelector(".special");
var query2 = document.querySelectorAll(".special");

console.log(query1);


for(var x = 0; x<query2.length; x++){
    console.log(query2[x]);
}

//===Number 3=====

document.getElementsByTagName("h1")[0].style.color = "blue";

//===Number 4=====
document.getElementsByTagName("p")[3].style.color = "yellow";


//Es finito//