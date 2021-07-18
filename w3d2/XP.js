let p =  document.getElementsByTagName("p");
document.getElementsByTagName("article")[0].removeChild(p[3]);
let h2 = document.querySelector("h2");

document.addEventListener("click", function(){
    document.body.querySelector("h2").style.backgroundColor = "red";
});

let h1 = document.querySelector("h1");
let a = Math.floor(Math.random() * 100);

let h3 = document.querySelector("h3");
document.addEventListener("click", function(){
    (document.body.querySelector("h3").style.display);
});