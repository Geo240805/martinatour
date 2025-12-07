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
    sceneFadeDuration: 3000,
    autoLoad: true,
    //  AUTOROTACION 
    // Velocidad y dirección (ej. -2 grados por segundo, gira a la izquierda)
    autoRotate: -2, 
    // Tiempo de inactividad para empezar (ej. 2 segundos)
    autoRotateInactivityDelay: 1000, 
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
          pitch: -5, // Alinear la altura de la flecha
          yaw: -29, // Alinear la posición horizontal de la flecha
          type: "scene",
          text: "",
          sceneId: "escena3",
          cssClass: "flecha-personalizada",
        },
        {
          // Personalizar flecha para regresar
          pitch: -20,  // Alinear la altura de la flecha
          yaw: -177, // Alinear la posición horizontal de la flecha
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
      panorama: "images/4.jpg",
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
      ],
    },

    escena4: {
      title: "",
      type: "equirectangular",
      panorama: "images/6.jpg",
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
          text: "back",
          sceneId: "escena3",
          cssClass: "flecha-personalizada",
        },
        
      ],
    },

    escena5: {
      title: "",
      type: "equirectangular",
      panorama: "images/7.jpg",
      pitch: -2, // Alinear la altura de la vista
      yaw: 180, // Centrar la vista inicial
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
      panorama: "images/8.jpg",
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
      panorama: "images/9.jpg",
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
      panorama: "images/10.jpg",
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
    scene.hfov = 76; // Zoom para celular 📱
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