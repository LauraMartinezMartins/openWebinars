let extLet = 1;
let extVal = 1;
if (true) {
    //Cuando esta declarada en un bloque, solo esta disponible cuando esta dentro del bloque
    let intLet = 1;
    var intVar = 1;

    console.log("Inside Function---");
    console.log(extLet);
    console.log(extVal);

}