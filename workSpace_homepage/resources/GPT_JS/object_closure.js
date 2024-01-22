const chatApp = (function() {
  let messages = [];
  const chatWindow = document.getElementById('chat-window');
  const inputField = document.getElementById('chat-input');
  const sendButton = document.getElementById('send-button');

  function addMessage(msg) {
    messages.push(msg);
    updateChatWindow();
  }

  function updateChatWindow() {
    const messagesHtml = messages.map(message => `<p>${message}</p>`).join('');
    chatWindow.innerHTML = messagesHtml;
  }

  function sendMessage() {
    const msg = inputField.value.trim();
    if (msg) {
      addMessage(msg);
      inputField.value = '';
    }
  }

  sendButton.addEventListener('click', sendMessage);

  return {
    addMessage,
    sendMessage
  };
})();

// 외부에서 메시지 추가 예
chatApp.addMessage('Welcome to the Chat!');
