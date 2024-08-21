$(function () {/* 一個js只要執行一次就可以了 */

    // 滑動至指定位置
    $('.menu a').click(function () {/* 物件名稱要抓對不然找不到 */
        let menu = $(this).attr('href');
        let loc = $(menu).offset();/* location */
        $('html,body').animate({ scrollTop: loc.top }, 1000);//1000=1秒 幾秒滾過去
        /* 任何卷軸的都要去抓html body */
    });

});

