const Transferencia = require('./Transferencia');
const Efectivo = require('./Efectivo');
const Cheque = require('./Cheque');

console.info("Ejemplo Banco \n");

const ef1 = new Efectivo(4561, 1000);
console.info(ef1.ObtenerValorDeposito() + '\n');

const c1 = new Cheque(4561, 500);
console.info(c1.ObtenerValorDeposito());
