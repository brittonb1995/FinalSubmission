
function resetForm(){
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone-number").value = "";
    document.getElementById("additional").value = "";
    document.getElementById("M").checked = false;
    document.getElementById("T").checked = false;
    document.getElementById("W").checked = false;
    document.getElementById("Th").checked = false;
    document.getElementById("F").checked = false;
    $("#name").css("border-color","");
    $("#email").css("border-color","");
    $("#phone-number").css("border-color","");
}



function validateItems(){
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone-number");

    var items = [name,email,phone];

    if($(name).val() == "" || $(email).val() == "" || $(phone).val() == ""){
        alert("Invalid Submission! Please fill out the required fields");

        for(var i=0;i<items.length;i++){

            if($(items[i]).val() == ""){
                $(items[i]).css("border-color","red");
            }
        }

    }
    else{
        alert("Successful Submission! Thank you for contacting us.");
        resetForm();
    }

    return false;
}