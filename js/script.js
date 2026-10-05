$("#contactForm").submit(function(event) {
    event.preventDefault();
    let name =
        $("#contactName").val().trim();
    let email =
        $("#contactEmail").val().trim();
    let message =
        $("#message").val().trim();
    let consent =
        $("#consent").is(":checked");

    $("#contactError")
        .removeClass("success")
        .text("");

    if (name === "") {
        $("#contactError")
            .text("Please enter your name.");
        return false;
    }
    if (email === "") {
        $("#contactError")
            .text("Please enter your email.");
        return false;
    }

    let emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        $("#contactError")
            .text("Please enter a valid email address.");
        return false;
    }
    if (message === "") {
        $("#contactError")
            .text("Please enter your message.");
        return false;
    }
    if (!consent) {
        $("#contactError")
            .text(
                "Please provide consent before submitting the form."
            );
        return false;
    }

    $("#contactError")
        .addClass("success")
        .text(
            "Your message has been submitted successfully!"
        );
    $("#contactForm")[0].reset();
});

/* BOOKING VALIDATION */
$("#bookingForm").submit(function(event) {
    event.preventDefault();
    let name =
        $("#name").val().trim();
    let phone =
        $("#phone").val().trim();
    let email =
        $("#email").val().trim();
    let date =
        $("#travelDate").val();
    let participants =
        $("#participants").val();
    let tourPackage =
        $("#tourPackage").val();
    let consent =
        $("#bookingConsent").is(":checked");

    $("#bookingError")
        .removeClass("success")
        .text("");

    if (name === "") {
        $("#bookingError")
            .text("Please enter your name.");
        return false;
    }
    if (phone === "") {
        $("#bookingError")
            .text("Please enter your phone number.");
        return false;
    }
    if (email === "") {
        $("#bookingError")
            .text("Please enter your email.");
        return false;
    }

    let emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        $("#bookingError")
            .text("Please enter a valid email address.");
        return false;
    }
    if (date === "") {
        $("#bookingError")
            .text("Please select your travel date.");
        return false;
    }
    if (participants === "" ||
        participants < 1) {
        $("#bookingError")
            .text(
                "Please enter the number of participants."
            );
        return false;
    }
    if (tourPackage === "") {
        $("#bookingError")
            .text(
                "Please select a tour package."
            );
        return false;
    }
    if (!consent) {
        $("#bookingError")
            .text(
                "Please agree to the privacy and consent checkbox."
            );
        return false;
    }


    $("#bookingError")
        .addClass("success")
        .text(
            "Booking submitted successfully!"
        );

    $("#bookingForm")[0].reset();
});