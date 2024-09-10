const responses = {
    "空格應該填哪個詞？": "空格應該填入「neck (脖子)」，因為題目說脖子痛到無法轉動。",
    "arm": " 因為手臂的疼痛不會直接影響轉動脖子的能力，因此不適合。",
    "arm": " 因為手臂的疼痛不會直接影響轉動脖子的能力，因此不適合。",
    "knee": " 因為膝蓋的疼痛不會直接影響轉動脖子的能力，因此不適合。",
    "neck": " 此為正確答案。",
    "stomach": "因為胃的疼痛不會直接影響轉動脖子的能力，因此不適合。",
    "為什麼選擇neck": "脖子痛會直接影響頭部的轉動，這與句子所描述的情境一致，因此選擇「neck」是最有邏輯的。",
    "如果是膝蓋痛呢?":"句子可以改寫為「My knee hurts so much that I cannot even walk properly.」這樣會更符合膝蓋疼痛的情境。",
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
    const botResponse = responses[message] || "這個我不知道!請去問老師喔!";
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
