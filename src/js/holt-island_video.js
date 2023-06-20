document.addEventListener('DOMContentLoaded', function() {
    // Obtenemos la imagen en miniatura y su contenedor
    var thumbnail = document.querySelector('.thumbnail');
    var thumbnailContainer = thumbnail.parentElement;

    // Agregamos un evento de clic a la imagen en miniatura
    thumbnailContainer.addEventListener('click', function() {
    // Creamos un nuevo elemento iframe y configuramos sus atributos
    var iframe = document.createElement('iframe');
    iframe.src = "https://www.youtube.com/embed/bURCbzLaXMU";
    iframe.width = "560";
    iframe.height = "315";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;

    // Reemplazamos el contenedor de la imagen en miniatura con el iframe
    thumbnailContainer.innerHTML = '';
    thumbnailContainer.appendChild(iframe);
    });
});