document.addEventListener("DOMContentLoaded", function () {
  //imagenes, arreglo con nombre y ruta
  let imagenes = [
    {
      img: "imagenes/carro1.jpg",
      name: "carro1",
    },
    {
      img: "imagenes/carro2.jpg",
      name: "carro2",
    },
    {
      img: "imagenes/carro3.jpg",
      name: "carro3",
    },
    {
      img: "imagenes/carro4.jpg",
      name: "carro4",
    },
    {
      img: "imagenes/carro5.jpg",
      name: "carro5",
    },
    {
      img: "imagenes/carro6.jpg",
      name: "carro6",
    },
    {
      img: "imagenes/carro1.jpg",
      name: "carro1",
    },
    {
      img: "imagenes/carro2.jpg",
      name: "carro2",
    },
    {
      img: "imagenes/carro3.jpg",
      name: "carro3",
    },
    {
      img: "imagenes/carro4.jpg",
      name: "carro4",
    },
    {
      img: "imagenes/carro5.jpg",
      name: "carro5",
    },
    {
      img: "imagenes/carro6.jpg",
      name: "carro6",
    },
  ];
  //tablaero llamando desdde las class de html

  let tablero = document.querySelector(".tablero");
  //arreglo para guarda nombre de la imagen
  let imagElegida = [];
  //arreglo para el id de la imagen
  let imagElegidaId = [];
  //arreglo para el conteo
  let aciertos = document.querySelector(".conteo");
  let conteo = [];

  //function para poner aleatoreas
  imagenes.sort(() => 0.5 - Math.random());

  //funcion para colocar las imagenes en el index

  function creartablero() {
    for (let i = 0; i < imagenes.length; i++) {
      var img = document.createElement("img");
      img.setAttribute("id", i);
      img.setAttribute("src", "imagenes/question.jpg");
      img.setAttribute("width", "25%");
      tablero.appendChild(img);
      img.addEventListener("click", descubrir_imagen);
    }
  }
  //funcion para voltear imagenes
  function descubrir_imagen() {
    let imgclick = this.getAttribute("id");
    imagElegida.push(imagenes[imgclick].name);
    imagElegidaId.push(imgclick);
    this.setAttribute("src", imagenes[imgclick].img);

    if (imagElegida.length === 2) {
      setTimeout(compararImagenes, 500);
    } else {
    }
  }

  function compararImagenes() {
    let todas_las_img = document.querySelectorAll("img");
    let opcion_1 = imagElegidaId[0];
    let opcion_2 = imagElegidaId[1];
    if (imagElegida[0] === imagElegida[1]) {
      //alert("son iguales");
      todas_las_img[opcion_1].setAttribute("src", "imagenes/like.jpg");
      todas_las_img[opcion_2].setAttribute("src", "imagenes/like.jpg");
      conteo.push(imagElegida);
    } else {
      // alert("sigue intentando");
      todas_las_img[opcion_1].setAttribute("src", "imagenes/question.jpg");
      todas_las_img[opcion_2].setAttribute("src", "imagenes/question.jpg");
    }

    imagElegida = [];
    imagElegidaId = [];
    aciertos.textContent = conteo.length;
    if (conteo.length === imagElegida.length / 2) {
      conteo, (textContent = "Ganaste");
    }
  }

  creartablero();
  
});
