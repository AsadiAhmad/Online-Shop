$(document).ready(function() {
    $('#comment-form').submit(function(event) {
        event.preventDefault();

        const formData = $(this).serialize();

        const token = localStorage.getItem('token');

        $.ajax({
            type: 'POST',
            url: '/api/Comment',
            data: formData,
            headers: {
                "Authorization": "Bearer " + token
            },
            success: function(response) {
                console.log(response);
                alert('Comment submitted successfully!');
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.error('Error submitting comment:', textStatus, errorThrown);
                alert('There was an error submitting your comment. Please try again.');
            }
        });
    });
});