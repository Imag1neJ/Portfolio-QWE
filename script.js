function sendMessage(){
    const name0 = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name0 || !email || !message) {
        alert('Please fill in all fields');
        return;
    }

    const text = `📨 New Message From Website:
    
👤 Name: ${name0}
📧 Email: ${email}
💬 Message: ${message}`;

    const encodedText = encodeURIComponent(text);

    const botToken = '8281437204:AAGfch2-Ke9lxKrLipuVClgl4wXGdOF3qZ8';
    const chatId = '6451995390';
    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodedText}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                alert('Message sent successfully!');
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('message').value = '';
            } else {
                alert('Error sending message: ' + (data.description || 'Unknown error'));
            }
        })
}