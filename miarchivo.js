// while
let continuar = true;

while (continuar) {
    // Solicitar al usuario que seleccione un producto y especifique la cantidad
    let producto = prompt("Seleccione un producto:\n1. Producto A - $1.000\n2. Producto B - $5.000\n3. Producto C - $2.500");
    let cantidad = prompt("Ingrese la cantidad deseada:");

    // Convertir la entrada del usuario a números
    producto = parseInt(producto);
    cantidad = parseInt(cantidad);

    // Definir los precios de los productos
 let precioProductoA = 100;
 let precioProductoB = 50;
 let precioProductoC = 200;

    // Calcular el costo total según la selección del usuario
    let costoTotal = 0;

    if (producto === 1) {
        costoTotal = precioProductoA * cantidad;
    } else if (producto === 2) {
        costoTotal = precioProductoB * cantidad;
    } else if (producto === 3) {
        costoTotal = precioProductoC * cantidad;
    } else {
        alert("Opción de producto no válida");
    }

    // Mostrar el resultado al usuario
    if (costoTotal > 0) {
        alert("El costo total es: $" + costoTotal);
    }

    // Preguntar al usuario si quiere agregar algo mas
    let respuesta = prompt("Si quiere agregar otro producto introduzca: Si, en el caso contrario: No").toLowerCase();
    if (respuesta !== "si") {
        continuar = false;
    }
}

alert("Gracias");
