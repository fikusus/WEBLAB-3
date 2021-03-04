
let gender = "female";
function changeGender(value){
    gender = value;
    console.log(gender);
}

$('#registerbtn').click(function(event) {
    event.preventDefault();
    document.getElementById("reg-name-error").innerHTML = "";
    document.getElementById("reg-pass-error").innerHTML = "";
    document.getElementById("reg-email-error").innerHTML = "";
    console.log("Test");
    $.ajax({
        global: false,
        type: 'POST',
        url: "/register",
        dataType: 'json',
        data: {
            name:$("#reg-name").val(),
            email: $("#reg-email").val(),
            pass: $("#reg-pass").val(),
            gender: gender
        },
        success: function (result) {
            if(result.name != null){
                console.log("Error")
                document.getElementById("register-output").innerHTML = "You input: <br>"  + result.name + "<br>" + result.email + "<br>" + result.pass + "<br>" + result.gender;  
                //$("#register-error-msg").css("visibility", "visible")
            }else{
                if(result.name_error != null){
                    document.getElementById("reg-name-error").innerHTML = result.name_error;
                }
                if(result.pass_error != null){
                    document.getElementById("reg-pass-error").innerHTML = result.pass_error;
                }
                if(result.email_error != null){
                    document.getElementById("reg-email-error").innerHTML = result.email_error;
                }
            }
            console.log(result);
        },
        error: function (request, status, error) {
            serviceError();
        }
    });
});