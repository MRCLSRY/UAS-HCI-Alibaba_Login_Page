// Marcelius Surya Wijaya - 2502001164 
var check = 0;
var form = document.getElementById("form");
var textMail = document.getElementById("alertMail");
var textpass = document.getElementById("alertPass");
var textConfirm = document.getElementById("alertCheck");

// Fungsi Validasi Email
function emails(){
    var email = document.getElementById("email").value;
    var cekMail = document.getElementById("email");
    var rules = /^[^ ]+@[^ ]+\.[^ ]/;
    // Jika Format Email Betul
    if (email.match(rules)){
        document.getElementById("box").style.height = "32em";
        textMail.style.color = "#1B970C";
        cekMail.style.border = "1px solid #1B970C"
        textMail.style.fontSize = "13px";
        textMail.innerHTML = "Email is valid"
    }

    else{
        // Jika Email Empty
        if (email == ""){
            textMail.innerHTML = "Please enter your email."
        }
        // Jika Email Tidak Empty
        else{
            textMail.innerHTML = "Email is invalid."
        }
        document.getElementById("box").style.height = "32em";
        textMail.style.color = "#e85836"
        cekMail.style.border = "1px solid #e85836"
        textMail.style.fontSize = "13px";
    }
}

// Fungsi Validasi Password
function passwordss(){
    var pasword = document.getElementById("passwords").value;
    var cekpass = document.getElementById("passwords");
    var passw =  /^[^ ]/;

    // Jika Password Betul
    if (pasword.match(passw)){
        textpass.innerHTML = "Password is valid!"
        document.getElementById("box").style.height = "35em";
        textpass.style.color = "#1B970C";
        cekpass.style.border = "1px solid #1B970C";
        textpass.style.fontSize = "13px";
    } 

    else{
        // Jika Password Empty
        if (pasword == ""){
            textpass.innerHTML = "Please enter your password."
        }
        // Jika Password Tidak Empty
        else{
            textpass.innerHTML = "Password is invalid!"
        }
        textpass.style.color = "#e85836";
        cekpass.style.border = "1px solid #e85836"
        textpass.style.fontSize = "13px";
    }
}

// Fungsi Validasi Password
function passwordsConfirm(){
    var checkPass = document.getElementById("passwords").value;
    var confirmPassword = document.getElementById("confrimPass").value;
    var cekConfirmPass = document.getElementById("confrimPass");

    if (confirmPassword == checkPass && confirmPassword != ""){
        textConfirm.innerHTML = "Password is valid!"
        textConfirm.style.color = "#1B970C";
        cekConfirmPass.style.border = "1px solid #1B970C";
        textConfirm.style.fontSize = "13px";
    }

    else{
        // Jika Password Empty
        if (confirmPassword == ""){
            textConfirm.innerHTML = "Please enter your password."
        }
        // Jika Password Tidak Empty
        else{
            textConfirm.innerHTML = "Password is invalid!"
        }
        textConfirm.style.color = "#e85836"
        cekConfirmPass.style.border = "1px solid #e85836";
        textConfirm.style.fontSize = "13px";
    }
}

// Tombol Confirm
function checkAll() {
    check++;
    if (check % 2 == 0) {
        disableBtn();
    } 
    else {
        enableBtn();
        emails();
        passwordss();
        passwordsConfirm();       
    }
}

// Mengaktifkan Button
function enableBtn() {
    document.getElementById("confirmButton").disabled = false;
    document.getElementById("confirmButton").classList.add('active');
}

// Mengnonaktifkan Button
function disableBtn() {
    document.getElementById("confirmButton").disabled = true;
    document.getElementById("confirmButton").classList.remove('active');
}