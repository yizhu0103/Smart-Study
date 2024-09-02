var VisibleMenu = ''; // 記錄目前顯示的子選單的 ID

// 顯示或隱藏子選單
function switchMenu(theMainMenu, theSubMenu) {
    var SubMenu = document.getElementById(theSubMenu);

    // 如果其他子選單正在顯示，先隱藏它
    if (VisibleMenu !== '' && VisibleMenu !== theSubMenu) {
        hideMenu();
    }

    // 切換子選單的顯示狀態
    if (SubMenu.style.display === 'none') { // 顯示子選單
        SubMenu.style.minWidth = theMainMenu.clientWidth + 'px'; // 讓子選單的最小寬度與主選單相同
        SubMenu.style.display = 'flex';
        VisibleMenu = theSubMenu;
    } else { // 隱藏子選單
        SubMenu.style.display = 'none';
        VisibleMenu = '';
    }
}

// 隱藏子選單
function hideMenu() {
    if (VisibleMenu !== '') {
        document.getElementById(VisibleMenu).style.display = 'none';
        VisibleMenu = '';
    }
}

// AI頁選項底線
document.querySelectorAll('.answer .option').forEach(option => {
    option.addEventListener('click', function(event) {
        event.preventDefault(); // 防止鏈接跳轉
        // 找到最近的包含這個選項的問題容器
        const question = this.closest('.answer');
        // 移除該問題內其他選項的選中樣式
        question.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
        // 為當前選中的選項添加選中樣式
        this.classList.add('selected');
    });
});
