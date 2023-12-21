// mainVisual 슬라이더 
const mainVisual = new Swiper(".eventBanner", {
    slidesPerView: 2,
    spaceBetween: 30, 
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    loop:true,
    autoplay: {     //자동슬라이드 (false-비활성화)
        delay: 3000, // 시간 설정
        disableOnInteraction: false, // false-스와이프 후 자동 재생
    },
    navigation: {
        nextEl: ".event-next",
        prevEl: ".event-prev",
    }
});


/* -------------------- section class="shopping" -------------------- */
// deal 슬라이더 
const deal = new Swiper('.deal-container', {
    slidesPerView: 4,
    spaceBetween: 20, 
    slidesPerGroup : 4,
    navigation: {
        nextEl: ".shopping-next",
        prevEl: ".shopping-prev"
    }
});

// best 슬라이더 
const best = new Swiper('.best-container', {
    slidesPerView: 4,
    spaceBetween: 20, 
    slidesPerGroup : 4,
    navigation: {
        nextEl: ".shopping-next",
        prevEl: ".shopping-prev"
    }
});

// cola 슬라이더 
const cola = new Swiper('.cola-container', {
    slidesPerView: 4,
    spaceBetween: 20, 
    slidesPerGroup : 4,
    navigation: {
        nextEl: ".shopping-next",
        prevEl: ".shopping-prev"
    }
});

// digital 슬라이더 
const digital = new Swiper('.digital-container', {
    slidesPerView: 4,
    spaceBetween: 20, 
    slidesPerGroup : 4,
    navigation: {
        nextEl: ".shopping-next",
        prevEl: ".shopping-prev"
    }
});



// shopping 점점점 처리
let arr = document.querySelectorAll('.shopping p.text');
let limit = 49;
arr.forEach(function(text){
    let cut = text.innerText;
    let cutTrim = cut.trim();
    let cutLength = cutTrim.length;

    // console.log(cut)
    if ( cutLength > limit) {
        text.innerText = cutTrim.slice(0, limit) + '...';
    }
})

// tour 점점점 처리
let arrTour = document.querySelectorAll('p.tourText');
let limitTour = 30;
arrTour.forEach(function(text){
    let cut = text.innerText;
    let cutTrim = cut.trim();
    let cutLength = cutTrim.length;

    // console.log(cut)
    if ( cutLength > limitTour) {
        console.log(cutLength)
        text.innerText = cutTrim.slice(0, limitTour) + '...';
    }
})

// first 슬라이더 
const first = new Swiper('.first-container', {
    slidesPerView: 3,
    spaceBetween: 30, 
    slidesPerGroup : 3,
    navigation: {
        nextEl: ".tour-next",
        prevEl: ".tour-prev"
    }
});

// package 슬라이더 
const package = new Swiper('.package-container', {
    slidesPerView: 3,
    spaceBetween: 30, 
    slidesPerGroup : 3,
    navigation: {
        nextEl: ".tour-next",
        prevEl: ".tour-prev"
    }
});

// lodgment 슬라이더 
const lodgment = new Swiper('.lodgment-container', {
    slidesPerView: 3,
    spaceBetween: 30, 
    slidesPerGroup : 3,
    navigation: {
        nextEl: ".tour-next",
        prevEl: ".tour-prev"
    }
});

// overseas 슬라이더 
const overseas = new Swiper('.overseas-container', {
    slidesPerView: 3,
    spaceBetween: 30, 
    slidesPerGroup : 3,
    navigation: {
        nextEl: ".tour-next",
        prevEl: ".tour-prev"
    }
})

/* -------------------- section class="ticket" -------------------- */
// musical 슬라이더 
const musical = new Swiper('.musical-container', {
    slidesPerView: 4,
    spaceBetween: 20, 
    slidesPerGroup : 4,
    navigation: {
        nextEl: ".ticket-next",
        prevEl: ".ticket-prev"
    }
});

// concert 슬라이더 
const concert = new Swiper('.concert-container', {
    slidesPerView: 4,
    spaceBetween: 20, 
    slidesPerGroup : 4,
    navigation: {
        nextEl: ".ticket-next",
        prevEl: ".ticket-prev"
    }
});

