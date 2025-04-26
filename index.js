var offerhide=document.getElementById("offerhide")
var offerbar=document.querySelector(".offerbar")
offerhide.addEventListener("click",function(){
    offerbar.style.display="none"
})


var sidenav=document.querySelector(".side-navbar")


function showNavbar()
{
    sidenav.style.left="0"
}

function closeNavbar()
{
    sidenav.style.left="-60%"
}

