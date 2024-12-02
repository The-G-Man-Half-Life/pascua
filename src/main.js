// Array vacío donde agregarás las rutas de las imágenes de los ElePHPants
let elephpants = [];

// Referencia a los elementos del DOM
const loadImagesBtn = document.getElementById('loadImagesBtn');
const elephpantContainer = document.getElementById('elephpantContainer');

// Función para agregar imágenes al array
function addElephpantsToArray() {

for (let index = 1; index <= 80; index++) {
    if (index == 3 || index ==4 || index == 9) {
        continue
    }
    elephpants.push(`../public/imgs/${index}.jpg`)
    
}}

// Función para mostrar las imágenes
function displayElephpants() {
    // Limpiar el contenedor antes de agregar las imágenes
    elephpantContainer.innerHTML = '';

    // Recorrer el array y agregar las imágenes al contenedor
    elephpants.forEach(imageUrl => {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = 'ElePHPant';
        elephpantContainer.appendChild(img);
    });
}

// Evento para cargar las imágenes al hacer clic en el botón
loadImagesBtn.addEventListener('click', () => {
    // Agregar las imágenes al array (puedes hacerlo una sola vez o de manera dinámica)
    addElephpantsToArray();
    
    // Mostrar las imágenes
    displayElephpants();
});
