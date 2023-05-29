function showImages() {
  var imageContainers = document.getElementsByClassName('image-container');
  var currentIndex = 0;

  // Oculta todas las imágenes excepto la primera
  for (var i = 1; i < imageContainers.length; i++) {
    imageContainers[i].style.display = 'none';
  }

  setInterval(function() {
    // Oculta la imagen actual
    imageContainers[currentIndex].style.display = 'none';

    // Incrementa el índice para mostrar la siguiente imagen
    currentIndex = (currentIndex + 1) % imageContainers.length;

    // Muestra la siguiente imagen
    imageContainers[currentIndex].style.display = 'block';
  }, 2000);
}

showImages();