// function aboutScroll() {
//   const element = document.getElementById("about-page");
//   element.scrollIntoView({ behavior: "smooth" });
// }

// function homeScroll() {
//   const element = document.getElementById("home-page");
//   element.scrollIntoView({ behavior: "smooth" });
// }

// function contactScroll() {
//   const element = document.getElementById("contact-page");
//   element.scrollIntoView({ behavior: "smooth" });
// }

// Form Validation

const form = document.getElementByID("myForm");
const fname = document.getElementByID("fullname");
const email = document.getElementByID("email");
const message = document.getElementByID("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const fullnameValue = fname.value.trim();
  const emailValue = email.value.trim();
  const messageValue = message.value.trim();

  if (fullnameValue === "") {
    setError(fname, "Name cannot be blank");
  } else setSuccess(fullname);

  if (emailValue === "") {
    setError(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setError(email, "Not a valid email");
  } else {
    setSuccess(email);
  }

  if (messageValue === "") {
    setError(message, "Message cannot be blank");
  } else {
    setSuccess(message);
  }
}

function setError(input, message) {
  const contactFormField = input.parentElement;
  const span = contactFormField.querySelector("span");
  contactFormField.className = "contact-form-field error";
  span.innerText = message;
}

function setSuccess(input) {
  const contactFormField = input.parentElement;
  contactFormField.className = "contact-form-field success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
