
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

// 隱藏子選單
function hideMenu() {
    if (VisibleMenu != '') {
        document.getElementById(VisibleMenu).style.display = 'none';
    }
    VisibleMenu = '';
}


// function inv() {
//     var invantory = document.getElementById("invantory");
//     var courseList = document.getElementById("courseList");
//     var btn_c = document.getElementById("btn_c");
//     var btn_b = document.getElementById("btn_b");

//     invantory.style.display = "flex";
//     courseList.style.display = "none";
//     btn_c.classList.add('selected');
//     btn_b.classList.remove('selected')

//     // btn_c.style.backgroundColor = "var(--secondary-y-1)";
//     // btn_c.style.color = " var(--secondary-b-1)";
//     // btn_b.style.backgroundColor = "var(--primary-b-2)";
//     // btn_b.style.color = "var(--lesser-background-y-)";
//     courseList.style.visibility = "visible";

// }

// function course() {
//     var invantory = document.getElementById("invantory");
//     var courseList = document.getElementById("courseList");

//     invantory.style.display = "none";
//     courseList.style.display = "flex";
//     btn_b.classList.add('selected');
//     btn_c.classList.remove('selected')
//     // btn_c.style.backgroundColor = "var(--primary-b-2)";
//     // btn_c.style.color = "var(--lesser-background-y-)";
//     // btn_b.style.backgroundColor = "var(--secondary-y-1)";
//     // btn_b.style.color = "var(--secondary-b-1)";
//     courseList.style.visibility = "visible";

// }






document.addEventListener('DOMContentLoaded', function () {
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







    let currentFilter = ''; // 追蹤當前篩選的類型，如果為空則顯示所有動物
    const urlParams = new URLSearchParams(window.location.search);
    const selectedTypeFromUrl = urlParams.get('type') || ''; // 從URL中獲取篩選類型

    const subs = document.querySelectorAll('.sub');
    const sujNames = document.querySelectorAll('.sujName');





    // 如果 URL 中有篩選類型，則應用篩選並標記按鈕
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
        sujNames.forEach(sujName => sujName.style.display = 'block'); // 沒有篩選時顯示所有動物
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
