// 簡單的聊天機器人邏輯
const responses = {
    "你好": "你好！有什麼我可以幫助你的？",
    "今天天氣怎麼樣": "我不能查看天氣，但你可以查看天氣預報網站。",
    "再見": "再見！希望很快能再次見到你。",
};

document.getElementById('send-button').addEventListener('click', () => {
    sendMessage();
});

document.getElementById('message-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const inputElement = document.getElementById('message-input');
    const message = inputElement.value.trim();

    if (message === "") return;

    displayMessage('User', message);

    // 模擬機器人回應
    const botResponse = responses[message] || "對不起，我不明白你的問題。";
    setTimeout(() => {
        displayMessage('Bot', botResponse);
    }, 500);

    inputElement.value = "";
}

function displayMessage(sender, message) {
    const messagesElement = document.getElementById('messages');
    const messageElement = document.createElement('div');
    messageElement.textContent = `${sender}: ${message}`;
    messagesElement.appendChild(messageElement);
    messagesElement.scrollTop = messagesElement.scrollHeight; // 滾動到底部
}
