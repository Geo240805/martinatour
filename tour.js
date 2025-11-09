// Función para crear un pop-up con MÚLTIPLES IMÁGENES (para el menú)
function hotspotMenuPaginas(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-tooltip-menu-scroll');
  
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
  
  hotSpotDiv.appendChild(paginasDiv);
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
    autoRotate: -2, 
    // Tiempo de inactividad para empezar (ej. 2 segundos)
    autoRotateInactivityDelay: 2000, 


    // QUITA LOS CONTROLES DEL VISOR

    showControls: false,

  },

  scenes: {

    escena1: {
      title: "",
      type: "equirectangular",
      panorama: "imagenes/img1.jpg",

      // --- AGREGA TU VISTA PREVIA AQUÍ ---
      preview: "imagenes/MartinaLogo.png",
      // ------------------------------------

      pitch: 1, // Alinear la altura de la vista
      yaw: -87, // Centrar la vista inicial
      hfov: 115, // Zoom para computadora 💻
      hotSpots: [
        {
          // Personalizar flecha para avanzar
          pitch: -15, // Alinear la altura de la flecha
          yaw: -90, // Alinear la posición horizontal de la flecha
          type: "scene",
          text: "",
          sceneId: "escena2",
          cssClass: "flecha-personalizada",
        },
      ],
    },

    escena2: {
      title: "",
      type: "equirectangular",
      panorama: "imagenes/img2.jpg",
      pitch: 1, // Alinear la altura de la vista
      yaw: -10, // Centrar la vista inicial
      hfov: 115, // Zoom para computadora 💻
      hotSpots: [


      {
        pitch: 0,
        yaw: 90,
        // "type": "info", <-- ¡DEJA ESTO VACÍO O QUÍTALO PARA QUE FUNCIONE CON CLIC!
  
        cssClass: "", // El mismo ícono de menú de antes
  
        createTooltipFunc: hotspotMenuPaginas, // Llama a la nueva función
        createTooltipArgs: {
          titulo: "Nuestro Menú",
          paginas: [
            "image-menu/img1.jpg",
            "image-menu/img2.jpg",
            // ...puedes añadir todas las páginas que quieras...
          ]
        }
      },
    
      {
          // Personalizar hotspot de información
          pitch: -15,  // Alinear la altura del hotspot
          yaw: 50,   // Alinear la posición horizontal del hotspot
          type: "info", // <-- TIPO INFO
          text: "Este es un Cama de Playa. ¡Son muy cómodas e incluyen servicio de toallas!",
          cssClass: "info-hotspot" // <-- Le damos un estilo diferente
        },
        {
          // Personalizar flecha para avanzar
          pitch: -10, // Alinear la altura de la flecha
          yaw: -15, // Alinear la posición horizontal de la flecha
          type: "scene",
          text: "",
          sceneId: "escena3",
          cssClass: "flecha-personalizada",
        },
        {
          // Personalizar flecha para regresar
          pitch: -20,  // Alinear la altura de la flecha
          yaw: -165, // Alinear la posición horizontal de la flecha
          type: "scene",
          text: "",
          sceneId: "escena1",
          cssClass: "flecha-personalizada",
        },
      ],
    },

    escena3: {
      title: "",
      type: "equirectangular",
      panorama: "imagenes/img3.jpg",
      pitch: -2, // Alinear la altura de la vista
      yaw: 60, // Centrar la vista inicial
      hfov: 115, // Zoom para computadora 💻
      hotSpots: [
        {
          // Personalizar flecha para avanzar
          pitch: -11, // Alinear la altura de la flecha
          yaw: 65, // Alinear la posición horizontal de la flecha
          type: "scene",
          text: "",
          sceneId: "escena4",
          cssClass: "flecha-personalizada",
        },
        {
          // Personalizar flecha para regresar
          pitch: -25, // Alinear la altura de la flecha
          yaw: -125, // Alinear la posición horizontal de la flecha
          type: "scene",
          text: "",
          sceneId: "escena2",
          cssClass: "flecha-personalizada",
        },
      ],
    },

    escena4: {
      title: "",
      type: "equirectangular",
      panorama: "imagenes/img4.jpg",
      pitch: -2, // Alinear la altura de la vista
      yaw: -40, // Centrar la vista inicial
      hfov: 115, // Zoom para computadora 💻
      hotSpots: [
        {
          // Personalizar flecha para avanzar
          pitch: -10, // Alinear la altura de la flecha
          yaw: -40, // Alinear la posición horizontal de la flecha
          type: "scene",
          text: "",
          sceneId: "escena5",
          cssClass: "flecha-personalizada",
        },
        {
          // Personalizar flecha para regresar
          pitch: -11, // Alinear la altura de la flecha
          yaw: 77, // Alinear la posición horizontal de la flecha
          type: "scene",
          text: "back",
          sceneId: "escena3",
          cssClass: "flecha-personalizada",
        },
        
      ],
    },

    escena5: {
      title: "",
      type: "equirectangular",
      panorama: "imagenes/img5.jpg",
      pitch: -2, // Alinear la altura de la vista
      yaw: 15, // Centrar la vista inicial
      hfov: 115, // Zoom para computadora 💻
      hotSpots: [
        {
          // Personalizar flecha para avanzar
          pitch: -11, // Alinear la altura de la flecha
          yaw: 14, // Alinear la posición horizontal de la flecha
          type: "scene",
          text: "",
          sceneId: "escena6",
          cssClass: "flecha-personalizada",
        },
        {
          // Personalizar flecha para regresar
          pitch: -10, // Alinear la altura de la flecha
          yaw: -175, // Alinear la posición horizontal de la flecha
          type: "scene",
          text: "Back",
          sceneId: "escena4",
          cssClass: "flecha-personalizada",
        },
      ],
    },

    escena6: {
      title: "",
      type: "equirectangular",
      panorama: "imagenes/img6.jpg",
      pitch: -4, // Alinear la altura de la vista
      yaw: 40, // Centrar la vista inicial
      hfov: 115, // Zoom para computadora 💻
      hotSpots: [
        {
          // Personalizar flecha para playa
          pitch: -11, // Alinear la altura de la flecha
          yaw: -50, // Alinear la posición horizontal de la flecha
          type: "scene",
          text: "",
          sceneId: "escena7",
          cssClass: "flecha-personalizada",
        },
        {
          // Personalizar flecha para regresar
          pitch: -12, // Alinear la altura de la flecha
          yaw: -140, // Alinear la posición horizontal de la flecha
          type: "scene",
          text: "",
          sceneId: "escena5",
          cssClass: "flecha-personalizada",
        },
        {
          // Personalizar flecha para pool
          pitch: -12, // Alinear la altura de la flecha
          yaw: 129, // Alinear la posición horizontal de la flecha
          type: "scene",
          text: "",
          sceneId: "escena9",
          cssClass: "flecha-personalizada",
        },
      ],
    },

    escena7: {
      title: "",
      type: "equirectangular",
      panorama: "imagenes/img7.jpg",
      pitch: -2, // Alinear la altura de la vista
      yaw: 33, // Centrar la vista inicial
      hfov: 115, // Zoom para computadora 💻
      hotSpots: [
        {
          // Personalizar flecha para avanzar
          pitch: -11, // Alinear la altura de la flecha
          yaw: 28, // Alinear la posición horizontal de la flecha
          type: "scene",
          text: "",
          sceneId: "escena8",
          cssClass: "flecha-personalizada",
        },
        {
          // Personalizar flecha para regresar
          pitch: -17, // Alinear la altura de la flecha
          yaw: -145, // Alinear la posición horizontal de la flecha
          type: "scene",
          text: "",
          sceneId: "escena6",
          cssClass: "flecha-personalizada",
        },
      ],
    },

    escena8: {
      title: "",
      type: "equirectangular",
      panorama: "imagenes/img8.jpg",
      pitch: -2, // Alinear la altura de la vista
      yaw: -90, // Centrar la vista inicial
      hfov: 115, // Zoom para computadora 💻
      hotSpots: [
        {
          // Personalizar flecha para regresar
          pitch: -10, // Alinear la altura de la flecha
          yaw: 85, // Alinear la posición horizontal de la flecha
          type: "scene",
          text: "",
          sceneId: "escena7",
          cssClass: "flecha-personalizada",
        },
      ],
    },

    // ESCENAS DE LA POOL

    escena9: {
      title: "",
      type: "equirectangular",
      panorama: "imagenes/imgpool.jpg",
      pitch: -2, // Alinear la altura de la vista
      yaw: 20, // Centrar la vista inicial
      hfov: 115, // Zoom para computadora 💻
      hotSpots: [
        {
          // Personalizar flecha para avanzar
          pitch: -9, // Alinear la altura de la flecha
          yaw: 22, // Alinear la posición horizontal de la flecha
          type: "scene",
          text: "",
          sceneId: "escena10",
          cssClass: "flecha-personalizada",
        },
        {
          // Personalizar flecha para regresar
          pitch: -12.5, // Alinear la altura de la flecha
          yaw: -149, // Alinear la posición horizontal de la flecha
          type: "scene",
          text: "",
          sceneId: "escena6",
          cssClass: "flecha-personalizada",
        },
      ],
    },

    escena10: {
      title: "",
      type: "equirectangular",
      panorama: "imagenes/poolcentro.jpg",
      pitch: -2, // Alinear la altura de la vista
      yaw: -65, // Centrar la vista inicial
      hfov: 115, // Zoom para computadora 💻
      hotSpots: [
        {
          // Personalizar flecha para avanzar
          pitch: -14, // Alinear la altura de la flecha
          yaw: 76, // Alinear la posición horizontal de la flecha
          type: "scene",
          text: "",
          sceneId: "escena11",
          cssClass: "flecha-personalizada",
        },
        {
          // Personalizar flecha para regresar
          pitch: -10, // Alinear la altura de la flecha
          yaw: -75, // Alinear la posición horizontal de la flecha
          type: "scene",
          text: "",
          sceneId: "escena9",
          cssClass: "flecha-personalizada",
        },
      ],
    },

    escena11: {
      title: "",
      type: "equirectangular",
      panorama: "imagenes/pool3.jpg",
      pitch: -2, // Alinear la altura de la vista
      yaw: -140, // Centrar la vista inicial
      hfov: 115, // Zoom para computadora 💻
      hotSpots: [
        {
          // Personalizar flecha para regresar
          pitch: -10, // Alinear la altura de la flecha
          yaw: 190, // Alinear la posición horizontal de la flecha
          type: "scene",
          text: "",
          sceneId: "escena10",
          cssClass: "flecha-personalizada",
        },
      ],
    },

  },
};

// 2. Revisamos si la pantalla es de un celular (ancho menor o igual a 768px)
if (window.innerWidth <= 768) {
  // 3. Si es celular, usamos un bucle para cambiar el 'hfov' de TODAS las escenas
  Object.values(tourConfig.scenes).forEach(scene => {
    scene.hfov = 50; // Zoom para celular 📱
  });
}

// 4. Cargamos el visor Y LO GUARDAMOS EN UNA VARIABLE
const viewer = pannellum.viewer("panorama", tourConfig);

// 5. Conectamos el menú desplegable con el visor
document.getElementById('menu-escenas').addEventListener('change', function() {
  // 'this.value' es el ID de la escena que el usuario eligió (ej. "escena2")
  viewer.loadScene(this.value);
});