// theater 슬라이더 
const theater = new Swiper('.theater-container', {
    slidesPerView: 4,
    spaceBetween: 20, 
    slidesPerGroup : 4,
    navigation: {
        nextEl: ".ticket-next",
        prevEl: ".ticket-prev"
    }
});

// classic 슬라이더 
const classic = new Swiper('.classic-container', {
    slidesPerView: 4,
    spaceBetween: 20, 
    slidesPerGroup : 4,
    navigation: {
        nextEl: ".ticket-next",
        prevEl: ".ticket-prev"
    }
});

// sports 슬라이더 
const sports = new Swiper('.sports-container', {
    slidesPerView: 4,
    spaceBetween: 20, 
    slidesPerGroup : 4,
    navigation: {
        nextEl: ".ticket-next",
        prevEl: ".ticket-prev"
    }
});

// leisure 슬라이더 
const leisure = new Swiper('.leisure-container', {
    slidesPerView: 4,
    spaceBetween: 20, 
    slidesPerGroup : 4,
    navigation: {
        nextEl: ".ticket-next",
        prevEl: ".ticket-prev"
    }
});

// exhibition 슬라이더 
const exhibition = new Swiper('.exhibition-container', {
    slidesPerView: 4,
    spaceBetween: 20, 
    slidesPerGroup : 4,
    navigation: {
        nextEl: ".ticket-next",
        prevEl: ".ticket-prev"
    }
});

// child 슬라이더 
const child = new Swiper('.child-container', {
    slidesPerView: 4,
    spaceBetween: 20, 
    slidesPerGroup : 4,
    navigation: {
        nextEl: ".ticket-next",
        prevEl: ".ticket-prev"
    }
});

/* -------------------- section class="live" -------------------- */
// live 슬라이더 
const live = new Swiper('.live-container', {
    slidesPerView: 4,
    spaceBetween: 20, 
    slidesPerGroup : 4,
    navigation: {
        nextEl: ".live-next",
        prevEl: ".live-prev"
    }
});



// live 점점점 처리
let arrLive = document.querySelectorAll('.live-container h4');
let limitLive = 36;
arrLive.forEach(function(text){
    let cut = text.innerText;
    let cutTrim = cut.trim();
    let cutLength = cutTrim.length;

    // console.log(cut)
    if ( cutLength > limitLive) {
        console.log(cutLength)
        text.innerText = cutTrim.slice(0, limitLive) + '...';
    }
})

// talk 점점점 처리
let arrTalk = document.querySelectorAll('.talk p');
let limitTalk = 16;
arrTalk.forEach(function(text){
    let cut = text.innerText;
    let cutTrim = cut.trim();
    let cutLength = cutTrim.length;

    // console.log(cut)
    if ( cutLength > limitTalk) {
        console.log(cutLength)
        text.innerText = cutTrim.slice(0, limitTalk) + '...';
    }
})


/* -------------------- section class="book" -------------------- */
// book 점점점 처리
let arrBook = document.querySelectorAll('.book p.Text');
let limitBook = 20;
arrBook.forEach(function(text){
    let cut = text.innerText;
    let cutTrim = cut.trim();
    let cutLength = cutTrim.length;

    // console.log(cut)
    if ( cutLength > limitBook) {
        console.log(cutLength)
        text.innerText = cutTrim.slice(0, limitBook) + '...';
    }
})


// pick 슬라이더 
const pick = new Swiper('.pick-container', {
    slidesPerView: 5,
    spaceBetween: 10, 
    slidesPerGroup : 5,
    navigation: {
        nextEl: ".book-next",
        prevEl: ".book-prev"
    }
});

// seller 슬라이더 
const seller = new Swiper('.seller-container', {
    slidesPerView: 5,
    spaceBetween: 10, 
    slidesPerGroup : 5,
    navigation: {
        nextEl: ".book-next",
        prevEl: ".book-prev"
    }
});

// new 슬라이더 
const news = new Swiper('.news-container', {
    slidesPerView: 5,
    spaceBetween: 20, 
    slidesPerGroup : 5,
    navigation: {
        nextEl: ".book-next",
        prevEl: ".book-prev"
    }
});


