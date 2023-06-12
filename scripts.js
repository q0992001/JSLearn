document.addEventListener('DOMContentLoaded', function() {
    var messageInput = document.getElementById('message-input');
    var sendButton = document.getElementById('send-button');
    var chatMessages = document.getElementById('chat-messages');
  
    sendButton.addEventListener('click', function() {
      var message = messageInput.value;
      if (message.trim() !== '') {
        displayMessage('You', message);
        messageInput.value = '';
      }
    });
  
    function displayMessage(sender, message) {
      var messageElement = document.createElement('div');
      messageElement.innerHTML = '<strong>' + sender + ':</strong> ' + message;
      chatMessages.appendChild(messageElement);
    }
  });
  