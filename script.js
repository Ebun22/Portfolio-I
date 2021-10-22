window.addEventListener("scroll", ()=>{
  const left = document.querySelectorAll(".animate-left");
  const right = document.querySelectorAll(".animate-right");
  right.forEach((li, i) => {
    const position = li.getBoundingClientRect().top;
    const screenPos = window.innerHeight/1;
    if(position < screenPos){
        li.classList.add("visible");
      left[i].classList.add("visible");
    }
  });
});
document.querySelector(".hbg").addEventListener("click", ()=>{
  document.querySelector(".hbg").classList.add("hide");
  document.querySelector(".hbg").classList.remove("open");
  document.querySelector(".close").classList.add("open");
  document.querySelector(".close").classList.remove("fade");
  document.querySelector(".person-avatar").classList.add("open");
  document.querySelector(".nav-cont").classList.add("open");
  document.querySelector(".socials-list").classList.add("open");
  document.querySelector(".nav-cont").classList.remove("li-dis");
  document.querySelector(".socials-list").classList.remove("li-dis");
  document.querySelector("aside").style.height ="100%";
  document.querySelector("aside").classList.add("color");
})
document.querySelector(".close").addEventListener("click", ()=>{
  document.querySelector(".hbg").classList.remove("hide");
  document.querySelector(".hbg").classList.add("open");
  document.querySelector(".close").classList.remove("open");
  document.querySelector(".close").classList.add("fade");
  document.querySelector(".person-avatar").classList.add("hide");
  document.querySelector(".person-avatar").classList.remove("open");
  document.querySelector(".nav-cont").classList.remove("open");
  document.querySelector(".socials-list").classList.remove("open");
  document.querySelector(".nav-cont").classList.add("li-dis");
  document.querySelector(".socials-list").classList.add("li-dis");
  document.querySelector("aside").style.height ="0px";
  document.querySelector("aside").classList.remove("color");
})
function smoothScroll(){
 var currentY = window.scrollY;
 var int = setInterval(function(){
   window.scrollTo(0, currentY);

   if(currentY > 500){
     currentY -= 70;
  }else if(currentY > 100){
    currentY -= 50;
  }else{currentY -= 10}

  if(currentY <= 0) clearInterval(int);
}, 1000/60);//moving at 60fps;

};
document.querySelector(".top").addEventListener("click",smoothScroll);
console.log("Did this in less than 24hrs...yes I'm going to brag<insert smiley face>");
