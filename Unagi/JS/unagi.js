const title = document.querySelector(".title");

document.addEventListener('scroll',function(){
    const value = window.scrollY;
    title.style.marginTop = value*1.2+'px';
}
)


const unagi = document.querySelector(".unagi");

document.addEventListener('scroll',function(){
    const value= window.scrollY;
    unagi.style.marginLeft = value*1+'px';
})