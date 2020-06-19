class Transferencia {
    constructor(nroCuentaCliente, valor) {
        this.nroCuentaCliente = nroCuentaCliente;
        this.valor = valor;
    }

    /*obtenerDatos() {
        return `{ nroCuentaCliente: ${this.nroCuentaCliente}, valor: ${this.valor} }`; 
    }*/
    
    ObtenerValorDeposito() {
    throw Error ('Tranferencia es un concepto abstracto');
    }
}


module.exports = Transferencia;
