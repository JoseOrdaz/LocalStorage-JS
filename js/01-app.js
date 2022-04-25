localStorage.setItem('name', 'John');

const producto = {
    nombre: 'usb',
    precio: 30,
}

const productoString = JSON.stringify(producto);
console.log(productoString);

localStorage.setItem('producto', productoString);

const meses = [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
localStorage.setItem('meses', JSON.stringify(meses));
console.log(meses);

sessionStorage.setItem('name', 'John');
