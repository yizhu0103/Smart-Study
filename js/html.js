$(function () {/* 一個js只要執行一次就可以了 */

    // 滑動至指定位置
    $('.menu a').click(function () {/* 物件名稱要抓對不然找不到 */
        let menu = $(this).attr('href');
        let loc = $(menu).offset();/* location */
        $('html,body').animate({ scrollTop: loc.top }, 1000);//1000=1秒 幾秒滾過去
        /* 任何卷軸的都要去抓html body */
    });


    

});


window.addEventListener('scroll', () => {
    const scrollValue = window.scrollY;
    const ai = document.getElementById('ai');
    const cloud_b = document.getElementById('cloud_b');
    const lineb1 = document.getElementById('line-1-b');
    const lineb2 = document.getElementById('line-2-b');
    const facia = document.getElementById('facia');
    const moomb = document.getElementById('moom-b');
    const starb = document.getElementById('star-b');



    if(scrollValue<900){
        ai.style.top = 650+scrollValue*.5  + 'px';
        cloud_b.style.top = 700+scrollValue*1.1  + 'px';
        lineb1.style.top = 50+scrollValue*1  + 'px';
        lineb2.style.top = 50+scrollValue*1  + 'px';
        // facia.style.top = 100+scrollValue*1  + 'px';
        moomb.style.top = 100+scrollValue*1  + 'px';
        starb.style.top = 180+scrollValue*1  + 'px';

    }


   
   
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





$('.smoove').smoove({/* 全部人共用寫這邊 */
    offset: '20%'/* offset離螢幕底部 */
});
$('.smoove-z').smoove({
    moveZ:'-500px',
    rotateX:'90deg',
    moveY:'250px'
    
 });