const responses = {
    "你好": "你好！有什麼我可以幫助你的？",
    "今天天氣怎麼樣": "我不能查看天氣，但你可以查看天氣預報網站。",
    "再見": "再見！希望很快能再次見到你。",
};

document.getElementById('send-button').addEventListener('click', () => {
    sendMessageAndShowMessages();
});

document.getElementById('message-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault(); // 防止默认的行为，例如在表单中按下 Enter 提交表单
        sendMessageAndShowMessages();
    }
});

function sendMessageAndShowMessages() {
    const messagesElement = document.getElementById('messages');
    
    // 当按钮被点击或按下Enter键时显示 messages
    if (messagesElement.style.display === 'none' || messagesElement.style.display === '') {
        messagesElement.style.display = 'flex';
    }
    
    sendMessage();
}

function sendMessage() {
    const inputElement = document.getElementById('message-input');
    const messagesElement = document.getElementById('messages');
    const message = inputElement.value.trim();

    if (message === "") return;

    displayMessage('user', message);

    // 模拟机器人回应
    const botResponse = responses[message] || "对不起，我不明白你的问题。";
    setTimeout(() => {
        displayMessage('bot', botResponse);
    }, 500);

    inputElement.value = "";
}

function displayMessage(sender, message) {
    const messagesElement = document.getElementById('messages');
    const messageElement = document.createElement('div');
    messageElement.textContent = `${message}`;
    messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messagesElement.appendChild(messageElement);
    messagesElement.scrollTop = messagesElement.scrollHeight; // 滚动到底部
}

// 监听全局点击事件
document.addEventListener('click', (e) => {
    const chatContainer = document.getElementById('chat-container');
    const messagesElement = document.getElementById('messages');
    const inputElement = document.getElementById('message-input');

    // 如果点击发生在 chat-container 之外
    if (!chatContainer.contains(e.target)) {
        // 隐藏 messages
        messagesElement.style.display = 'none';            
        
        // 清空输入框内容
        inputElement.value = '';
    }
});
