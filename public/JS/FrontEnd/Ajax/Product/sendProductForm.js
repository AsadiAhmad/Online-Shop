$(document).ready(function() {
    $('#productForm').submit(function(event) {
        event.preventDefault();

        var formData = new FormData(this); // Create a FormData object from the form

        // Fetch the stored token from localStorage and set in the header
        var token = localStorage.getItem('token');

        $.ajax({
            url: '/api/Product/addProduct',
            type: 'POST',
            data: formData,
            processData: false, // Important: set to false to prevent jQuery from converting the FormData into a string
            contentType: false, // Important: set to false to let the browser set the correct content type
            headers: {
                "Authorization": "Bearer " + token // Include the token in the Authorization header
            },
            success: function(response) {
                console.log('Product added successfully:', response);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.error('Error adding product:', textStatus, errorThrown);
            }
        });
    });
});
