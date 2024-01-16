function save() {
  // Get input values
  var tituloValue = document.getElementById("titulo").value;
  var subtituloValue = document.getElementById("subtitulo").value;
  var descripcionValue = document.getElementById("descripcion").value;

  // Set values to specified element IDs
  document.getElementById("mainTitulo").innerText = tituloValue;
  document.getElementById("mainSubtitulo").innerText = subtituloValue;
  document.getElementById("mainDescripcion").innerText = descripcionValue;
}

function copyToClipboard(elementId) {
   // Get the element with the specified ID
   var element = document.getElementById(elementId);

   // Create a textarea element to hold the inner HTML
   var textarea = document.createElement('textarea');
   textarea.value = element.innerHTML;

   // Append the textarea to the body
   document.body.appendChild(textarea);

   // Select the textarea content
   textarea.select();

   // Execute the "copy" command
   document.execCommand('copy');

   // Remove the temporary textarea
   document.body.removeChild(textarea);

   // Provide user feedback (optional)
   alert('Inner HTML copied to clipboard!');
}