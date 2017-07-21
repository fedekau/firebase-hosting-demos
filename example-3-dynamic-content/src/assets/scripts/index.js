function generateToken() {
    let email = document.getElementById('email').value;
    
    fetch(`https://example-3-dynamic-content.firebaseapp.com/token?email=${email}`)
    .then((response) => {
        return response.json();
    }).then((data) => {
        alert(`Your token is ${data.token}`);
    });
}