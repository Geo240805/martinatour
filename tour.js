// 1. Guardamos tu configuración completa en una variable
const tourConfig = {
  default: {
    firstScene: "escena1",
    sceneFadeDuration: 1000,
    autoLoad: true,
  },
  scenes: {

    escena1: {
      title: "Escena 1",
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
          text: "Ir a Escena 2",
          sceneId: "escena2",
          cssClass: "flecha-personalizada",
        },
      ],
    },

    escena2: {
      title: "Escena 2",
      type: "equirectangular",
      panorama: "imagenes/img2.jpg",
      // --- AGREGA TU VISTA PREVIA AQUÍ ---
      preview: "imagenes/MartinaLogo.png",
      // ------------------------------------

      pitch: 1, // Alinear la altura de la vista
      yaw: -10, // Centrar la vista inicial
      hfov: 115, // Zoom para computadora 💻
      hotSpots: [
        {
          // Personalizar flecha para avanzar
          pitch: -10, // Alinear la altura de la flecha
          yaw: -15, // Alinear la posición horizontal de la flecha
          type: "scene",
          text: "Ir a escena 3",
          sceneId: "escena3",
          cssClass: "flecha-personalizada",
        },
        {
          // Personalizar flecha para regresar
          pitch: -20,  // Alinear la altura de la flecha
          yaw: -165, // Alinear la posición horizontal de la flecha
          type: "scene",
          text: "Regresar a Escena 1",
          sceneId: "escena1",
          cssClass: "flecha-personalizada",
        },
      ],
    },

    escena3: {
      title: "Escena 3",
      type: "equirectangular",
      panorama: "imagenes/img3.jpg",
      // --- AGREGA TU VISTA PREVIA AQUÍ ---
      preview: "imagenes/MartinaLogo.png",
      // ------------------------------------

      pitch: -2, // Alinear la altura de la vista
      yaw: 60, // Centrar la vista inicial
      hfov: 115, // Zoom para computadora 💻
      hotSpots: [
        {
          // Personalizar flecha para avanzar
          pitch: -11, // Alinear la altura de la flecha
          yaw: 65, // Alinear la posición horizontal de la flecha
          type: "scene",
          text: "Ir a escena 4",
          sceneId: "escena4",
          cssClass: "flecha-personalizada",
        },
        {
          // Personalizar flecha para regresar
          pitch: -25, // Alinear la altura de la flecha
          yaw: -125, // Alinear la posición horizontal de la flecha
          type: "scene",
          text: "back",
          sceneId: "escena2",
          cssClass: "flecha-personalizada",
        },
      ],
    },

    escena4: {
      title: "Escena 4",
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
          text: "Ir a escena 5",
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
      title: "Escena 5",
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
          text: "Ir a escena 6",
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
      title: "Escena 6",
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
          text: "Ir a escena 7",
          sceneId: "escena7",
          cssClass: "flecha-personalizada",
        },
        {
          // Personalizar flecha para regresar
          pitch: -12, // Alinear la altura de la flecha
          yaw: -140, // Alinear la posición horizontal de la flecha
          type: "scene",
          text: "Back",
          sceneId: "escena5",
          cssClass: "flecha-personalizada",
        },
        {
          // Personalizar flecha para pool
          pitch: -12, // Alinear la altura de la flecha
          yaw: 129, // Alinear la posición horizontal de la flecha
          type: "scene",
          text: "pool",
          sceneId: "escena9",
          cssClass: "flecha-personalizada",
        },
      ],
    },

    escena7: {
      title: "Escena 7",
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
          text: "Ir a escena 8",
          sceneId: "escena8",
          cssClass: "flecha-personalizada",
        },
        {
          // Personalizar flecha para regresar
          pitch: -17, // Alinear la altura de la flecha
          yaw: -145, // Alinear la posición horizontal de la flecha
          type: "scene",
          text: "Back",
          sceneId: "escena6",
          cssClass: "flecha-personalizada",
        },
      ],
    },

    escena8: {
      title: "Escena 8",
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
          text: "Back",
          sceneId: "escena7",
          cssClass: "flecha-personalizada",
        },
      ],
    },

    // ESCENAS DE LA POOL

    escena9: {
      title: "Escena 9",
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
          text: "Ir a escena 10",
          sceneId: "escena10",
          cssClass: "flecha-personalizada",
        },
        {
          // Personalizar flecha para regresar
          pitch: -12.5, // Alinear la altura de la flecha
          yaw: -149, // Alinear la posición horizontal de la flecha
          type: "scene",
          text: "Back",
          sceneId: "escena6",
          cssClass: "flecha-personalizada",
        },
      ],
    },

    escena10: {
      title: "Escena 10",
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
          text: "Ir a escena 11",
          sceneId: "escena11",
          cssClass: "flecha-personalizada",
        },
        {
          // Personalizar flecha para regresar
          pitch: -10, // Alinear la altura de la flecha
          yaw: -75, // Alinear la posición horizontal de la flecha
          type: "scene",
          text: "Back",
          sceneId: "escena9",
          cssClass: "flecha-personalizada",
        },
      ],
    },

    escena11: {
      title: "Escena 11",
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
          text: "Back",
          sceneId: "escena10",
          cssClass: "flecha-personalizada",
        },
      ],
    },

  },
};

// 2. Revisamos si la pantalla es de un celular (ancho menor o igual a 768px)
if (window.innerWidth <= 768) {
  // 3. Si es celular, cambiamos el 'hfov' por el valor para móvil
  tourConfig.scenes.escena1.hfov = 60; // Zoom para celular 📱
  tourConfig.scenes.escena2.hfov = 60; // Zoom para celular 📱
  tourConfig.scenes.escena3.hfov = 60; // Zoom para celular 📱
}

// 4. Cargamos el visor con la configuración final
pannellum.viewer("panorama", tourConfig);