localStorage.removeItem('name');

//actualizar registros

const mesesArray = JSON.parse(localStorage.getItem('meses'));
console.log(mesesArray);
mesesArray.push('Julio');
console.log(mesesArray);
localStorage.setItem('meses', JSON.stringify(mesesArray));