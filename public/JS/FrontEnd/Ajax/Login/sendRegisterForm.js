$(document).ready(function() {
    $('#signup-form').submit(function(event) {
        event.preventDefault();

        const formData = {
            username: $('#username-field').val(),
            password: $('#password-field').val(),
            password_r: $('#password-field-r').val()
        };

        $.ajax({
            url: '/api/Login/signup',
            type: 'POST',
            data: formData,
            success: function(response) {
                console.log(response);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.error(textStatus, errorThrown);
            }
        });
    });
});
