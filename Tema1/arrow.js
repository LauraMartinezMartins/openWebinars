function double(a) {
  return a * 2;
}
//esta funcion se puede declarar como esta sintaxis:
const double = (a) => a * 2; //esto es parecido a una lambda, si solo hay un return se simplifica asi
const sum = (a, b) => a + b;
const factorial = (a) => {
  //si hay mas returns se usan corchetes
  if (a <= 1) {
    return 1;
  }
  return a * factorial(a - 1);
};
