// 스크롤이 위에있으면 클래스x (toTop을 뗀다)
// 스크롤이 내려오면 nav한테 toTop을 붙인다

let nav = document.querySelector('nav');
let topBtn = document.querySelector('.topBtn');
window.addEventListener('scroll', toTop);

function toTop(){
    let scroll = window.pageYOffset;
    if ( scroll > 10 ) {
        nav.classList.add('toTop');
        topBtn.classList.add('on');
    } else {
        nav.classList.remove('toTop');
        topBtn.classList.remove('on');
    }
}

// 슬라이더 
const visual = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
    }
})
const newItem = new Swiper('.new-item', {
    slidesPerView: 4,
    spaceBetween: 35,
    loop: true,
    navigation: {
        prevEl: '.new-prev',
        nextEl: '.new-next'
    }
})
const benefit = new Swiper('.benefit-slider', {
    loop: true,
    navigation: {
        prevEl: '.bn-prev',
        nextEl: '.bn-next'
    }
})
const timedeal = new Swiper('.timedeal', {
    slidesPerView: 2,
    spaceBetween: 35,
    loop: true,
    navigation: {
        prevEl: '.deal-prev',
        nextEl: '.deal-next'
    }
})
let tabname = ['몸도 마음도 가벼운 선택', '나를 위한 선택, 오뮤', '제주담음 브랜드', '고기리막국수 시리즈', '프로틴계의 미숫가루'];
const mdPick = new Swiper('.md-pick-container', {
    loop: true,
    pagination: {
        el: '.tab-pager',
        bulletClass: 'md-tab', // 모든탭들의 공통클래스
        bulletActiveClass: 'md-tab-active', // 액티브된페이지의 탭 클래스

        renderBullet: function(index, className){
            // 마크업은 문자타입이라 ''로 감싸야 하고, 변수명은 따옴표가 없어야 된다
            return '<div class="' + className + '">' + tabname[index] + '</div>'
        },
        clickable: true   // 클릭해서 넘길수있음
    }
})





/*
현재시간으로부터 자정까지 얼마나 남았는지 계산
남은시는 hours에, 남은분은 minutes에, 남은초는 second에 나타나게한다.
1초에 한번씩.
*/

let hoursEl = document.querySelector('.hours'),
minutesEl = document.querySelector('.minutes'),
secondsEl = document.querySelector('.seconds');

function deal(){
    let now = new Date();
    let midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1,0,0,0); // 1일 뒤 (1일,0시,0분,0초)
    // Math.floor()는 소수점을 절삭해주는 메서드
    let remain = Math.floor((midnight.getTime() - now.getTime()) / 1000 ) //자정으로부터 남은 초
    
    //시
    let hours = Math.floor(remain / 3600);
    //분
    let minutes = Math.floor((remain % 3600) / 60); // 남은시간을 3600으 나눈 나머지 (남은시를 60으로 나눔)
    //초
    let seconds = remain % 60;

    
    // 시,분,초가 10이하면 두자릿수로 나와라.
    if ( hours < 10) {
        hoursEl.innerText = '0' + hours;
    } else {
        hoursEl.innerText = hours;
    }
    if ( minutes < 10) {
        minutesEl.innerText = '0' + minutes;
    } else {
        minutesEl.innerText = minutes;
    }
    if ( seconds < 10 ) {
        secondsEl.innerText = '0' + seconds;
    } else {
        secondsEl.innerText = seconds;
    }
}
// deal();
setInterval(deal, 1000);