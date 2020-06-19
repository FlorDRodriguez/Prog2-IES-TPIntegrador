const Transferencia = require('./Transferencia');

class Efectivo extends Transferencia {

    constructor(nroCuentaCliente, valor) {
        super(nroCuentaCliente, valor);
    }
    ObtenerValorDeposito() {
        console.info('Deposito en efectivo');
        return ("Cuenta a transferir: " 
        + this.nroCuentaCliente) + "\n" 
        + ("Valor a transferir: " 
        + this.valor) + "\n" 
        + ("USTED DEBE DEPOSITAR: " 
        + this.valor);
    }
}

module.exports = Efectivo;

