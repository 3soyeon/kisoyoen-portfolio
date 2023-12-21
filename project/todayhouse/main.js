// DOM이 로드되면 모달창을 띄운다.
// 오늘하루 안보기 버튼을 누르면 쿠키를 세팅하고 모달을 닫는다.
// 쿠키가 있으면 만료일(1일)까지 모달을 띄우지 않는다.

let modal = document.querySelector('.modalContainer');
let skipBtn = document.querySelector('.skipToday');

// split() 알아보기: 문자열을 구분자를 기준으로 잘라서 배열로 반환
let str = '효연.티파니.써니.태연';
console.log(str);
console.log(str.split('.'));

// trim() 문자열 앞뒤 공백을 제거해주는 메서드
let str2 = '    문자열!';
console.log(str2);
console.log(str2.trim());

// startWith() 문자열이 특정문자로 시작하는지 검사해서 true / false 반환
console.log(str.startsWith('태연'));


// 오늘하루 안보기를 누르지않은 
function showPopup(){
    let cookies = document.cookie.split(';'); // 쿠키들을 가져와서 배열로 변환
    let toggle = false;

    // 공백없애고 오늘의집으로 시작하는 쿠키있는지 확인
    cookies.forEach(function(coo){
        if (coo.trim().startsWith('오늘의집=')) { // 쿠키스 배열을 순회하면서 '오늘의집='으로 시작하는게 있으면 true반환
            toggle = true;
        }
    });
    // 오늘의집 쿠키가 없으면 보이고, 있으면 안보이게
    if ( !toggle ) {
        modal.style.display = 'block';
    } else {
        modal.style.display = 'none';
    }
}
document.addEventListener('DOMContentLoaded', showPopup);





// 오늘 하루 안보기를 누름
function closeToday(){
    // 쿠키 만료시간 설정 (1일후)
    let expires = new Date();
    expires.setDate(expires.getDate() + 1);

    // 쿠키 문자열 생성  쿠키이름, 만료일, 경로
    let setCookie = `오늘의집=true; expires=${expires.toUTCString()}; path=/`;
    
    // 쿠키로 세팅하고, 모달 닫기
    document.cookie = setCookie;
    modal.style.display = 'none';
}
skipBtn.addEventListener('click', closeToday);