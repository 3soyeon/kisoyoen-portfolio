let mainVisual = new Swiper('.sec1', {
    loop: true,
    navigation: {
        nextEl: '.mainSlideNext',
        prevEl: '.mainSlidePrev'
    },
    pagination: {
        el: '.mainSliderPager',
        clickable: true
    },
    autoplay: {
        delay: 2000
    }
})

// stopMainSlider를 클릭하면 tog를 붙였다 뗐다
// tog가 없으면 재생상태, tog가 있으면 일시정지상태

let stopMainSlider = document.querySelector('.stopMainSlider');
stopMainSlider.addEventListener('click', stopOrStart)

function stopOrStart(ev) {
    ev.target.classList.toggle('tog');
    
    if ( stopMainSlider.classList.contains('tog') ) {
        console.log('tog가 있음 (스톱된 상태임)')
        mainVisual.autoplay.stop();
    } else {
        console.log('tog가 없음 (재생상태임)')
        mainVisual.autoplay.start();
    }
}


// 솔루션 슬라이더
let hashname = ['#저자극탄력', '#장벽 강화', '#자극 진정', '#저자극클린선크림'];
let solutionSlider = new Swiper('.solutionSlider', {
    loop: true,
    // 반응형 너비가 넓을땐 4벌, 좁아지면 3벌
    breakpoints: {
        768: { // 브라우저가 768보다 클 때
            slidesPerView: 3,
            spaceBetween: 10
        },
        1024: { // 브라우저가 1024보다 클 때
            slidesPerView: 4,
            spaceBetween: 14
        }
    },
    navigation: {
        nextEl: '.solutionNext',
        prevEl: '.solutionPrev'
    },
    pagination: {
        el: '.hashtag-pager',
        bulletClass: 'hash',
        bulletActiveClass: 'hash-active',
        // 페이저 커스텀
        renderBullet: function(index, className){
            return '<div class="' + className + '">' + hashname[index] + '</div>'
        }
    }
})
////////////////////////////////////////////////////////////////

let tabname = ['탭넴1', '탭넴2', '탭넴3', '탭넴4', '탭넴4'];
const mdPick = new Swiper('.md-pick-container', {
    loop: true,
    pagination: {
        el: '.tab-pager',
        bulletClass: 'md-tab',
        bulletActiveClass: 'md-tab-active',
        // 페이저 커스텀
        renderBullet: function(index, className){
            return '<div class="' + className + '">' + tabname[index] + '</div>'
        }
    }
})




