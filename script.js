$(document).ready(function () {
    $('#loginForm').on('submit', function (event) {
        event.preventDefault();

        var user = $('#username').val();
        var pass = $('#password').val();

        if (user && pass) {
            alert("Hello " + user + "! Login Successful.");
        } else {
            alert("Please enter both username and password.");
        }
    });
});
