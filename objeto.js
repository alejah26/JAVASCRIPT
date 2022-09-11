var miAuto={
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};
miAuto.detalleAuto();//ingresa a metodo de objeto
miAuto.marca


//objeto constructor

function auto(marca,modelo,annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}



var carro=[];
for (var i=0; i<=30; i++){
    var marca=prompt("Ingrese marca");
    var modelo=prompt("Ingrese modelo");
    var annio=prompt("Ingrese año");

    var autoNuevo = new auto(marca,modelo,annio);
    carro.unshift(autoNuevo);
}