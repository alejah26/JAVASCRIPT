var usuario,pc;
var piedra = 1;
var papel = 2;
var tijera = 3;

usuario=prompt("Piedra 1, papel 2 o tijera 3?")
pc= Math.floor(Math.random()*(4-1))+1
console.log(pc)


function juego(usuario, pc){
    if(usuario==2 && pc==1){
        console.log("Gana Usuario")
    }else if(usuario==1 && pc==2){
        console.log("Gana Pc")

    }else if(usuario==1 && pc==3){
        console.log("Gana usuario")

    }else if(usuario==2 && pc==3){
        console.log("Gana Pc")

    }else if(usuario==3 && pc==2){
        console.log("Gana Usuario")

    }else if(usuario==3 && pc==1){
        console.log("Gana Pc")
    }else{
        console.log("Empate")
    }
}
juego(usuario,pc)