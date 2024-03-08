
const divContenido = document.getElementById("contenido-menu");


const cambiarMenu = (opcion) => {

    divContenido.innerHTML = "";
  
  if (opcion === "caja") {
    agregarVideo("https://www.example.com/video-caja.mp4");
  } else if (opcion === "responsivo") {
    agregarVideo("https://www.example.com/video-responsivo.mp4");
  } else if (opcion === "framework") {
    agregarVideo("https://www.example.com/video-framework.mp4");
  }

  
};

const agregarVideo = (url) => {
  const videoElement = document.createElement("video");
  videoElement.width = 640;
  videoElement.height = 360;
  videoElement.controls = true;

  const sourceElement = document.createElement("source");
  sourceElement.src = url;
  sourceElement.type = "video/mp4";

  videoElement.appendChild(sourceElement);

  divContenido.appendChild(videoElement);
};


