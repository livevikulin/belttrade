let header = document.querySelector("header");

if ( window.screen.width > 1024 ) {
    window.addEventListener("scroll", function() {
        if ( this.pageYOffset > 100 ) {
            header.classList.add("fixed-header");
            document.querySelector("main").style.paddingTop = "100px";
        } else {
            header.classList.remove("fixed-header");
            document.querySelector("main").style.paddingTop = "0px";
        }
    });
}

//мобильное меню
let burger = document.querySelector(".burger");
menuMobile = document.querySelector(".menu-mobile");
closeMenu = document.querySelector(".close-menu");

burger.addEventListener("click", () => {
    menuMobile.classList.add("open-menu");
    document.querySelector("body").style.overflow = "hidden";
});

closeMenu.addEventListener("click", () => {
    menuMobile.classList.remove("open-menu");
    document.querySelector("body").style.overflow = "visible";
});


