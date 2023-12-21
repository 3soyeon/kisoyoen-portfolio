// 쇼핑 추천
function tabChange1 () {
    let tabs = document.querySelectorAll('.shopping-tab-deal .chips li a');
    let sliders = document.querySelectorAll('.shopping-container .slider');
    tabs.forEach(function(tab, index){
        tabs[0].classList.add('on');
        tab.addEventListener('click', function(ev){
            ev.preventDefault();
            ev.target.classList.add('on');
            
            tabs.forEach(function(other){
                if ( other !== tab ) { // 탭들중에 클릭된애가 아니면
                    other.classList.remove('on');
                }
            })
            
            // hide가 빠지면 보여진다.
            sliders.forEach(function(slider, idx) {
                if ( index == idx ) {
                    slider.classList.remove('hide');
                } else {
                    slider.classList.add('hide')
                }
            })
        })
    })
}
tabChange1()

// 투어 특가
function tabChange2 () {
    let tabs = document.querySelectorAll('.tour-tab-container .chips li a');
    let sliders = document.querySelectorAll('.tour-container .slider');
    tabs.forEach(function(tab, index){
        tabs[0].classList.add('on');
        slider[0].classList.add('hide');
        tab.addEventListener('click', function(ev){
            ev.preventDefault();
            ev.target.classList.add('on');
            
            tabs.forEach(function(other){
                if ( other !== tab ) { // 탭들중에 클릭된애가 아니면
                    other.classList.remove('on');
                }
            })
            
            // hide가 빠지면 보여진다.
            sliders.forEach(function(slider, idx) {
                if ( index == idx ) {
                    slider.classList.remove('hide');
                } else {
                    slider.classList.add('hide')
                }
            })
        })
    })
}
tabChange2()

// 티켓 랭킹
function tabChange3() {
    let tabs = document.querySelectorAll('.ticket-tab-container .chips li a');
    let sliders = document.querySelectorAll('.ticket-container .slider');
    tabs.forEach(function(tab, index){
        tabs[0].classList.add('on');
        tab.addEventListener('click', function(ev){
            ev.preventDefault();
            ev.target.classList.add('on');
            
            tabs.forEach(function(other){
                if ( other !== tab ) { // 탭들중에 클릭된애가 아니면
                    other.classList.remove('on');
                }
            })
            
            // hide가 빠지면 보여진다.
            sliders.forEach(function(slider, idx) {
                if ( index == idx ) {
                    slider.classList.remove('hide');
                } else {
                    slider.classList.add('hide')
                }
            })
        })
    })
}
tabChange3()


