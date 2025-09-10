
 let name ="hamza";
 let age = "16";
 let goal = "full stack developer";
 let country = "pakistan";
  console.log(name);
 console.log(age);
 console.log(goal);
 console.log(country);
 let x =10;
 let y =5;
 console.log(x + y);
 let a = 10;
 let b = 3;
 console.log(a - b);
 let price = 200;
 let qty = 4;
 console.log(price * qty);
 let marks = 20;
 if (marks>=40) {
  console.log("pass");}
 else {
  console.log("fail");
  
 }
 let mark = 100;
 if ( mark>=90){
  console.log("a+ grade");
 }
else if (mark>80){
  console.log("a grade");
}
else if(mark>70){
  console.log("b grade");
}
else {
  console.log("fail"); 
}

let marks1=75;
if (marks1>=80 && marks1<=100) {
  console.log("a grade");
}
else if (marks1>=70 || marks1 == 69) {
  console.log("b grade");
  
}
else {
  console.log("fail");
  
}
let pass = (true)
console.log(!pass);
for (let i = 1; i < 5; i++) {
  console.log("number:",i);
}
let i=1;
while (i<=5) {
  console.log("while loop",i);
  i++; 
  
}
function greete( hi) {
  console.log("Salam!");
}
greete()
function greeteuser(name) {
  console.log("assalmialikum"+ name + "!");
  
}
greeteuser(" hamza")
greeteuser(" ali")
greeteuser(" aysha")
function add(a, b) {
  return a+b ;
}
let result= add(5, 10)
console.log(result);

let products=["earbuds", "watchs", "power bank"]
console.log(products[0,1]);
// Toggle Menu
function toggleMenu() {
  document.getElementById("menu").classList.toggle("show");
}
let scrollBtn = document.getElementById("scrollBtn");
window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};
function scrollTopFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function darkMode() {
  document.body.classList.toggle("dark-theme");
}

