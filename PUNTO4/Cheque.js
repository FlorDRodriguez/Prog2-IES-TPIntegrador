const Transferencia = require('./Transferencia');

class Cheque extends Transferencia {

    constructor(nroCuentaCliente, valor) {
        super(nroCuentaCliente, valor);
    }
    ObtenerValorDeposito() {
        console.info('Deposito en cheque');
        const v1 = 1000;
        const v2 = 5000;
        const p1 = 20;
        const p2 = 25;
        const p3 = 30;
        if (this.valor <= v1) {
            var comision = ((this.valor*p1)/1000);
            var valorD = this.valor + comision;        
        }
        else if(this.valor <= v2 && this.valor > v1) {
            var comision = ((this.valor*p2)/1000);
        } else {
            var comision = ((this.valor*p3)/1000);        
        }       
        //const valorD = this.valor + this.comision;
        return ("Cuenta a transferir: " 
        + this.nroCuentaCliente) + "\n" 
        + ("Valor a transferir: " 
        + this.valor) + "\n" 
        + ("USTED DEBE DEPOSITAR: " 
        + valorD);
    }
}

module.exports = Cheque;