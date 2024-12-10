document.addEventListener('scroll',()=>{
    const header=document.querySelector('header');
    if(window.scrollY>0){
        header.classList.add('scrolled');
    }
    else{
        header.classList.remove('scrolled');
    }
})


const numb = document.querySelector(".number");
let counter = 0;
setInterval(() => {
  if(counter == 100 ){
    clearInterval();
  }else{
    counter+=1;
    numb.textContent = counter + "%";
  }
}, 80);

//button top
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Scrolling down animation

function myFunction() {
  var x = document.getElementById("navlinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}