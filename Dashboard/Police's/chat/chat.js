document.addEventListener('DOMContentLoaded', () => {
    const socket = io();

    const messageList = document.getElementById('message-list');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');

    // Function to add a message to the chat window
    function addMessage(message) {
        const li = document.createElement('li');
        li.textContent = message;
        messageList.appendChild(li);
        messageList.scrollTop = messageList.scrollHeight; // Scroll to bottom
    }

    // Event listener for send button click
    sendButton.addEventListener('click', () => {
        const message = messageInput.value.trim();
        if (message) {
            socket.emit('chatMessage', message); // Send message to server
            messageInput.value = ''; // Clear input field
        }
    });

    // Event listener for Enter key press in input field
    messageInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            sendButton.click(); // Simulate button click when Enter is pressed
        }
    });

    // Event listener for receiving messages from server
    socket.on('chatMessage', (message) => {
        addMessage(message);
    });
});
