window.onload=function() {
    var status = JSON.parse(localStorage.getItem('login_status'));
    var nhotk = JSON.parse(localStorage.getItem('nhotkmk'));
    var userArray = JSON.parse(localStorage.getItem('user'));
    if(status==true) {
      avt_fill();    
            //login_exit();
            document.getElementById('dn_btn').classList.add('hide');
            document.querySelector('.logouser').classList.remove('hide');
            localStorage.setItem('login_status','true');
            for(var i=0;i<userArray.length;i++){
              if(userArray[i].username==nhotk.username) document.querySelector('.setting_zone').classList.remove('hide');
    }
            
    }


    const slider = document.querySelector(".slider");
const sliderMain = document.querySelector(".slider-main");
const sliderItems = document.querySelectorAll(".slider-item");
const nextBtn = document.querySelector(".slider-next");
const prevBtn = document.querySelector(".slider-prev");
let sliderItemWidth = sliderItems[0].offsetWidth;
let slidesLength = sliderItems.length;
let postionX=0;
let index=0;
console.log("sliderItemWidth", sliderItemWidth);

function dot() {
    var s="";
    s+='<li class="slider-dot-item active" data-index="0"></li>';
    for(i=1;i<slidesLength;i++) {
        s+='<li class="slider-dot-item" data-index="'+i+'"></li>';
    } 
    document.getElementById("list").innerHTML=s;
}
dot();
const dotItems = document.querySelectorAll(".slider-dot-item");

[...dotItems].forEach((item) =>
    item.addEventListener("click", function(e) {
        [...dotItems].forEach(el=>el.classList.remove("active"));
        e.target.classList.add("active");
        const slideIndex= parseInt(e.target.dataset.index);
        index=slideIndex;
        postionX=-index*sliderItemWidth;
        sliderMain.style = 'transform: translateX('+postionX+'px)';
        
    })

);
function autoColorClick(){
    handleChangeslide(1);
    active_dot();
}
setInterval(autoColorClick,10000);



function active_dot() {
    [...dotItems].forEach(el=>el.classList.remove("active"));
    dotItems[index].classList.add("active");
}

nextBtn.addEventListener("click", function () { 
    handleChangeslide(1);
    active_dot();
});

prevBtn.addEventListener("click", function () { 
    handleChangeslide(-1);
    active_dot();
});


    
function handleChangeslide (direction) {
    
    if (direction==1) {
        index++;
        if (index >= slidesLength) {
            index=0;
            postionX = 0;    
        } else postionX = postionX - sliderItemWidth;    
        sliderMain.style = 'transform: translateX('+postionX+'px)';
    } else if (direction == -1) {
        index--;
        if (index < 0) {
            index=slidesLength-1;
            postionX = -((slidesLength-1)*sliderItemWidth);    
        } else postionX = postionX + sliderItemWidth;    
        sliderMain.style = 'transform: translateX('+postionX+'px)';
    }
}

  
   
    

window.addEventListener("resize", function() {
sliderItemWidth = sliderItems[0].offsetWidth;
slidesLength = sliderItems.length;
postionX=-index*sliderItemWidth;
sliderMain.style = 'transform: translateX('+postionX+'px)';
});


    
    
  }

  window.onscroll = function() {scrollFunction()};
      function scrollFunction() {
      
      if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
      document.getElementById("myBtn").style.display = "block";
      } else {
      document.getElementById("myBtn").style.display = "none";
      }
      }
      
      document.getElementById('myBtn').addEventListener("click", function(){
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      });