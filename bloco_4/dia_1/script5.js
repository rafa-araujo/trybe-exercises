let ang1 = 80;
let ang2 = 90;
let ang3 = 53;
let tri = true;
let tri2 = false;

if (ang1 < 0 || ang2 < 0 || ang3 < 0){
    console.log("Valor de angulo inválido")
}
else if(ang1 + ang2 + ang3 == 180){
    console.log(tri)
}
else(ang1 + ang2 + ang3 != 180){
    console.log(tri2)
}