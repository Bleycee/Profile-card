document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form elements
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");
  const successMessage = document.getElementById("success-message");

  // Get error elements 
  const errorName = document.getElementById("test-contact-error-name");
  const errorEmail = document.getElementById("test-contact-error-email");
  const errorSubject = document.getElementById("test-contact-error-subject");
  const errorMessage = document.getElementById("test-contact-error-message");

  // Reset error messages
  errorName.textContent = "";
  errorEmail.textContent = "";
  errorSubject.textContent = "";
  errorMessage.textContent = "";
  successMessage.hidden = true;

  let isValid = true;

  // Validate Name
  if (name.value.trim() === "") {
    errorName.textContent = "Full name is required.";
    isValid = false;
  }

  // Validate Email
  const emailPattern = /^[^\s@]+@[^\s@]+\.com$/i;
  if (email.value.trim() === "") {
    errorEmail.textContent = "Email is required.";
    isValid = false;
  } else if (!emailPattern.test(email.value.trim())) {
    errorEmail.textContent = "Please enter a valid email (e.g. name@example.com).";
    isValid = false;
  }

  // Validate Subject
  if (subject.value.trim() === "") {
    errorSubject.textContent = "Subject is required.";
    isValid = false;
  }

  // Validate Message
  if (message.value.trim() === "") {
    errorMessage.textContent = "Message is required.";
    isValid = false;
  } else if (message.value.trim().length < 10) {
    errorMessage.textContent = "Message must be at least 10 characters long.";
    isValid = false;
  }

  // Show success message
  if (isValid) {
    successMessage.hidden = false;
    document.getElementById("contactForm").reset();
  }
});
