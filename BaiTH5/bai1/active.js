document.addEventListener("DOMContentLoaded",function(){
    const slide = document.querySelector('.slide__content');
    let number = 0;
    const btn = document.querySelectorAll('.slide__icon');
    btn.forEach((btnClick,index) => {
        btnClick.onclick = function(){
            if(index == 1){
                if(number == 2){
                    number = 0;
                    slide.style.transform = `translate3d(0, 0, 0)`;
                    return false;
                }
                number++;
                let ani = number * 500;
                slide.style.transform = `translate3d(-${ani}px, 0, 0)`;
            } 
            else{
                if(number == 1){
                    slide.style.transform = `translate3d(0, 0, 0)`;
                    number--;
                }
                else if(number == 2){
                    slide.style.transform = `translate3d(-500px, 0, 0)`;
                    number--;
                }
                else if(number == 0){
                    slide.style.transform = `translate3d(-1000px, 0, 0)`;
                    number = 2;
                }
            }
        }
    })
    setInterval(function(){
        if(number == 2){
            number = 0;
            slide.style.transform = `translate3d(0, 0, 0)`;
            return false;
        }
        number++;
        let ani = number * 500;
        slide.style.transform = `translate3d(-${ani}px, 0, 0)`;
    },3000)
},false)