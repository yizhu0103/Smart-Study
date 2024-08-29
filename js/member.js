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