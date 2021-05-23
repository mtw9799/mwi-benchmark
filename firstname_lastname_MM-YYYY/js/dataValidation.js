function validateForm(){

    // get the values of the input fields
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    // helper variables that will be flipped if certain criteria is met.
    var emailError = false;
    var subjectError = false;
    var messageError = false;

    // If email is null or doesn't include an "@", flip the helper variable and display the error.
    // Otherwise, hide the error and make sure the helper variable is null.
    if ((email == null || email == "") || (email.includes("@") == false)){
        document.getElementById("emailError").style.display = "block";
        emailError = true;
    }
    else if((email != null || email != "") && (email.includes("@") == true)){
        document.getElementById("emailError").style.display = "none";
        emailError = false;
    }

    // If subject is null, flip the helper variable and display the error.
    // Otherwise, hide the error and make sure the helper variable is null.
    if (subject == null || subject == ""){
        document.getElementById("subjectError").style.display = "block";
        subjectError = true;
    }
    else{
        document.getElementById("subjectError").style.display = "none";
        subjectError = false;
    }

    // If message is null, flip the helper variable and display the error.
    // Otherwise, hide the error and make sure the helper variable is null.
    if (message == null || message == ""){
        document.getElementById("messageError").style.display = "block";
        messageError = true;
    }
    else{
        document.getElementById("messageError").style.display = "none";
        messageError = false;
    }

    // If the helper variables are all null, initiate a POST request.
    // jQuery is used to help initiate the request.
    if(emailError == false && subjectError == false && messageError == false){
        // call the php file, pass in the value variables
        // On success or failure, write a message to the console and whatever the PHP returns.
        $.ajax({
            url: "app/formsubmission.php",
            type: "POST",
            data: {
                "email": email,
                "subject":subject,
                "message":message
            },
            success: function(data){
                console.log("SUCCESS");
                console.log(data);
            },
            error: function(data){
                console.log("FAILURE");
                console.log(data);
            }

        });
    }
    
}