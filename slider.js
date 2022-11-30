





window.onload=function() {
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









