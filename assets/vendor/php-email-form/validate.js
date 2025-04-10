document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var form = this;
    var formData = new FormData(form);
    var sentMessage = form.querySelector(".sent-message");
    var errorMessage = form.querySelector(".error-message");
    var loading = form.querySelector(".loading");

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          // Reset the form
          form.reset();
          // Show success message
          sentMessage.style.display = "block";
          // Hide error message if previously shown
          errorMessage.style.display = "none";
        } else {
          // Handle non-successful response
          throw new Error("An error occurred. Please try again later.");
        }
      })
      .catch((error) => {
        // Show error message
        errorMessage.innerHTML = error.message;
        errorMessage.style.display = "block";
      })
      .finally(() => {
        // Hide loading indicator
        loading.style.display = "none";
      });

    // Display loading indicator
    loading.style.display = "block";
  });
