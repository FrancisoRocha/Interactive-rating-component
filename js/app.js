// Selectores
const rating = document.querySelectorAll(".rating");
const send = document.querySelector(".btn");
const messages = document.querySelector(".messages");

let selectedRating = null;

// Función para actualizar mensajes en el HTML
function updateMessages() {
  const textUpdate = document.querySelector(".select__text");
  if (textUpdate) {
    textUpdate.innerHTML = `
        <p>You selected ${selectedRating} out of 5</p>
    `;
  }
}

function limpiarHTML() {}

// Función para manejar el click en los ratings
rating.forEach((ratings) => {
  ratings.addEventListener("click", () => {
    // Remover la clase activa de otros ratings
    rating.forEach((r) => r.classList.remove("active"));
    // Agregar clase activa al seleccionado
    ratings.classList.add("active");
    selectedRating = ratings.getAttribute("data-id");
  });
});

// Función para manejar el envío
send.addEventListener("click", () => {
  if (selectedRating) {
    messages.style.display = "block";
    rating.forEach((r) => r.classList.remove("active"));
    updateMessages();
  } else {
    alert("Please select a rating");
  }
});
