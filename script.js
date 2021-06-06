var userName = prompt("Enter your name ? ");

console.log(userName);

alert("You are now in the right place " + userName)
function typeofread (    ){
var kindread = prompt("How do you prefer to read your books? choose if online ,download ")
while (kindread != "online" && kindread!= "download"){

      kindread = prompt("please enter on of : online download");
}
typeofread();
}
var number = prompt("How many book have you read on our website?")
function numofbook(number){
  var output="";
for (var i=0 ; i<number; i++){
output+="<img src='https://www.iconpacks.net/icons/2/free-opened-book-icon-3169-thumb.png'>";
}
document.write(output);
}
numofbook(number);



document.write("<p style='color:white;'> welcome " + userName + "</p>")

var userage = prompt("Enter your age ? ");


if (userage <= 18) {
     alert("good")
}else{
  alert("you are too young")
}

var n = prompt("do you like reading ? ");
document.write("<img src='https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-1024x640.jpeg'> "); 

