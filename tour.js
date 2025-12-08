// Función para crear un pop-up con MÚLTIPLES IMÁGENES (para el menú)
function hotspotMenuPaginas(hotSpotDiv, args) {
 
  
  // Crea el título
  let titulo = document.createElement('h2');
  titulo.innerHTML = args.titulo;
  hotSpotDiv.appendChild(titulo);
  
  // Crea el contenedor de las imágenes
  let paginasDiv = document.createElement('div');
  paginasDiv.classList.add('paginas-container');
  
  // Añade cada imagen de la lista
  args.paginas.forEach(urlImagen => {
    let img = document.createElement('img');
    img.src = urlImagen;
    paginasDiv.appendChild(img);
  });
  

  // CLICK PARA VER MENU MÁS GRANDE
  hotSpotDiv.appendChild(paginasDiv);
  // Añade el evento de clic para hacer zoom
  hotSpotDiv.addEventListener('click', (e) => {
    // Evita que el clic "atraviese" el pop-up y lo cierre
    e.stopPropagation(); 
    // Añade o quita la clase 'zoomed' para ampliar/encoger
    hotSpotDiv.classList.toggle('zoomed');
  });
} 

// INICIO DEL TOUR VIRTUAL
// 1. Guardamos tu configuración completa en una variable
const tourConfig = {
  default: {
    firstScene: "escena1",
    sceneFadeDuration: 1000,
    autoLoad: true,
    //  AUTOROTACION 
    // Velocidad y dirección (ej. -2 grados por segundo, gira a la izquierda)
    autoRotate: -1, 
    // Tiempo de inactividad para empezar (ej. 2 segundos)
    autoRotateInactivityDelay: 3000, 
    // QUITA LOS CONTROLES DEL VISOR
    showControls: false,
  },

  scenes: {
    escena1: {
      title: "",
      type: "equirectangular",
      panorama: "images/start.jpg",
      preview: "imagenes/MartinaLogo.png",
      pitch: 1, // Alinear la altura de la vista
      yaw: 10, // Centrar la vista inicial
      hfov: 115,
      minYaw: -85,  // Tope izquierdo (prueba con -90, -120, etc.)
      maxYaw: 95,
      minPitch: -100,  // Tope hacia ABAJO (evita mirar al suelo)

      hotSpots: [
        {
          // Personalizar hotspot
          pitch: -15, // Coordenadas de los hotspots en altura
          yaw: 5, // Coordenadas de los hotspots en horizontal
          type: "scene",
          sceneId: "escena2",
          cssClass: "flecha-personalizada",
        },
        // ==== PEGA ESTO AQUÍ (Este es el parche del tripié) ====
        {
          pitch: -90,     // -90 grados es mirar totalmente hacia abajo
          yaw: 0,
          type: "info",   // Tipo info para que sea estático
          cssClass: "nadir-hotspot" // Llama al estilo que pusimos en el HTML
        }
            // =======================================================
      ],
    },

    escena2: {
      title: "",
      type: "equirectangular",
      panorama: "images/prueba2da.jpg",
      pitch: 1, // Coordenadas de la hotspots en altura
      yaw: -10, // Coordenadas de la hotspots en horizontal
      hfov: 115,
      minYaw: -85,
      maxYaw: 125,
      hotSpots: [
      
//      {
//          // Personalizar hotspot de información
//          pitch: -15,  // Alinear la altura del hotspot
//          yaw: 50,   // Alinear la posición horizontal del hotspot
//          type: "info", // <-- TIPO INFO
//          text: "Este es un Cama de Playa. ¡Son muy cómodas e incluyen servicio de toallas!",
//          cssClass: "info-hotspot" // <-- Le damos un estilo diferente
//        },
        {
          // Personalizar flecha para avanzar
          pitch: -5, // Alinear la altura de la flecha
          yaw: -29, // Alinear la posición horizontal de la flecha
          type: "scene",
          text: "",
          sceneId: "escena3",
          cssClass: "flecha-personalizada",
        },
        {
          // Personalizar flecha para regresar
          pitch: -40,  // Alinear la altura de la flecha
          yaw: -29, // Alinear la posición horizontal de la flecha
          type: "scene",
          text: "",
          sceneId: "escena1",
          cssClass: "flecha-personalizada-regreso",
        },
      ],
    },

    escena3: {
      title: "",
      type: "equirectangular",
      panorama: "images/otra.jpg",
      pitch: -2, // Alinear la altura de la vista
      yaw: -30, // Centrar la vista inicial
      hfov: 115, // Zoom para computadora 💻
      hotSpots: [
        {
          // Personalizar flecha para avanzar
          pitch: -11, // Alinear la altura de la flecha
          yaw: 7, // Alinear la posición horizontal de la flecha
          type: "scene",
          text: "",
          sceneId: "escena4",
          cssClass: "flecha-personalizada",
        },
        {
          // Personalizar flecha para regresar
          pitch: -10, // Alinear la altura de la flecha
          yaw: 122, // Alinear la posición horizontal de la flecha
          type: "scene",
          text: "",
          sceneId: "escena2",
          cssClass: "flecha-personalizada",
        },
        {
          // Personalizar flecha para avanzar
          pitch: -10, // Alinear la altura de la flecha
          yaw: -120, // Alinear la posición horizontal de la flecha
          type: "scene",
          text: "",
          sceneId: "escenaextra",
          cssClass: "flecha-personalizada",
        },
      ],
    },
    escenaextra: {
      title: "",
      type: "equirectangular",
      panorama: "images/img4.jpg",
      pitch: -2, // Alinear la altura de la vista
      yaw: 10, // Centrar la vista inicial
      hfov: 115, // Zoom para computadora 💻
      hotSpots: [
        {
          // Personalizar flecha para avanzar
          pitch: -11, // Alinear la altura de la flecha
          yaw: -5, // Alinear la posición horizontal de la flecha
          type: "scene",
          text: "",
          sceneId: "escenaextra2",
          cssClass: "flecha-personalizada",
        },
        {
          // Personalizar flecha para regresar
          pitch: -18, // Alinear la altura de la flecha
          yaw: 145, // Alinear la posición horizontal de la flecha
          type: "scene",
          text: "",
          sceneId: "escena3",
          cssClass: "flecha-personalizada",
        },
      ],
    },
    escenaextra2: {
      title: "",
      type: "equirectangular",
      panorama: "images/img95.jpg",
      pitch: -2, // Alinear la altura de la vista
      yaw: 55, // Centrar la vista inicial
      hfov: 115, // Zoom para computadora 💻
      hotSpots: [
        {
          // Personalizar flecha para avanzar
          pitch: -10, // Alinear la altura de la flecha
          yaw: 90, // Alinear la posición horizontal de la flecha
          type: "scene",
          text: "",
          sceneId: "escena7",
          cssClass: "flecha-personalizada",
        },
        {
          // Personalizar flecha para regresar
          pitch: -11, // Alinear la altura de la flecha
          yaw: -185, // Alinear la posición horizontal de la flecha
          type: "scene",
          text: "",
          sceneId: "escenaextra",
          cssClass: "flecha-personalizada",
        },
      ],
    },

    escena4: {
      title: "",
      type: "equirectangular",
      panorama: "images/img6.jpg",
      pitch: -2, // Alinear la altura de la vista
      yaw: 10, // Centrar la vista inicial
      hfov: 115, // Zoom para computadora 💻
      hotSpots: [
        {
          // Personalizar flecha para avanzar
          pitch: -10, // Alinear la altura de la flecha
          yaw: 5, // Alinear la posición horizontal de la flecha
          type: "scene",
          text: "",
          sceneId: "escena5",
          cssClass: "flecha-personalizada",
        },
        {
          // Personalizar flecha para regresar
          pitch: -11, // Alinear la altura de la flecha
          yaw: -82, // Alinear la posición horizontal de la flecha
          type: "scene",
          text: "",
          sceneId: "escena3",
          cssClass: "flecha-personalizada",
        },
        {
          // Personalizar flecha para avanzar a la pool
          pitch: -20, // Alinear la altura de la flecha
          yaw: -167, // Alinear la posición horizontal de la flecha
          type: "scene",
          text: "",
          sceneId: "escenapool1",
          cssClass: "flecha-personalizada",
        },
        {
          // Personalizar flecha para avanzar
          pitch: -11, // Alinear la altura de la flecha
          yaw: 99, // Alinear la posición horizontal de la flecha
          type: "scene",
          text: "",
          sceneId: "escenarestaurant1",
          cssClass: "flecha-personalizada",
        },
      ],
    },

    

    escena5: {
      title: "",
      type: "equirectangular",
      panorama: "images/img7.jpg",
      pitch: -2, // Alinear la altura de la vista
      yaw: 173, // Centrar la vista inicial
      hfov: 115, // Zoom para computadora 💻
      hotSpots: [
        {
          // Personalizar flecha para avanzar
          pitch: -11, // Alinear la altura de la flecha
          yaw: -193, // Alinear la posición horizontal de la flecha
          type: "scene",
          text: "",
          sceneId: "escena6",
          cssClass: "flecha-personalizada",
        },
        {
          // Personalizar flecha para regresar
          pitch: -21, // Alinear la altura de la flecha
          yaw: -13, // Alinear la posición horizontal de la flecha
          type: "scene",
          text: "",
          sceneId: "escena4",
          cssClass: "flecha-personalizada",
        },
      ],
    },

    escena6: {
      title: "",
      type: "equirectangular",
      panorama: "images/img8.jpg",
      pitch: -4, // Alinear la altura de la vista
      yaw: 7, // Centrar la vista inicial
      hfov: 115, // Zoom para computadora 💻
      hotSpots: [
        {
          // Personalizar flecha para avanzar
          pitch: -16, // Alinear la altura de la flecha
          yaw: 1, // Alinear la posición horizontal de la flecha
          type: "scene",
          text: "",
          sceneId: "escena7",
          cssClass: "flecha-personalizada",
        },
        {
          // Personalizar flecha para regresar 
          pitch: -12, // Alinear la altura de la flecha
          yaw: 175, // Alinear la posición horizontal de la flecha
          type: "scene",
          text: "",
          sceneId: "escena5",
          cssClass: "flecha-personalizada",
        },

      ],
    },

    escena7: {
      title: "",
      type: "equirectangular",
      panorama: "images/img9.jpg",
      pitch: -2, // Alinear la altura de la vista
      yaw: 10, // Centrar la vista inicial
      hfov: 115, // Zoom para computadora 💻
      hotSpots: [
        {
          // Personalizar flecha para avanzar
          pitch: -14, // Alinear la altura de la flecha
          yaw: 4, // Alinear la posición horizontal de la flecha
          type: "scene",
          text: "",
          sceneId: "escena8",
          cssClass: "flecha-personalizada",
        },
        {
          // Personalizar flecha para regresar
          pitch: -17, // Alinear la altura de la flecha
          yaw: -185, // Alinear la posición horizontal de la flecha
          type: "scene",
          text: "",
          sceneId: "escena6",
          cssClass: "flecha-personalizada",
        },
        {
          // Personalizar flecha para regresar
          pitch: -10, // Alinear la altura de la flecha
          yaw: -90, // Alinear la posición horizontal de la flecha
          type: "scene",
          text: "",
          sceneId: "escenaextra2",
          cssClass: "flecha-personalizada",
        },
      ],
    },

    escena8: {
      title: "",
      type: "equirectangular",
      panorama: "images/imgfront.jpg",
      pitch: -2, // Alinear la altura de la vista
      yaw: 2, // Centrar la vista inicial
      hfov: 115, // Zoom para computadora 💻
      hotSpots: [
        {
          // Personalizar flecha para regresar
          pitch: -15, // Alinear la altura de la flecha
          yaw: -186, // Alinear la posición horizontal de la flecha
          type: "scene",
          text: "",
          sceneId: "escena7",
          cssClass: "flecha-personalizada",
        },
        {
          // Personalizar flecha para avanzar
          pitch: -19, // Alinear la altura de la flecha
          yaw: -2, // Alinear la posición horizontal de la flecha
          type: "scene",
          text: "",
          sceneId: "escena9",
          cssClass: "flecha-personalizada",
        },
      ],
    },

  

    escena9: {
      title: "",
      type: "equirectangular",
      panorama: "images/imgtl.jpg",
      pitch: -2, // Alinear la altura de la vista
      yaw: 5, // Centrar la vista inicial
      hfov: 115, // Zoom para computadora 💻
      hotSpots: [
        {
          // Personalizar flecha para avanzar
          pitch: -8, // Alinear la altura de la flecha
          yaw: 95, // Alinear la posición horizontal de la flecha
          type: "scene",
          text: "",
          sceneId: "escena10",
          cssClass: "flecha-personalizada",
        },
        {
          // Personalizar flecha para regresar
          pitch: -13, // Alinear la altura de la flecha
          yaw: -180, // Alinear la posición horizontal de la flecha
          type: "scene",
          text: "",
          sceneId: "escena8",
          cssClass: "flecha-personalizada",
        },
      ],
    },

    escena10: {
      title: "",
      type: "equirectangular",
      panorama: "images/imgtc.jpg",
      pitch: -2, // Alinear la altura de la vista
      yaw: -75, // Centrar la vista inicial
      hfov: 115, // Zoom para computadora 💻
      hotSpots: [
        {
          // Personalizar flecha para regresar
          pitch: -10, // Alinear la altura de la flecha
          yaw: -80, // Alinear la posición horizontal de la flecha
          type: "scene",
          text: "",
          sceneId: "escena9",
          cssClass: "flecha-personalizada",
        },
      ],
    },

// escenas de la pool

    escenapool1: {
      title: "",
      type: "equirectangular",
      panorama: "images/pool1.jpg",
      pitch: -2, // Alinear la altura de la vista
      yaw: -170, // Centrar la vista inicial
      hfov: 115, // Zoom para computadora 💻
      hotSpots: [
        {
          // Personalizar flecha para regresar
          pitch: -17, // Alinear la altura de la flecha
          yaw: 4, // Alinear la posición horizontal de la flecha
          type: "scene",
          text: "",
          sceneId: "escena4",
          cssClass: "flecha-personalizada",
        },
        {
          // Personalizar flecha para avanzar
          pitch: -24, // Alinear la altura de la flecha
          yaw: -182, // Alinear la posición horizontal de la flecha
          type: "scene",
          text: "",
          sceneId: "escenapool2",
          cssClass: "flecha-personalizada",
        },
      ],
    },
    escenapool2: {
      title: "",
      type: "equirectangular",
      panorama: "images/pool2.jpg",
      pitch: -2, // Alinear la altura de la vista
      yaw: -22, // Centrar la vista inicial
      hfov: 115, // Zoom para computadora 💻
      hotSpots: [
        {
          // Personalizar flecha para regresar
          pitch: -19, // Alinear la altura de la flecha
          yaw: -29, // Alinear la posición horizontal de la flecha
          type: "scene",
          text: "",
          sceneId: "escenapool1",
          cssClass: "flecha-personalizada",
        },
      ],
    },

    // escenas del restaurant
    escenarestaurant1: { 
      title: "",
      type: "equirectangular",
      panorama: "images/restaurant2.jpg",
      pitch: -2, // Alinear la altura de la vista
      yaw: 90, // Centrar la vista inicial
      hfov: 115, // Zoom para computadora 
      minYaw: -10,  // Tope izquierdo (prueba con -90, -120, etc.)
      maxYaw: 165,
      hotSpots: [
        {
          // Personalizar flecha para regresar
          pitch: -45, // Alinear la altura de la flecha
          yaw: 80, // Alinear la posición horizontal de la flecha
          type: "scene",
          text: "",
          sceneId: "escena4",
          cssClass: "flecha-personalizada-regreso",
        },
      ],
    },
  },
};

