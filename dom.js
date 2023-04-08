var intro1=document.getElementById("intro1");
var message=document.getElementById("message");
message.innerHTML=intro1.innerHTML;
var ul =document.getElementsByTagName("ul");
var object=ul[0];
 unterli =object.getElementsByTagName("li");
 for (i=0;i<unterli.length;i++){
    alert(unterli[i].innerHTML)
 }
