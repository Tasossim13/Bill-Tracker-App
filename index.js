window.onload = function() {
  document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    
    fetch('http://localhost:3000/save-name', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
      email: document.getElementById('email').value,
      password: document.getElementById('psw-repeat').value
      })
    })
    .then(response => response.json())
    .then(data => console.log('Success:', data))
    .catch((error) => console.error('Error:', error));
  });
};

