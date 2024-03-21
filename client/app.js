const socket = new WebSocket('ws://localhost:8080');

// Connection opened
socket.onopen = (event) => {
    console.log('Connection open:', event);
};

// Listen for messages
socket.onmessage = ({ data }) => {
    console.log('Received:', data);
};

// Listen for possible errors
socket.onerror = (event) => {
    console.error('WebSocket error:', event);
};

// Listen for when the connection is closed
socket.onclose = (event) => {
    console.log('WebSocket closed:', event);
};

// Send a message
document.querySelector('#form').onsubmit = (event) => {
    event.preventDefault();
    socket.send(document.querySelector('#input').value);
    document.querySelector('#input').value = '';
}
