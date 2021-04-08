const slide = document.querySelector('.slide');
const btn = document.querySelectorAll('.slide__img-test ul li')
btn.forEach((btn__click,index) => {
    btn__click.onclick = function(){
        if(btn__click.classList[0] == null){
            const btn__close = document.querySelector('.active');
            btn__close.classList.remove('active');
            this.classList.add('active');
            if(index == 1){
                slide.style.transform = `translate3d(-1200px, 0, 0)`;
            }
            else{
                slide.style.transform = `translate3d(0, 0, 0)`;
            }
        }
    }
})