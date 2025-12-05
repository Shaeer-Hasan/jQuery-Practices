$(document).ready(function () {
  // 1. Target the form using its ID and listen for the 'submit' event
  $("#productForm").on("submit", function (event) {
    // Stop the browser from refreshing the page
    event.preventDefault();

    const form = $(this);
    const statusDiv = $("#statusMessage");

    // Hide and clear previous status messages
    statusDiv
      .removeClass(
        "bg-green-100 border-green-400 text-green-700 bg-red-100 border-red-400 text-red-700"
      )
      .addClass("hidden")
      .text("");

    // Get the form data as an array of objects:
    // [{ name: "title", value: "..." }, { name: "price", value: "..." }, ...]
    const formArray = form.serializeArray();

    // 2. Convert the array data into a simple JSON object
    const productData = {};
    $.each(formArray, function (index, field) {
      // For the 'price' field, convert the string value to a number
      if (field.name === "price") {
        productData[field.name] = parseFloat(field.value);
      } else {
        // For all other fields (title, description, etc.), use the string value
        productData[field.name] = field.value;
      }
    });

    // 3. Perform the AJAX call
    $.ajax({
      url: "https://fakestoreapi.com/products",
      method: "POST",
      // Send the JSON object, which jQuery automatically stringifies
      data: JSON.stringify(productData),
      contentType: "application/json",

      // Handle success (runs if the API sends a successful response)
      success: function (response) {
        console.log("Product added successfully!", response);

        // Show success message and reset form
        statusDiv
          .text("Product submitted successfully! ID: " + response.id)
          .addClass("bg-green-100 border-green-400 text-green-700 border")
          .removeClass("hidden");
        form[0].reset(); // Clear the form
      },

      // Handle error (runs if the request fails)
      error: function (xhr, status, error) {
        console.error("Error submitting product:", error);

        // Show error message
        statusDiv
          .text("Submission failed. Check console for details.")
          .addClass("bg-red-100 border-red-400 text-red-700 border")
          .removeClass("hidden");
      },
    });
  });
});
