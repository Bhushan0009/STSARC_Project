function showSignup() {
    document.getElementById('login-box').style.display = 'none';
    document.getElementById('signup-box').style.display = 'block';
}

function showLogin() {
    document.getElementById('signup-box').style.display = 'none';
    document.getElementById('login-box').style.display = 'block';
}

document.getElementById('signup-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    try {
        const response = await fetch('/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        const data = await response.json();
        const messageElement = document.getElementById('signup-message');
        
        if (response.ok) {
            messageElement.style.color = 'green';
            messageElement.textContent = data.message;
            setTimeout(showLogin, 1000);
        } else {
            messageElement.style.color = 'red';
            messageElement.textContent = data.error;
        }
    } catch (error) {
        document.getElementById('signup-message').textContent = 'Network error occurred';
    }
});

document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    
    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        const data = await response.json();
        const messageElement = document.getElementById('login-message');
        
        if (response.ok) {
            messageElement.style.color = 'green';
            messageElement.textContent = data.message;
        } else {
            messageElement.style.color = 'red';
            messageElement.textContent = data.error;
        }
    } catch (error) {
        document.getElementById('login-message').textContent = 'Network error occurred';
    }
});