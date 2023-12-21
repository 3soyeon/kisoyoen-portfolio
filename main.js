document.addEventListener('click', popUp);
let dim = document.querySelector('#dim');
let layer = document.querySelector('.layer');

// 부모 스크롤 막기 위한 변수 추가
let isModalScrolling = false;

// 모달창 내에서 스크롤
layer.addEventListener('scroll', function () {
    isModalScrolling = true;
});

function popUp(ev) {
let clicked = ev.target;
let clickedId = clicked.getAttribute('id');
let dimImg = document.querySelector('.layer img');
let newLayer = new Image();

if (clicked.hasAttribute('data-design')) {
    newLayer.onload = function () {
    dimImg.src = this.src;

        if (clicked.tagName === 'A') {
            dimImg.style.width = '1500px';
        }
    };
    newLayer.src = clicked.getAttribute('data-design');
    dim.classList.add('on');

    // 모달창 열때 스크롤 상단으로 (상세페이지를 위에서부터 보기)
    layer.scrollTo(0, 0);

    // 부모 스크롤 막기
    document.body.style.overflow = 'hidden';
}

if (clickedId === 'dim') {
    dim.classList.remove('on');

    // 모달창 닫힐 때 부모 스크롤 다시 허용
    document.body.style.overflow = 'auto';
}
}

// 부모 요소 스크롤 감지하여 스크롤 허용/차단
document.addEventListener('scroll', function (ev) {
    if (!isModalScrolling) {
        ev.preventDefault();
    }
    // 초기화
    isModalScrolling = false;
});


let moaFigma = document.querySelector('.moaFigma'); // 버튼
let moaProto = document.querySelector('.moa-prototype'); // 컨테이너
let moaBox = document.querySelector('section.project1');

// 버튼을 눌렀을 때 
moaFigma.addEventListener('click', function(ev){
    // moaProto에 클래스 추가
    moaProto.classList.toggle('close');
    layer.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
})
// 컨테이너를 눌렀을 때
moaProto.addEventListener('click', function(){
    moaProto.classList.add('close');
    document.body.style.overflow = 'auto';
})

let cursor = document.querySelector('.cursor');

// pageX는 커서의 위치 x축, pageY는 커서의 위치 y축

document.addEventListener('mousemove', function(e){
    // console.log(e.pageX);
    // console.log(e.pageY);

    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});