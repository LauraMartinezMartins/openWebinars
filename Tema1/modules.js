export const hello = () => "hello world"; //exporta una funcion con nombre
export default class MyClass {
  //no se puede exportar por defecto mas de una expresion
  goodbye() {
    return "goodbye world";
  }
}
