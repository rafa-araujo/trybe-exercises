let nota = 90;

if(nota >= 90 && nota <101){
    nota = 1;
}
else if(nota >=80 && nota < 90){
    nota = 2;
}
else if(nota >= 70 && nota < 80){
    nota = 3;
}
else if(nota >= 60 && nota < 70){
    nota = 4;
}
else if(nota >=50 && nota < 60){
    nota = 5;
}
else if(nota < 50 && nota > -1){
    nota = 6;
}


switch (nota){
    case 1:
     console.log("Nota A");
    break;

    case 2:
     console.log("Nota B");
    break;

    case 3:
     console.log("Nota C");
    break;

    case 4:
     console.log("Nota D");
    break;

    case 5:
     console.log("Nota E");
    break;

    case 6:
     console.log("Nota F");
    break;

    default:
     if(nota < 0 || nota > 100){
      console.log("Nota inválida");
     }
}