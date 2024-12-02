// Array vacío donde agregarás las rutas de las imágenes de los ElePHPants
let elephpants = [];

// Referencia a los elementos del DOM
const loadImagesBtn = document.getElementById('loadImagesBtn');
const elephpantContainer = document.getElementById('elephpantContainer');

// Función para agregar imágenes al array
function addElephpantsToArray() {

    elephpants.push('../public/imgs/59-docler.jpg');
    elephpants.push('../public/imgs/60-inphpinity.jpg');
    elephpants.push('../public/imgs/61-groundy.jpg');
    elephpants.push('../public/imgs/63-kellerkinder.jpg');
    elephpants.push('../public/imgs/64-phpartner.jpg');
    elephpants.push('../public/imgs/65-mollie.jpg');
    elephpants.push('../public/imgs/66-karafun.jpg');
    elephpants.push('../public/imgs/67-thelia.jpg');
    elephpants.push('../public/imgs/68-archie.jpg');
    elephpants.push('../public/imgs/69-dutchie.jpg');
    elephpants.push('../public/imgs/70-alex.jpg');
    elephpants.push('../public/imgs/71-notive.jpg');
    elephpants.push('../public/imgs/72-yomeva.jpg');
    elephpants.push('../public/imgs/73-cmgt.jpg');
    elephpants.push('../public/imgs/74-aubrey.jpg');
    elephpants.push('../public/imgs/75-phpclasses-pink.jpg');
    elephpants.push('../public/imgs/76-flexy.jpg');
    elephpants.push('../public/imgs/77-phpstan.jpg');
    elephpants.push('../public/imgs/78-eddie.jpg');
    elephpants.push('../public/imgs/79-ploi.jpg');
    elephpants.push('../public/imgs/81-savvy.jpg');
}

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
