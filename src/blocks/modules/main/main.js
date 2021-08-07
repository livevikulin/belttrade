import Swiper from "swiper";
import SlimSelect from "slim-select";
import SwiperCore, { Navigation, Pagination } from "swiper/core";

SwiperCore.use([Navigation, Pagination]);

const swiperAdvantages = new Swiper(".slider-advantages", {
    slidesPerView: "auto",
    spaceBetween: 40,
    navigation: {
        nextEl: ".advantages-next",
        prevEl: ".advantages-prev",
    }
});

const swiperGallery = new Swiper(".gallery-slider", {
    slidesPerView: "auto",
    spaceBetween: 24,
    navigation: {
        nextEl: ".gallery-next",
        prevEl: ".gallery-prev",
    },
    pagination: {
        el: ".gallery-pagination",
    }
});

const screenWidth = document.documentElement.clientWidth
if ( screenWidth < 768 ) {
    let videoContainer = document.querySelector('.video-nav'),
        videoWrapper = document.querySelector('.video-wrapper'),
        videoSlide = document.querySelectorAll('.video-tab');
    
    videoContainer.classList.add('swiper-container')
    videoWrapper.classList.add('swiper-wrapper')
    videoSlide.forEach( item => {
        item.classList.add('swiper-slide')
    })

	const swiperVideo = new Swiper(".video-nav", {
		direction: 'vertical',
		slidesPerView: 1,
		spaceBetween: 12,
		navigation: {
			nextEl: ".video-next",
			prevEl: ".video-prev",
		}
	})
}


//Табы 
let tabBtn = document.querySelectorAll(".tab-btn");

tabBtn.forEach(function(item, i) {
    item.addEventListener("click", function(e) {
        e.preventDefault();
        let tabName = this.dataset.tab,
            tabContent = document.querySelector(".selection-tab__item[data-tab=\""+tabName+"\"]");

        document.querySelectorAll(".selection-tab__item.active-tab").forEach(function(item, i){
            item.classList.remove("active-tab");
        });

        document.querySelectorAll(".tab-btn.active-tab").forEach(function(item, i){
            item.classList.remove("active-tab");
        });

        tabContent.classList.add("active-tab");
        this.classList.add("active-tab");
    });
});

//Селекты
// let selectItem = document.querySelectorAll(".selection-select");

// selectItem.forEach( item => {
//     new SlimSelect({
//         showSearch: false,
//         select: item
//     });

// 	item.addEventListener('change', function() {
// 		let selectBox = this.parentElement
// 		if ( selectBox.nextElementSibling.classList.contains('select-hide') ) {
// 			selectBox.nextElementSibling.classList.remove('select-hide')
// 		}
// 	})
// });


//Табы видео
let tabVideo = document.querySelectorAll(".video-tab");

tabVideo.forEach(function(item, i) {
    item.addEventListener("click", function(e) {
        e.preventDefault();
        let tabName = this.dataset.video,
            tabContent = document.querySelector(".video-item[data-video=\""+tabName+"\"]");

        document.querySelectorAll(".video-item.active-video").forEach(function(item, i){
            item.classList.remove("active-video");
        });

        document.querySelectorAll(".video-tab.active-video").forEach(function(item, i){
            item.classList.remove("active-video");
        });    

        tabContent.classList.add("active-video");
        this.classList.add("active-video");
    });
});

//Якоря
const scrollTo = document.querySelectorAll("a.js-scroll-to");

for (let scroll of scrollTo) {
    scroll.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(".menu-mobile").classList.remove("open-menu");
		document.querySelector("body").style.overflow = "visible";
        const blockID = scroll.getAttribute("href");
    
        document.querySelector(blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
}

//Кнопка наверх

let toUpBtn = document.getElementById('to-up')

toUpBtn.addEventListener('click', smoothJumpUp)

function scrollUp(to, duration = 700) {
	const
		element = document.scrollingElement || document.documentElement,
		start = element.scrollTop,
		change = to - start,
		startDate = +new Date(),
		// t = current time
		// b = start value
		// c = change in value
		// d = duration
		easeInOutQuad = function (t, b, c, d) {
			t /= d / 2;
			if (t < 1) return c / 2 * t * t + b;
			t--;
			return -c / 2 * (t * (t - 2) - 1) + b;
		},
		animateScroll = function () {
			const currentDate = +new Date();
			const currentTime = currentDate - startDate;
			element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
			if (currentTime < duration) {
				requestAnimationFrame(animateScroll);
			}
			else {
				element.scrollTop = to;
			}
		};
	animateScroll();
}

function smoothJumpUp(e) {
	e.preventDefault()
	scrollUp(0, 400)
}

window.addEventListener('scroll', function() {
	let scrolled = window.pageYOffset || document.documentElement.scrollTop;
	if (scrolled > 100) {
		toUpBtn.style.opacity = '1';
	} else {
		toUpBtn.style.opacity = '0';
	}
})