// 2. Revisamos si la pantalla es de un celular (ancho menor o igual a 768px)
if (window.innerWidth <= 768) {
  // 3. Si es celular, usamos un bucle para cambiar el 'hfov' de TODAS las escenas
  Object.values(tourConfig.scenes).forEach(scene => {
    scene.hfov = 75; // Zoom para celular 📱
  });
}

// =============================================================
// ==== AUTOMATIZACIÓN: Poner el logo abajo en TODAS las escenas
// =============================================================

// 1. Definimos el hotspot del logo
const hotspotNadir = {
    "pitch": -90,
    "yaw": 0,
    "type": "info",
    "cssClass": "nadir-hotspot"
};



// 2. Recorremos todas las escenas y les inyectamos el logo
Object.values(tourConfig.scenes).forEach(scene => {

    // Ajustamos los topes de cada escena para evitar mirar al suelo
    scene.minPitch = -50;  // Tope hacia ABAJO (evita mirar al suelo)
    // Si la escena no tiene lista de hotspots, creamos una vacía
    if (!scene.hotSpots) {
        scene.hotSpots = [];
    }
    // Agregamos el logo a la lista de esa escena
    scene.hotSpots.push(hotspotNadir);
});

// =============================================================



// 4. Cargamos el visor Y LO GUARDAMOS EN UNA VARIABLE
const viewer = pannellum.viewer("panorama", tourConfig);

// 5. Conectamos el menú desplegable con el visor
document.getElementById('menu-escenas').addEventListener('change', function() {
  // 'this.value' es el ID de la escena que el usuario eligió (ej. "escena2")
  viewer.loadScene(this.value);
});