// book 점점점 처리
let arrNews = document.querySelectorAll('section.book .news-container p.writer');
let limitNews = 40;
arrNews.forEach(function(text){
    let cut = text.innerText;
    let cutTrim = cut.trim();
    let cutLength = cutTrim.length;

    // console.log(cut)
    if ( cutLength > limitNews) {
        console.log(cutLength)
        text.innerText = cutTrim.slice(0, limitNews) + '...';
    }
})

// special 슬라이더 
const special = new Swiper('.special-container', {
    slidesPerView: 5,
    spaceBetween: 20, 
    slidesPerGroup : 5,
    navigation: {
        nextEl: ".special-next",
        prevEl: ".special-prev"
    }
});


/* -------------------- section class="benefits" -------------------- */
// benefits 슬라이더 
const benefits = new Swiper(".benefits-container", {
    slidesPerView: 4,
    spaceBetween: 20, 
    slidesPerGroup : 4,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    autoplay: {     //자동슬라이드 (false-비활성화)
        delay: 3000, // 시간 설정
        disableOnInteraction: false, // false-스와이프 후 자동 재생
    },
    navigation: {
        nextEl: ".benefits-next",
        prevEl: ".benefits-prev",
    }
});




/* -------------------- 탭 -------------------- */
// 전체 칩스 20개
let chips = document.querySelectorAll('.chips a');

// 모든 탭 링크 막기
chips.forEach(function(tab){
    tab.addEventListener('click', function(e){
        e.preventDefault();
    })
})

// 쇼핑추천 탭
let shoppingTab = document.querySelectorAll('.shopping-tab-deal li');

// 쇼핑추천 슬라이더 
let shoppingSlider = document.querySelectorAll('.shopping .prd-slider');


shoppingTab.forEach(function(tab, index){
    tab.addEventListener('click', function(e){
        // 탭표시
        shoppingTab.forEach(function(namoji){
            e.currentTarget.classList.add('on');
            if ( namoji !== e.currentTarget ) {
                namoji.classList.remove('on');
            } 
        })
        // 
        shoppingSlider.forEach(function(slider, idx){
            slider.classList.add('hide');
            if ( idx == index ) {
                slider.classList.remove('hide');
            } else {
                slider.classList.add('hide');
            }
        })
    })
})

//  투어특가 탭
let tourTab = document.querySelectorAll('.tour-tab-container li');
// 투어특가 슬라이더
let tourSlider = document.querySelectorAll('.tour .prd-slider');
tourTab.forEach(function(tab, index){
    tab.addEventListener('click', function(e){
        // 탭표시
        tourTab.forEach(function(namoji){
            e.currentTarget.classList.add('on');
            if ( namoji !== e.currentTarget ) {
                namoji.classList.remove('on');
            } 
        })
        // 
        tourSlider.forEach(function(slider, idx){
            slider.classList.add('hide');
            if ( idx == index ) {
                slider.classList.remove('hide');
            } else {
                slider.classList.add('hide');
            }
        })
    })
})

//  티켓랭킹 탭
let ticketTab = document.querySelectorAll('.ticket-tab-container li');
// 티켓랭킹 슬라이더
let ticketSlider = document.querySelectorAll('.ticket .prd-slider');
ticketTab.forEach(function(tab, index){
    tab.addEventListener('click', function(e){
        // 탭표시
        ticketTab.forEach(function(namoji){
            e.currentTarget.classList.add('on');
            if ( namoji !== e.currentTarget ) {
                namoji.classList.remove('on');
            } 
        })
        // 
        ticketSlider.forEach(function(slider, idx){
            slider.classList.add('hide');
            if ( idx == index ) {
                slider.classList.remove('hide');
            } else {
                slider.classList.add('hide');
            }
        })
    })
})

//  오늘의도서 탭
let bookTab = document.querySelectorAll('.book-tab-container li');
// 오늘의도서 슬라이더
let bookSlider = document.querySelectorAll('.book .prd-slider');
bookTab.forEach(function(tab, index){
    tab.addEventListener('click', function(e){
        // 탭표시
        bookTab.forEach(function(namoji){
            e.currentTarget.classList.add('on');
            if ( namoji !== e.currentTarget ) {
                namoji.classList.remove('on');
            } 
        })
        // 
        bookSlider.forEach(function(slider, idx){
            slider.classList.add('hide');
            if ( idx == index ) {
                slider.classList.remove('hide');
            } else {
                slider.classList.add('hide');
            }
        })
    })
})