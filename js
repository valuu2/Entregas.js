//productos disponibles
const productos = [
  { nombre: "Pulsera Face", precio: 1500 },
  { nombre: "Pulsera Ojo turco", precio: 1800 },
  { nombre: "Pulsera Floreada", precio: 2000 }
];
//para mostrarlos
let mensaje = "Bienvenida a Flashing\n\nProductos disponibles:\n";
productos.forEach((prod, i) => {
  mensaje += `${i + 1}. ${prod.nombre} - $${prod.precio}\n`;
});

let seleccion = parseInt(prompt(mensaje + "\nElegí un producto (1, 2 o 3):")) - 1;

//las cuotas a elegir
if (productos[seleccion]) {
  const productoElegido = productos[seleccion];
  let cuotas = parseInt(prompt("¿En cuántas cuotas querés pagar? (1, 3, 6 o 12)"));
  let interes = cuotas > 1 ? 1.2 : 1; 
  let total = productoElegido.precio * interes;
  let valorCuota = total / cuotas;

//para finaizar la compra
  alert(`Elegiste: ${productoElegido.nombre}\nPrecio final: $${total.toFixed(2)}\n${cuotas} cuotas de $${valorCuota.toFixed(2)}`);

  let confirmar = confirm("Confirma su compra?");
  if (confirmar) {
    alert("¡Muchas gracias por tu compra!");
  } else {
    alert("Compra cancelada.");
  }
} else {
  alert("Selección no válida. Por favor reinicie la página e intente de nuevo.");
}
