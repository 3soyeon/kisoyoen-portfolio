let header = document.querySelector('header');
let burger = document.querySelector('.burger');
let mode = document.querySelector('.mode');
let wrap = document.querySelector('#wrap');


// burger를 클릭하면 header에 .open 토글
burger.addEventListener('click', function(ev){
    header.classList.toggle('open');
    ev.currentTarget.classList.toggle('x');
})


// mode를 클릭하면 mode한테 .dark를 토글
mode.addEventListener('click', function(ev){
    ev.currentTarget.classList.toggle('dark');
    wrap.classList.toggle('darkmode');
})

// 브라우저의 너비가 768보다 작으면 header에 .mo를 붙이자.
window.addEventListener('resize', mobile);
window.addEventListener('DOMContentLoaded', mobile);
function mobile(){
    let width = window.innerWidth;
    // console.log(width);

    if ( width < 768 ) {
        header.classList.add('mo')
    } else {
        header.classList.remove('mo')
    }
}

// 모바일 헤더가 투명하다가 스크롤 내렸을때 흰색으로 drop
window.addEventListener('scroll', drop);
function drop(){
    let scroll = window.scrollY;
    if ( scroll > 0 ) {
        header.classList.add('drop')
    } else {
        header.classList.remove('drop')
    }
}

// 함께해요 우리와, 스크롤로 top과 opacity 조절
let parallax = document.querySelector('.parallax');
let text = document.querySelector('.fighting');
let dim = document.querySelector('.dim');

window.addEventListener('scroll', parallaxEffect)
function parallaxEffect(){
    // 전체 문서의 높이
    let height = document.documentElement.offsetHeight;
    // 패롤렉스의 높이
    let parallaxHeight = parallax.offsetHeight;
    // 뷰포트의 높이
    let vh = window.innerHeight;
    // 패롤렉스 구간까지의 높이 가져오기
    let getHeight = height - parallaxHeight - vh;

    // 퍼센트 반환
    let percent = ((window.scrollY - getHeight) / vh) * 100;

    // 오퍼시티는 0~1까지의 값을 사용해야 함
    let opacity = 1 - (percent * 0.01)

    if ( window.scrollY > getHeight) {
        text.style.top = percent + 'px';
        dim.style.opacity = opacity;
        console.log(opacity);
    }
}


















/////////// slider
let tabname = ['Change', 'Imagination', 'Passion', 'Daily'];
let visual = new Swiper('.main-visual', {
    loop: true,
    effect: 'fade',
    pagination: {
        el: '.tab-pager',
        bulletClass: 'visual-tab',
        bulletActiveClass: 'visual-tab-active',
        renderBullet: function(index, className) {
            return '<div class="' + className + '">' + tabname[index] + '</div>'
        },
        clickable: true
    }
})
let office = new Swiper('.office-slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: '.progress',
        type: 'progressbar'
    },
    breakpoints: {
        768: {
            // 768 이상일때
            slidesPerView: 'auto',
            spaceBetween: 100,
        }
    }
})

/////////// AOS
AOS.init();