var usuario,pc;
var piedra = 1;
var papel = 2;
var tijera = 3;

usuario=prompt("Piedra 1, papel 2 o tijera 3?")
pc= Math.floor(Math.random()*(4-1))+1
console.log(pc)


switch(true){
    case (usuario==2 && pc==1):
        console.log("Gana Usuario");
        break;
    case(usuario==1 && pc==2):
        console.log("Gana Pc");
        break;

    case(usuario==1 && pc==3):
        console.log("Gana usuario");
        break;

    case (usuario==2 && pc==3):
        console.log("Gana Pc");
        break;

    case(usuario==3 && pc==2):
        console.log("Gana Usuario");
        break;

    case(usuario==3 && pc==1):
        console.log("Gana Pc");
        break;
    case(usuario==pc):
        console.log("Empate");
        break;
    default:
        console.log("Error!!!")
}
