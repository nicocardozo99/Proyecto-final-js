import { actualizarTotalesCarrito } from "./actualizarCarrito.js";
import { obtenerStorage } from "./storage.js";

let carrito = [];

const validarProductoRepetido = (productoId) => {

    if(localStorage.getItem('carrito')) {
        carrito = obtenerStorage();
    }

    const productoRepetido = carrito.find(producto => producto.id === productoId);

    if(productoRepetido) {
        productoRepetido.cantidad++;
        const cantidadProducto = document.getElementById(`cantidad${productoRepetido.id}`);
        cantidadProducto.innerText = `cantidad: ${productoRepetido.cantidad}`;
        actualizarTotalesCarrito(carrito);
    } else {
        agregarAlCarrito(productoId); 
    }
};
