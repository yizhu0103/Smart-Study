


var VisibleMenu = ''; // 記錄目前顯示的子選單的 ID

// 顯示或隱藏子選單
function switchMenu(theMainMenu, theSubMenu, theEvent) {
    var SubMenu = document.getElementById(theSubMenu);
    if (SubMenu.style.display == 'none') { // 顯示子選單
        SubMenu.style.minWidth = theMainMenu.clientWidth; // 讓子選單的最小寬度與主選單相同 (僅為了美觀)
        SubMenu.style.display = 'block';
        hideMenu(); // 隱藏子選單
        VisibleMenu = theSubMenu;
    }
    else { // 隱藏子選單
        if (theEvent != 'MouseOver' || VisibleMenu != theSubMenu) {
            SubMenu.style.display = 'none';
            VisibleMenu = '';
        }
    }
}


// function hideMenu() {
//     if (VisibleMenu != '') {
//         document.getElementById(VisibleMenu).style.display = 'none';
//     }
//     VisibleMenu = '';
// }


document.addEventListener('DOMContentLoaded', function () {
   // 定義切換選單的函數
function switchMenu(menuId) {
    const menu = document.getElementById(menuId);
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}

// 選取所有 main-menu 並加上事件監聽器
const menus = document.querySelectorAll('.main-menu');
menus.forEach(menu => {
    menu.addEventListener('click', function() {
        const menuId = this.getAttribute('data-menu'); // 取得對應的選單 ID
        switchMenu(menuId); // 切換對應的選單
    });
});










    var invantory = document.getElementById("invantory");
    var courseList = document.getElementById("courseList");
    var btn_c = document.getElementById("btn_c");
    var btn_b = document.getElementById("btn_b");
    btn_c.addEventListener("click", () => {

        invantory.style.display = "flex";
        courseList.style.display = "none";
        btn_c.classList.add('selected');
        btn_b.classList.remove('selected');
        courseList.style.visibility = "visible";


    });
    btn_b.addEventListener("click", () => {

        invantory.style.display = "none";
        courseList.style.display = "flex";
        btn_c.classList.remove('selected');
        btn_b.classList.add('selected');
        courseList.style.visibility = "visible";

    });







    let currentFilter = ''; 
    const urlParams = new URLSearchParams(window.location.search);
    const selectedTypeFromUrl = urlParams.get('type') || ''; 
    const subs = document.querySelectorAll('.sub');
    const sujNames = document.querySelectorAll('.sujName');




    if (selectedTypeFromUrl) {
        currentFilter = selectedTypeFromUrl;
        subs.forEach(sub => {
            if (sub.getAttribute('data-type') === currentFilter) {
                sub.classList.add('active');
            }
        });
        sujNames.forEach(function (sujName) {
            if (sujName.getAttribute('data-type') === currentFilter) {
                sujName.style.display = 'block';
            } else {
                sujName.style.display = 'none';
            }
        });
    } else {
        sujNames.forEach(sujName => sujName.style.display = 'block'); 
    }

    // 按鈕點擊事件
    subs.forEach(function (button) {
        button.addEventListener('click', function () {
            const selectedType = this.getAttribute('data-type');

            // 如果再次點擊同一個篩選類型，則重置篩選
            if (currentFilter === selectedType) {
                currentFilter = '';
                subs.forEach(sub => sub.classList.remove('active'));
                sujNames.forEach(sujName => sujName.style.display = 'block');
            } else {
                currentFilter = selectedType;
                subs.forEach(sub => sub.classList.remove('active'));
                this.classList.add('active');
                sujNames.forEach(function (sujName) {
                    if (sujName.getAttribute('data-type') === currentFilter) {
                        sujName.style.display = 'block';
                    } else {
                        sujName.style.display = 'none';
                    }
                });
            }
        });
    });

});
