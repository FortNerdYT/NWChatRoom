const socket = new WebSocket(`wss://${window.location.host}`);

const messages = document.getElementById('messages');
const messageInput = document.getElementById('messageInput');

// Handle incoming messages
socket.addEventListener('message', (event) => {
  const message = document.createElement('div');
  message.classList.add('message');
  message.textContent = event.data;
  messages.appendChild(message);
  messages.scrollTop = messages.scrollHeight;
});

// Send message on button click or Enter key
function sendMessage() {
  const msg = messageInput.value.trim();
  if (msg) {
    socket.send(msg);
    messageInput.value = '';
  }
}

messageInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});