const divContenido = document.getElementById("contenido-menu");

const cambiarMenu = (opcion) => {
  divContenido.innerHTML = "";

  if (opcion === "caja") {
    agregarVideo("4CMOII_oiU0");
  } else if (opcion === "responsivo") {
    agregarVideo("yneuaVjotO8");
  } else if (opcion === "framework") {
    agregarVideo("TmltkTIAX0c");
  }
};

const agregarVideo = (videoId) => {
  const iframeElement = document.createElement("iframe");
  iframeElement.width = 640;
  iframeElement.height = 360;
  iframeElement.src = `https://www.youtube.com/embed/${videoId}`;
  iframeElement.allowfullscreen = true;

  divContenido.appendChild(iframeElement);
};
