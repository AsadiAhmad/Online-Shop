$(document).ready(function() {
    $('#productForm').submit(function(event) {
        event.preventDefault();

        const formData = new FormData(this);

        const token = localStorage.getItem('token');

        $.ajax({
            url: '/api/Product/addProduct',
            type: 'POST',
            data: formData,
            processData: false, // Important: set to false to prevent jQuery from converting the FormData into a string
            contentType: false, // Important: set to false to let the browser set the correct content type
            headers: {
                "Authorization": "Bearer " + token
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
