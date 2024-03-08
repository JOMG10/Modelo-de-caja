// const divContenedor = document.getElementById("contenido-menu")

// const cambiarMenu = (pagina) =>{
//     if(pagina==="caja"){
//         divContenedor.innerHTML = ''
        
//         divContenedor.innerHTML += `
//         <iframe src="../view/modeloCaja.html" frameborder="0" width="500px" height="500px"></iframe>
//         `       
        
//     }else if (pagina ==="responsivo"){
//         console.log("diseño responsivo")
//     }else if (pagina ==="framework"){
//         console.log("framework")
//     }

// } 



const divContenido = document.getElementById("contenido-menu");
// divContenido.innerHTML = "";
// agregarVideo("https://www.example.com/video-caja.mp4")


const cambiarMenu = (opcion) => {
  // Limpiar el contenido actual del contenedor
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
  // Crear el elemento video y configurar sus atributos
  const videoElement = document.createElement("video");
  videoElement.width = 640;
  videoElement.height = 360;
  videoElement.controls = true;

  // Añadir una fuente al elemento video
  const sourceElement = document.createElement("source");
  sourceElement.src = url;
  sourceElement.type = "video/mp4";

  // Agregar el elemento source al elemento video
  videoElement.appendChild(sourceElement);

  // Agregar el elemento video al contenedor
  divContenido.appendChild(videoElement);
};
