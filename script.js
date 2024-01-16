document.getElementById('saveButton').setAttribute('data-bs-dismiss', 'modal');

function save() {  // Get input values
  var tituloValue = document.getElementById("titulo").value;
  var subtituloValue = document.getElementById("subtitulo").value;
  var descripcionValue = document.getElementById("descripcion").value;
  // Set values to specified element IDs
  document.getElementById("mainTitulo").innerText = tituloValue;
  document.getElementById("mainSubtitulo").innerText = subtituloValue;
  document.getElementById("mainDescripcion").innerText = descripcionValue;
  
}

function reset() {
  document.getElementById("titulo").value = "";
  document.getElementById("subtitulo").value = "";
  document.getElementById("descripcion").value = "";  
  alert("resetewd")
}

function copyToClipboard(elementId) {
   var element = document.getElementById(elementId);
   var textarea = document.createElement('textarea');
   textarea.value = element.innerHTML;
   document.body.appendChild(textarea);
   textarea.select();
   document.execCommand('copy');
   document.body.removeChild(textarea);
   alert('HTML copiado al portapapeles!');
}

function downloadHtml(elementId) {
  alert("⛔ under development ⛔")  
}