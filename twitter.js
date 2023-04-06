var user = [
    {mail:"serkan@gmail.com",password:"1453"},
    {mail2:"amine@gmail.com",password:"1991"}

]

var twit =[
    {mail:"serkan@gmail.com",twit:"how can I go Taksim :)"},
    {mail:"amine@gmail.com",twit:"Today weatter ist nice!!)"}
]

var email=prompt("email?")
var pass=prompt("password?")

function login (){
    if((email==user[0].mail && pass==user[0].password)||(email==user[1].mail&&user[1].password)){
     console.log(twit)

    }
    else{
        console.log("username oder password is invalid ")
    }
    
}
login(email,pass)
