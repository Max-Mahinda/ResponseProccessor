        function signIn() {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            fetch('http://localhost:3000/api/sign_in', {  // <-- Update the sign-in API link
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            })
            .then(response => {
                if (response.ok) {
                    document.getElementById('login-container').style.display = 'none';
                    document.getElementById('message-container').style.display = 'block';
                    fetchMessages(); // Updated to fetch all messages
                } else {
                    alert('Sign in failed');
                }
            })
            .catch(error => console.error('Error:', error));
        }

        function fetchMessages() {  // Updated function to fetch all messages
            fetch('http://localhost:3000/api/messages')
                .then(response => response.json())
                .then(data => {
                    const messages = data.map(message => `<p>${message.content}</p>`).join('');
                    document.getElementById('message-content').innerHTML = messages;
                })
                .catch(error => console.error('Error:', error));
        }

        function sendReply() {
            const messageId = 1; // Example: Reply to message with ID 1
            const replyContent = document.getElementById('reply-content').value;

            fetch(`http://localhost:3000/api/messages/${messageId}/reply`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Include authentication headers if needed
                },
                body: JSON.stringify({ content: replyContent })
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert('Reply sent successfully');
            })
            .catch(error => console.error('Error:', error));
        }

        // Example usage
        window.onload = () => {
            // Call the function to fetch messages when the window loads
            fetchMessages();
        };        function signIn() {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            fetch('/api/sign_in', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            })
            .then(response => {
                if (response.ok) {
                    document.getElementById('login-container').style.display = 'none';
                    document.getElementById('message-container').style.display = 'block';
                    fetchMessage(1); // Example: Fetch message with ID 1
                } else {
                    alert('Sign in failed');
                }
            })
            .catch(error => console.error('Error:', error));
        }

        function fetchMessage(messageId) {
            fetch(`http://localhost:3000/api/messages/${messageId}`)
                .then(response => response.json())
                .then(data => {
                    document.getElementById('message-content').innerText = data.content;
                })
                .catch(error => console.error('Error:', error));
        }

        function sendReply() {
            const messageId = 1; // Example: Reply to message with ID 1
            const replyContent = document.getElementById('reply-content').value;

            fetch(`http://localhost:3000/api/messages/${messageId}/reply`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Include authentication headers if needed
                },
                body: JSON.stringify({ content: replyContent })
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert('Reply sent successfully');
            })
            .catch(error => console.error('Error:', error));
        }        function signIn() {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            fetch('/api/sign_in', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            })
            .then(response => {
                if (response.ok) {
                    document.getElementById('login-container').style.display = 'none';
                    document.getElementById('message-container').style.display = 'block';
                    fetchMessage(1); // Example: Fetch message with ID 1
                } else {
                    alert('Sign in failed');
                }
            })
            .catch(error => console.error('Error:', error));
        }

        function fetchMessage(messageId) {
            fetch(`/api/messages/${messageId}`)
                .then(response => response.json())
                .then(data => {
                    document.getElementById('message-content').innerText = data.content;
                })
                .catch(error => console.error('Error:', error));
        }

        function sendReply() {
            const messageId = 1; // Example: Reply to message with ID 1
            const replyContent = document.getElementById('reply-content').value;

            fetch(`/api/messages/${messageId}/reply`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Include authentication headers if needed
                },
                body: JSON.stringify({ content: replyContent })
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert('Reply sent successfully');
            })
            .catch(error => console.error('Error:', error));
        }// Function to fetch messages
function fetchMessages() {
    fetch('http://localhost:3000/api/messages')
        .then(response => response.json())
        .then(data => {
            // Assuming data is an array of messages, update the UI accordingly
            const messages = data.map(message => `<p>${message.content}</p>`).join('');
            document.getElementById('message-content').innerHTML = messages;
        })
        .catch(error => console.error('Error:', error));
}

// Function to send a reply
function sendReply() {
    // You need to set the message ID based on your UI or logic
    const messageId = 1;
    const replyContent = document.getElementById('reply-content').value;

    fetch(`http://localhost:3000/api/messages/${messageId}/reply`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // Add authentication headers if necessary
        },
        body: JSON.stringify({ content: replyContent })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Reply sent successfully');
    })
    .catch(error => console.error('Error:', error));
}

// Example usage
window.onload = () => {
    // Call the function to fetch messages when the window loads
    fetchMessages();
function signIn() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('/api/sign_in', {  // Replace with your actual sign-in endpoint
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => {
        if (response.ok) {
            document.getElementById('login-container').style.display = 'none';
            document.getElementById('message-container').style.display = 'block';
            // Optionally, fetch the first message or set up the environment
        } else {
            alert('Sign in failed');
        }
    })
    .catch(error => console.error('Error:', error));
}

};
