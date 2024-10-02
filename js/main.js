const array = ["Joaquin", 1, ["Hola", "Adios"], true];

// 1) Recorrer el array e insertar dichos valores en el localstorage. 
// El key de cada valor corresponderá a "variable" + i siendo i el indice en el que se encuentra el array.
array.forEach((item, i) => {
  localStorage.setItem("variable" + i + "", JSON.stringify(item));
});

// 2) Recorrer de 0 a la longitud del array y hacer la petición de "variable" + i del localstorage
for (let i = 0; i < array.length; i++) {
  let value = localStorage.getItem("variable" + i + "");
  value = JSON.parse(value);

// 3) Crear un div por cada variable e insertar el valor de dicha variable en el div
  const div = document.createElement("div");
  div.textContent = "variable" + i + ": " + value;

// 4) Insertar los divs en el body del HTML
  document.body.appendChild(div);
}

