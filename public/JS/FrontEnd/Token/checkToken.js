document.addEventListener("DOMContentLoaded", function(event){
    const token = localStorage.getItem('token'); // Adjust this line based on how you store the token

    if (token) {
        document.getElementById('auth-buttons').style.display = 'none';
        document.getElementById('add-product-btn').style.display = 'block';
    }
});