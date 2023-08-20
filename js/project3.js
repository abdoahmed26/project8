let icon = document.querySelector(".icon");
let list  = document.querySelector(".list");
let CLose  = document.querySelector(".close");
let nav  = document.querySelector("nav");
let up  = document.querySelector(".up");

icon.onclick = function(){
    list.style.display = "block";
}
CLose.onclick = function(){
    list.style.display = "none";
}

var typing = new Typed(".name",{
    strings : ["YouTuber","Developer","Blogger","Designer","Freelancer"],
    typeSpeed : 100,
    backSpeed : 60,
    loop : true
});
var type = new Typed(".type",{
    strings : ["YouTuber","Developer","Blogger","Designer","Freelancer"],
    typeSpeed : 100,
    backSpeed : 60,
    loop : true
});

window.onscroll = function(){
    if(window.scrollY > 20){
        nav.classList.add("scrol");
        up.style.display = "block";
    }
    else{
        nav.classList.remove("scrol");
        up.style.display = "none";
    }
}
up.onclick = function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}

$('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1,
            nav: false
        },
        600:{
            items: 2,
            nav: false
        },
        1000:{
            items: 3,
            nav: false
        }
    }
});