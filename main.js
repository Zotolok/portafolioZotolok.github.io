const contenderLista = document.getElementById('carruselListaContenedorID');
const botonPrevio = document.getElementById('botonPrevID');
const carrusel = document.getElementById('carruselListaID');
const botonSiguiente = document.getElementById('botonSigID');

const proyecto = document.querySelectorAll('.proyecto');

const anchoProyecto = proyecto[0].offsetWidth;

botonPrevio.onclick = () => Mover(1);
botonSiguiente.onclick = () => Mover(2);

function Mover(valor){
    const anchoCarrusel = carrusel.offsetWidth;
    const anchoContenedorLista = contenderLista.offsetWidth;

    carrusel.style.left == "" ? leftPosition = carrusel.style.left = 0 : leftPosition = parseFloat(carrusel.style.left.slice(0, -2) * -1); // Primero, el condicional comprueba si la propiedad 'left' del elemento 'track' está vacía. Si es así, entonces se ejecutará lo que está después del signo de interrogación: Establecer en 0 a leftPosition a la vez que asignamos el 0 a la propiedad 'left' del elemento 'track'. El else es lo que está después de los dos puntos (:): Extraer el valor número de la propiedad 'left', eliminar la unidad de medida 'px' con el '.slice(0, -2)' y convertirlo en un número flotante utilizando 'parseFloat()'. Finalmente, esto se multiplica por -1 y se lo asigna a 'leftPosition' 

    let posicionCubierta = 0;

    if(leftPosition < (anchoCarrusel - anchoContenedorLista) && valor == 2){
        carrusel.style.left = `${-1 * (leftPosition + anchoProyecto)}px`;

        posicionCubierta = leftPosition + anchoProyecto;

        console.log(`Espacio recorrido: ${(posicionCubierta)}px`);
    } else if(leftPosition > 0 && valor == 1){
        carrusel.style.left = `${-1 * (leftPosition - anchoProyecto)}px`;

        posicionCubierta = leftPosition - anchoProyecto;

        console.log(`Espacio recorrido: ${(posicionCubierta)}px`);

    }
}

let botonLocation = document.getElementById('botonLocation');
let botonLocation2 = document.getElementById('botonLocation2');
let fondoAPI = document.getElementById('mapaFondo');


botonLocation.addEventListener('click', function(evento){
  var coordenadas = {lat: 19.3393584 ,lng: -99.1936857};
  var mapa = new google.maps.Map(document.getElementById('mapaFondo'),{
    zoom: 10,
    center: coordenadas
  });
  var marcador = new google.maps.Marker({
    position: coordenadas,
    map: mapa
  });

  fondoAPI.classList.toggle('active');
});

botonLocation2.addEventListener('click', function(evento){
  var coordenadas = {lat: 19.3393584 ,lng: -99.1936857};
  var mapa = new google.maps.Map(document.getElementById('mapaFondo'),{
    zoom: 10,
    center: coordenadas
  });
  var marcador = new google.maps.Marker({
    position: coordenadas,
    map: mapa
  });

  fondoAPI.classList.toggle('active');
});