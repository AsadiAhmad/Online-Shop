document.addEventListener("DOMContentLoaded", function(event){
    const token = localStorage.getItem('token');

    if (token) {
        document.getElementById('signup-button').style.display = 'none';
        document.getElementById('login-button').style.display = 'none';
        document.getElementById('add-product-btn').style.display = 'block';
        document.getElementById('logout-button').style.display = 'block';
    }
    else {
        document.getElementById('signup-button').style.display = 'block';
        document.getElementById('login-button').style.display = 'block';
        document.getElementById('add-product-btn').style.display = 'none';
        document.getElementById('logout-button').style.display = 'none';
    }
});