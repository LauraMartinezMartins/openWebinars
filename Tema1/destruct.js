const user = {
  name: "Cristian", //este tiene claves y valores
  surname: "Carrion",
  courses: ["React", "Angular", "Vue"],
};
//esta funcion como parametro es un objeto que solo tiene claves
const getFullName = ({ name, surname }) => `${name} ${surname}`; //se extraen name y surname para pintarlos luego
const { name, surname } = user; //se extraen name,surname
console.log("getFullName: ", getFullName(user)); //introducimos el user que ya tiene de por si las claves, por lo tanto las encuentra y muestra

const newUser = {
  //la variable que viene despues una vez evaluada se va a extender que coloque uno tras otro todos los atributos del objeto como si fueran comas
  //asi el nuevo usuario tiene todos los atributos del anterior y sobreescribimos el nombre
  ...user,
  name: "Laura",
};
const { name: newName } = newUser; //extraemos el nuevo nombre
const [firstCourse, ...restCourses] = newUser.courses; //se almacenan otros elementos del array

const newObjetct = { newName, firstCourse };

//esta variable sums se rellenara con los elem entos
const sum = (
  ...nums //se puede manejar mejor los parametros
) => nums.reduce((a, b) => a + b, 0); //recorre la array y acumula la suma
