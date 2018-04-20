$(document).ready(function() {
    // navn
    $("#name").change(function() {
        var name = $("#name");
        if (!name.val().includes(" ")) {
            this.setCustomValidity("Legg til fullt navn");
        }
        else {
            this.setCustomValidity("");
        }
    });
    //Brukernavn
    $("#username").change(function () {
        var username = $("#username");
        if (username.val().includes(" ")) {
            this.setCustomValidity("Ingen mellomrom i brukernavnet");
        }
        else {
            this.setCustomValidity("");
        }
    });
    //epost
    $("#email").change(function () {
        var email = $("#email");
        var re = /([A-Za-z0-9._+-]+@[A-Za-z0-9._+-]+\.[A-Za-z]+)/;
        if (!re.test(email.val())) {
            this.setCustomValidity("legg til gyldig epost")
        }
        else {
            this.setCustomValidity("");
        }
    });
    //registrering
    $("#my-form").submit(function () {
        alert("Your request was received (not really...)");
        return false;
    });

});

