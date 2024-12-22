//Registration Validation

var unameValid = false;
var emailValid = false;
var phoneValid = false;
var passwordValid = false;
var cpasswordValid = false;

$(document).ready(
  $("#username").keyup(() => {
    const username = $("#username").val();
    if (username == "") {
      $("#nameError").html("Username required!").css("color", "red");
      unameValid = false;
    } else {
      if (username.length < 3 || username.length > 20) {
        $("#nameError")
          .html("Username must be between 3 and 20 characters ")
          .css("color", "red");
        unameValid = false;
      } else {
        $("#nameError").html("");
        unameValid = true;
      }
    }
    toggleRegisterButton();
  }),
  $("#email").keyup(() => {
    const email = $("#email").val();
    if (email === "") {
      $("#emailError").html("Email required!").css("color", "red");
      emailValid = false;
    } else {
      if (email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        $("#emailError").html("");
        emailValid = true;
      } else {
        $("#emailError").html("Invalid Email Format!").css("color", "red");
        emailValid = false;
      }
    }
    toggleRegisterButton();
  }),
  $("#phoneno").keyup(() => {
    const phone = $("#phoneno").val();
    if (phone === "") {
      $("#phoneError").html("Phone number required!").css("color", "red");
      phoneValid = false;
    } else {
      if (phone.length === 10) {
        $("#phoneError").html("");
        phoneValid = true;
      } else {
        $("#phoneError")
          .html("Phone number must be of 10 digits!")
          .css("color", "red");
        phoneValid = false;
      }
    }
    toggleRegisterButton();
  }),
  $("#password").keyup(() => {
    const password = $("#password").val();
    if (password.match(/[A-Z]/)) {
      $("#capitalError").removeClass("invalid").addClass("valid");
      passwordValid = true;
    } else {
      $("#capitalError").removeClass("valid").addClass("invalid");
      passwordValid = false;
    }
    if (password.match(/[0-9]/)) {
      $("#numberError").removeClass("invalid").addClass("valid");
      passwordValid = true;
    } else {
      $("#numberError").removeClass("valid").addClass("invalid");
      passwordValid = false;
    }
    if (password.match(/[!@#$%^&*(),.?":{}|]/)) {
      $("#specialError").removeClass("invalid").addClass("valid");
      passwordValid = true;
    } else {
      $("#specialError").removeClass("valid").addClass("invalid");
      passwordValid = false;
    }
    if (password.length > 8) {
      $("#lengthError").removeClass("invalid").addClass("valid");
      passwordValid = true;
    } else {
      $("#lengthError").removeClass("valid").addClass("invalid");
      passwordValid = false;
    }
    $("#confirmPassword").keyup(() => {
      const cpassword = $("#confirmPassword").val();
      if (cpassword === password) {
        $("#cPasswordError").html("");
        cpasswordValid = true;
      } else {
        $("#cPasswordError")
          .html("Password doesn't match.")
          .css("color", "red");
        cpasswordValid = false;
      }
      toggleRegisterButton();
    });
    toggleRegisterButton();
  })
);

function toggleRegisterButton() {
  if (
    unameValid &&
    phoneValid &&
    emailValid &&
    passwordValid &&
    cpasswordValid
  ) {
    $("#registerBtn").removeAttr("disabled");
  } else {
    $("#registerBtn").attr("disabled", true);
  }
}

function validateRegisterForm() {
  if (
    unameValid &&
    phoneValid &&
    emailValid &&
    passwordValid &&
    cpasswordValid
  ) {
    return true;
  } else {
    return false;
  }
}

//login Validation

let loginUsernameValid = false;
let loginPasswordValid = false;

$("#loginError").hide();

$(document).ready(
  $("#loginEmail").keyup(() => {
    const username = $("#loginEmail").val();
    if (username === "Ayush") {
      loginUsernameValid = true;
    } else {
      loginUsernameValid = false;
    }
  }),
  $("#loginPassword").keyup(() => {
    const password = $("#loginPassword").val();
    if (password === "Ayush@123") {
      loginPasswordValid = true;
    } else {
      loginPasswordValid = false;
    }
  })
);

function validateLogin() {
  if (loginUsernameValid && loginPasswordValid) {
    alert("Logged IN");
    return true;
  } else {
    $("#loginError").show();
    return false;
  }
}
