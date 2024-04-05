$(document).ready(function() {
    $("#login-form").submit(function(event) {
        event.preventDefault();

        const userData = {
            username: $(".username-field").val(),
            password: $(".password-field").val()
        };

        $.ajax({
            url: "/api/Login/login",
            type: "PUT",
            data: userData,
            success: function(response) {
                localStorage.setItem('token', response.token);
                window.location.href = "/Home";
            },
            error: function(xhr) {
                const errorMessage = xhr.responseJSON ? xhr.responseJSON.message : 'An unknown error occurred.';
                console.log(errorMessage);
                alert(errorMessage);
            }
        });
    });
});