$(function () {/* 一個js只要執行一次就可以了 */
    //---漢堡按鈕---
    $('.hamburger').click(function () {
        $(this).toggleClass('is-active');
        /* 交替並輸入class=is-active */
        $('.navigation').toggleClass('show');
    });


    // 滑動至指定位置
    $('.menu a').click(function () {/* 物件名稱要抓對不然找不到 */
        let menu = $(this).attr('href');
        let loc = $(menu).offset();/* location */
        $('html,body').animate({ scrollTop: loc.top }, 1000);//1000=1秒 幾秒滾過去
        /* 任何卷軸的都要去抓html body */
    });







    window.addEventListener('scroll', () => {

        // 在頁面加載完成後，滾動到頂部
        window.onload = function () {
            window.scrollTo(0, 0);
        };

        // 也可以在重新整理之前強制滾回頂部
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }



        const scrollValue = window.scrollY;
        const cloud_b = document.getElementById('cloud_b');
        const cloud_b_b = document.getElementById('cloud_b_b');
        const lineb1 = document.getElementById('line-1-b');
        const lineb2 = document.getElementById('line-2-b');
        const facia = document.getElementById('facia');
        const ai = document.getElementById('ai');
        // const starb = document.getElementById('star-b');
        // const moomb = document.getElementById('star-b');
        const wave = document.getElementById('wave');
        const memh2 = document.getElementById('memberh2');

        if (0 <= scrollValue && scrollValue <= 700) {
            facia.style.filter = `blur(${scrollValue * 0.005}px)`;
            ai.style.top = 630 + scrollValue * .4 + 'px';
            cloud_b_b.style.top = 650 + scrollValue *0.1+ 'px';
            cloud_b.style.top = 750 + scrollValue * 0.1+ 'px';
            cloud_b_b.style.position = 'fixed';
            cloud_b.style.position = 'fixed';
            facia.style.display = 'flex';
            lineb1.style.top = 50 + scrollValue * 1 + 'px';
            lineb2.style.top = 50 + scrollValue * 1 + 'px';
            facia.style.position = 'fixed';
            

        }
        else if (700 < scrollValue && scrollValue <= 1500) {
            cloud_b_b.style.position = 'absolute';
            cloud_b_b.style.top = 650+700+'px';
            cloud_b.style.position = 'absolute';
            cloud_b.style.top = 750+720+'px';
            facia.style.display = 'flex';
            
        }
        else if (3000 <= scrollValue && scrollValue <= 4200) {
            wave.style.bottom = -800 + (scrollValue - 2950) * .8 + 'px';
            // memh2.style.top = -100 + (scrollValue - 3150) * .15 + 'px';
            facia.style.display = 'none';

        }
        else {
            ai.style.top = 910 + 'px';
            lineb1.style.top = 50 + 700 + 'px';
            lineb2.style.top = 50 + 700 + 'px';
            wave.style.bottom = -800 + 'px';
            memh2.style.bottom = -100 + 'px';
            facia.style.display = 'none';

        }
        // if (scrollValue < 1500) {
        //     header.style.position = 'fixed';
        // }

    });
    // ()=>{
    //     windtow.removeEventListener('scroll')
    // }

    window.addEventListener('scroll', () => {
        // 
        const scrollValue = window.scrollY;
        console.log(scrollValue);

    });






    const arrow_box = document.querySelectorAll('.arrow_box');
    document.addEventListener('mousemove', (e) => {
        arrow_box.forEach(arrow_box => {
            const rect = arrow_box.getBoundingClientRect();
            const arrow_boxCenterX = rect.left + rect.width / 2;
            const arrow_boxCenterY = rect.top + rect.height / 2;

            const arrow = arrow_box.querySelector('.arrow');

            const angle = Math.atan2(e.clientY - arrow_boxCenterY, e.clientX - arrow_boxCenterX) * 180 / Math.PI; // 轉換為角度
            arrow.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`; // 根據角度旋轉箭頭

        });
    });

});



$('.smoove').smoove({/* 全部人共用寫這邊 */
    offset: '20%'/* offset離螢幕底部 */
});
$('.smoove-z').smoove({
    moveZ: '-500px',
    rotateX: '90deg',
    moveY: '250px'

});