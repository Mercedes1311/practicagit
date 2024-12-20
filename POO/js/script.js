// class




// quiero un programa que adminstre un local comercial de electrodomesticos


class Electrodomesticos{
    #costo=0;
    constructor(serie, marca, modelo, conectividad,precio, fechaCompra){
        this.serie =serie;
        this.marca = marca;
        this.modelo = modelo;
        this.conectividad = conectividad;
        this.precio = precio;
        this.fechaCompra = fechaCompra;
    }
    getCosto(acceso){
        if (acceso == "admin")
            return this.costo;
        else
            return 0;
    }
    setCosto(nuevoCosto){
        this.costo = nuevoCosto;
    }
    encender(){
        console.log(`el electrodomestico ${this.marca} - ${this.modelo} esta encendida`);
    }
    apagar(){
        console.log(`el electrodomestico ${this.marca} - ${this.modelo} esta apagada`);
    }
    conectarAlInternet(dispositivo){
        this.conectividad.forEach(element => {
            console.log(element)
            if(element === dispositivo){
                element.isActivar(dispositivo);
            }
            else{
                element.isActivo = false;
            }
        });
    }
    mostratJSON(){
        return JSON.stringify(this);
    }
}

class LineaMarron extends Electrodomesticos{
    constructor(serie, marca, modelo, conectividad,precio, fechaCompra, entradas, salidas){
        super(serie, marca, modelo, conectividad,precio, fechaCompra)
        this.entradas = entradas;
        this.salidas = salidas;
    }
    cambiarEntrada(){
        
    }
    cambiarSalida(){
        
    }

    cambiarVolumen(nivel){
        this.salidas.forEach(element => {
            console.log(`la tv ${this.marca} - ${this.modelo} esta reproduciendo ${element} al nivel ${nivel}`);
        });
    }
}
//abstracccion

class Television extends LineaMarron{
    constructor(serie, marca, modelo, conectividad,precio, fechaCompra, entradas, salidas,tamaño,  formato){
        super(serie, marca, modelo, conectividad,precio, fechaCompra, entradas, salidas)
        this.tamano = tamaño;
        this.formato = formato;
    }
    
    cambiarCanal(numCanal){
        let index = this.entradas.indexOf("CABLE");
        if (index>0){
            console.log(`la tv ${this.marca} - ${this.modelo} esta mostrabdo el  canal ${numCanal}`);
        }
        else{
            console.log(`la tv ${this.marca} - ${this.modelo}no puede ejecutar la accion`);
        }
    }
    
    reproducirVideos(){

    }
}

//instanciar
class Diagnostico {
    constructor(tipo, isActivo=false) {
        this.tipo = tipo;
        this.isActivo = isActivo;
    }
    isActivar(dispActivar){
        if(this.tipo === dispActivar){
            this.isActivo = true;
        }
        else{
            console.log("no se puede activar");
        }
    }

}

let tv1 = new Television("DR001","Sony", "Bravia",
    [new Diagnostico("WIFI"),new Diagnostico("LAN")],   1000, "2024-01-01",
    [new Diagnostico("hhmi"),new Diagnostico("cable"),new Diagnostico("bt")],
    [new Diagnostico("parlantes"),new Diagnostico("bt")],50,"4k");

console.log(tv1);
console.log(tv1.mostratJSON());
tv1.conectarAlInternet("WIFI");
console.log(tv1.mostratJSON());

// let tv1 = new Television("DR001","Sony", "Bravia",  70,  1000, "2024-01-01",["HDMI","BLUETOOTH"],"4K",["BT","OPTICA","PARLANTES"]);

// console.log(tv1);
// tv1.encender();
// tv1.cambiarCanal(5);

// let tv2 = new Television("DR002","Lg","nano",  55,  1200, "2024-11-11",["HDMI","CABLE","BLUETOOTH"],"FULL HD",["BT","PARLANTES"]);

// console.log(tv2.formato);

// tv2.entradas.forEach(element => {
//     console.log(element);
// });
// tv2.apagar();
// tv2.cambiarCanal(6);
// console.log(tv2.getCosto("admin"));
