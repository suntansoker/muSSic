const dropdown=document.querySelector('.dropdown');
const ele=document.getElementById("lesson-list");
const hamburger =document.querySelector('.hamburger-menu');
const nav=document.querySelector('.nav-links');
// var x = window.matchMedia("(max-width: 760px)");

window.addEventListener('load',()=>{
    ele.style.display="none";
});

dropdown.addEventListener('click',()=>{
    
    if(ele.style.display==="none")
    {
        ele.style.display="block";
    }else{
        ele.style.display="none";
    }

});
    
hamburger.addEventListener('click',()=>{
    if(nav.style.transform==="translateX(0%)"){
        nav.style.transform="translateX(110%)";
    }else
        nav.style.transform="translateX(0%)";

    nav.style.transition= "transform 0.5s ease-in";
    hamburger.classList.toggle('toggle');
    
});








