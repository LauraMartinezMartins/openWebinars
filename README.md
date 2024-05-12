# REACT PRINCIPIANTE
Presentación y descripción de lo que es en si REACT, que es una librería de JavaScript.
Fundamentos básicos en cuatro módulos: 
- Diseño: como estructurar la interfaz, como afecta el cliente al servidor y como opera en el servidor esta tecnologia.
- Repaso de javascript en ultimas versiones. Hay herramientas que facilitan la programación con REACT.
- Anatomia REACT: como es REACT por dentro y como consigue pintar por pantalla.
- Ecosistema REACT: todo lo que rodea REACT en herramientas, servicios, etc.

  Sistemas de diseño:
  
Historia REACT: combinación de apariencia, estructura y comportamiento para la interfaz de usuario efectiva. Dan una capa de pintura a la interfaz de usuario.
- Estructura=layout. Disposición elementos en la capa.
- Comportamiento=lógica. Nuestro codigo y recoge inputs con teclado y ratón.
- Apariencia=estilos. Tipo letra, color, tamaño,etc.
Las interfaces WEB, estaban enfocadas de forma tradicional tenía un fichero para cada página. Uno para elementos, homepage, para el contacto...Los estilos y lógica ya estaban cargados.
Poco a poco, cuanto hay más lógica y mas carga visual, adecuarse en diferentes dispositivos. Lo primero es dividir los ficheros según si se va a usar en diferentes páginas. 

Encapsulación REACT: nuestra unidad lógica será el componente. Tendra logica, estilos y layout. No hay división vertical del proyecto, si no ahora la estructura es horizontal. Cada capa tiene un trocito de la estructura para ser independientes. Todo lo que conforma la interfaz es un componente, resultando en un arbol que es un componente llamado aplicación. Encaja esta estructura bien con el navegador. 

Diseño atómico: habla de entidades con más contenido, nos dice que cada interfaz puede dividirse en combinaciones de elementos. La unidad más basica es el atomo. Ejemplo de atomo: boton de busqueda, texto...
Cuando los combinamos, es una molecula más sotisficada. Podría incluirse en un organismo por ejemplo, la cabecera. La combinación de organismos da lugar al template, que es una estructura preparada para ser instanciada en diferentes páginas. Finalmente, todos los elementos combinados resultan una página. 

Empezamos con la diferencia entre las variables let, var y const. Seguimos con las funciones arrow (lambdas) y los strings. Explicación de los destructores de los que se pueden sustraer una clave de ellos y se puede cambiar su valor. Herencia e imports.

Anatomía:
- Reconciliación: proceso en el que REACT intenta optimizar los datos. Existe conexión directa entre html y DOM, habiendo relación entre nodos hijos y nodos padres. El navegador repinta, lo que puede ser costoso si el arbol es muy grande. Por ello aparece una estructura complementaria al DOM, con el Virtual DOM, y solo modificar el DOM nativo cuando sea necesario. El virtual DOM es una copia de lo que tiene el DOM de forma mas sotisficada. Si los cambios se producen con virtual dom, los cambios se localizan mejor y su coste es inferior, por lo tanto es más fluido. 
- Renderización: pinta los datos. Encapsulamos la responsabilidad modificando el adaptador sin perder caracteristicas que nos da REACT. React Native aprovecha del DOM para hacer puentes para dispositivos móviles. Podemos hacer codigo multiplataforma. El punto de entrada es uniforme, la potencia de desarrollo solo conociendo la React Core es limitado.

Ecosistema:
En este ecosistema, en el centro se encuentra REACT para tratar el renderizado. La libreria mas basica es la encargada de pintar como React Dom. Una herramienta muy util en aplicaciones tener un enroutado, teniendo las páginas que se puede acceder, como React Router. Estas piezas son herramientas independientes. La gestión del estado centralizado que se trata de gestión de datos de la aplicación de forma más sencilla, se puede encargar de esto Redux. Para la gestión de formularios hay bastante variedad de librerías, el más comun es Formik. Hay tests que la herramienta que se propone es Jest. El empaquetado es necesario ya que las estructuras son complejas, para que el navegador las pueda ejecutar de mejor forma, un ejemplo sería Parcel. En Angular las funcionalidades ya vienen más cerradas. 
He subido el ejercicio en el proyecto con la web antigua de fuentes de Google. (por subir)

APLICACIÓN REACT
Veremos varios puntos:
-Dependencias
-Empaquetado
-Estilo de código
-Herramientas desarrollo y debug de apps

Dependencias:
Aportan funcionalidad de caracter general (librerias). Nuestro codigo va a ser Javascript y las dependencias iran dentro de node_modules. El entorno donde se ejecutan las apps solían ser los navegadores, hace tiempo bower se encargaba de las dependencias, luego ha ido cambiando y se ha unificado las dependencias en cliente y servidor y se usa npm.  
Para poder empezar el proyecto,se deben seguir estos pasos:
* Instalar NodeJS (he instalado desde la página)
* Comprobar versión npm.
* Crear e ir a una nueva carpeta.
* Empezar un proyecto.
Se realizará por consola, según los pasos en el video instalandose asi el json.
Instalamos la dependencia, que con save ya sepa que necesita react.
Con esto, la salida de consola será la siguiente:

```
E:\REACT\wishlist>npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.
See `npm help init` for definitive documentation on these fields
and exactly what they do.
Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.
Press ^C at any time to quit.
test command:
git repository:
keywords:
author:
license: (ISC)
About to write to E:\REACT\wishlist\package.json:
{
  "name": "wishlist",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
Is this OK? (yes)
E:\REACT\wishlist>npm install --save react
added 3 packages, and audited 4 packages in 1s
found 0 vulnerabilities
```

 Empaquetado:
Estas herramientas se encargan dado un codigo, lo procesa para que el navegador pueda entender. Ahora vamos a instalar el builder llamado Parcel. 
 * Se instala Parcel
 * Se crea index.html
Esto lo colocara dentro de node-modules.
 Instalamos primero yarn, y ejecutamos el comando con yarn.
Lo siguiente, en nuestro json definimos un script, que nos servira para realizar tareas en nuestro flujo. Añadimos en el json el start donde estan los scripts.
Ejecutamos npm start y ya se visualiza en el navegador el html.
Instalamos React DOM y empezamos a trabajar con REACT. 
React y React DOM ambas exportan un objeto. Dentro, vemos codigo parecido a html pero no lo es, es lengguaje jsx. El render como primer parametro recibe el jsx y como segundo el parametro nuestra aplicación. La referencia la extraemos por el id.
Creamos el index.jsx e importamos React y React DOM.
(Como aporte, pongo la pagina que pone en los comentarios de las extensiones para React: https://dev.to/narendersaini32/5-vscode-extensions-for-react-developers-ipk)
   
En el archivo index.jsx: 
```
'import React from "react";
import ReactDom from 'react-dom';
ReactDom.render(<div> Hola</div>),document.getElementById("root");'
```
En el archivo index.html:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>Wishlist</title>
</head>
<body>
    <div id="root"></div>
    <script src="index.jsx"></script>
</body>
</html>
```

Estilo del código:
* Estructura de carpetas.
* Linting: enfocado a herramientas que revisan el codigo que escribimos y que lo comprueban.
* Formato: tabulaciones, espacios, salto de línea, etc.

Partimos de la carpeta base, en la raiz estara el fichero package-json y tambien todos los ficheros de configuración. Hay una división de dos carpetas, donde se coloca el codigo fuente (src) y dist que es la compilación del codigo. Por lo general no entramos en dist. Como tercera carpeta puede haber las dependencias. En src podemos dividir el codigo en: folder by type (agrupa segun el tipo de fichero), se ha extendido de forma tradicional, sin embargo tiene mas sentido usar una estructura carpeta agrupando codigo segun su relacion entre si. 
La estructura del codigo depende de la embergadura del proyecto. 

Linting
Se encarga de revisar el codigo y avisar en caso de que existan errores. Dado que escribimos javascript, ESLint es la herramienta que se encarga de hacer la revisión de codigo. Podemos inicializar la revision de codigo con ESLint. 
```
'E:\REACT\wishlist>npm install -g eslint
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: 'eslint@9.0.0',
npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
npm WARN EBADENGINE   current: { node: 'v19.9.0', npm: '9.6.3' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: '@eslint/eslintrc@3.0.2',
npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
npm WARN EBADENGINE   current: { node: 'v19.9.0', npm: '9.6.3' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: '@eslint/js@9.0.0',
npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
npm WARN EBADENGINE   current: { node: 'v19.9.0', npm: '9.6.3' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: 'eslint-scope@8.0.1',
npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
npm WARN EBADENGINE   current: { node: 'v19.9.0', npm: '9.6.3' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: 'eslint-visitor-keys@4.0.0',
npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
npm WARN EBADENGINE   current: { node: 'v19.9.0', npm: '9.6.3' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: 'espree@10.0.1',
npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
npm WARN EBADENGINE   current: { node: 'v19.9.0', npm: '9.6.3' }
npm WARN EBADENGINE }

added 89 packages in 4s
21 packages are looking for funding
  run `npm fund` for details
```

E:\REACT\wishlist>'

Ejecutamos el comando npm install -g eslint. En mi caso, el init me fue directamente.
```
'E:\REACT\wishlist>eslint --init
You can also run this command directly using 'npm init @eslint/config'.
√ How would you like to use ESLint? · problems
√ What type of modules does your project use? · esm
√ Which framework does your project use? · react
√ Does your project use TypeScript? · javascript
√ Where does your code run? · browser
The config that you've selected requires the following dependencies:

eslint, globals, @eslint/js, eslint-plugin-react
√ Would you like to install them now? · No / Yes
Successfully created E:\REACT\wishlist\eslint.config.mjs file.
You will need to install the dependencies yourself.

E:\REACT\wishlist>
```

Se creará un fichero en el proyecto, con caracteristicas por defecto. En rules podremos configurar la revision de forma mas concreta. 
Ejecutamos el comando 'yarn add --dev eslint-config-airbnb'. En mi caso lo instalo todo bien. 
Metemos los plugin con: 'yarn add --dev eslint-plugin-react' y 'yarn add --dev eslint-plugin-import'.

En el commit podemos configurar el linting o en el despliegue. 

Estilo de código
Veremos herramientas que nos ayudan con el formateo del código. Ajustaremos espaciado, sangría y saltos de línea. Pretty es general en etapas de desarrollo.

Instalamos Prettier: 
```
yarn add v1.22.22>yarn add --dev prettier
warning package-lock.json found. Your project contains lock files generated by tools other than Yarn. It is advised not to mix package managers in order to avoid resolution inconsistencies caused by unsynchronized lock files. To clear this warning, remove package-lock.json.
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
warning " > eslint-config-airbnb@19.0.4" has incorrect peer dependency "eslint@^7.32.0 || ^8.2.0".
warning " > eslint-config-airbnb@19.0.4" has unmet peer dependency "eslint-plugin-jsx-a11y@^6.5.1".
warning " > eslint-config-airbnb@19.0.4" has unmet peer dependency "eslint-plugin-react-hooks@^4.3.0".
warning "eslint-config-airbnb > eslint-config-airbnb-base@15.0.0" has incorrect peer dependency "eslint@^7.32.0 || ^8.2.0".
warning " > eslint-plugin-import@2.29.1" has incorrect peer dependency "eslint@^2 || ^3 || ^4 || ^5 || ^6 || ^7.2.0 || ^8".
warning " > eslint-plugin-react@7.34.1" has incorrect peer dependency "eslint@^3 || ^4 || ^5 || ^6 || ^7 || ^8".
warning " > typescript-eslint@7.6.0" has incorrect peer dependency "eslint@^8.56.0".
warning "typescript-eslint > @typescript-eslint/eslint-plugin@7.6.0" has incorrect peer dependency "eslint@^8.56.0".
warning "typescript-eslint > @typescript-eslint/parser@7.6.0" has incorrect peer dependency "eslint@^8.56.0".
warning "typescript-eslint > @typescript-eslint/utils@7.6.0" has incorrect peer dependency "eslint@^8.56.0".
warning "typescript-eslint > @typescript-eslint/eslint-plugin > @typescript-eslint/type-utils@7.6.0" has incorrect peer dependency "eslint@^8.56.0".
warning "typescript-eslint > @typescript-eslint/eslint-plugin > ts-api-utils@1.3.0" has unmet peer dependency "typescript@>=4.2.0".
[4/4] Building fresh packages...
success Saved lockfile.
success Saved 1 new dependency.
info Direct dependencies
└─ prettier@3.2.5
info All dependencies
└─ prettier@3.2.5
Done in 12.89s.
```

Y copiamos la dependencia del PowerPoint que nos facilita. Prettier tiene una opción de poder activar o desactivar puntos y comas, y demás comodidades a la hora de programar. Instalamos edit.config con la extensión del Visual Studio Code.
Es muy sencillo de generar. 


Dev Tools:
Nos focalizamos en Chrome. Están las librerias como React Developer Tools para Chrome. En este panel, podremos ver el arbol DOM de React. 


Render
Como se pinta nuestra aplicación en pantalla. 
* Componentes
* Jsx
* Estilo
* Renderizado dinámico

Componentes
El componente recibe unos datos, los opera y devuelve una vista. Una forma de declararlo, es como funcion Jsx. Los parametros que reciben las funciones se llaman props o propiedades. Cuando instanciamos el componente, se hace por jsx tambien. Normalmente un componente usa a otro. 
Otra forma sería una clase que hereda de Component. Solamente con un metodo render que devuelva un jsx, ya tendriamos el componente. La mayoria de casos se usa componentes funcionales. 

Jsx
Escogemos que elementos se integran en la interfaz y cuales estan al lado de unos y de otros. Jsx mejor que html, por el acoplamiento de lógica y estructura, para ser vistas dinámicas mejores. Jsx es una extensión de Javascript. 
El uso del atributo class, sería className en jsx. En casi todos los eventos, varían a html. En jsx es necesario siempre cerrar las barras. 
Esta herramienta la usaremos para relacionar componentes entre sí. 
* Expresiones: jsx con los corchetes indica cuando empieza y acaba la expresión.
* Operaciones: podemos hacer operaciones matemáticas.
* Funciones: podemos llamar funciones.
* Atributos: podemos obtener los atributos de los elementos html.
* Operador de Spread: si hacemos spread de un objeto, dentro de los atributos, se van a extender y se van a casar con los atributos del jsx para usarlos con atributos html.
* Fragmentos: es un elemento jsx que nunca sera un html. Se instancia con React.fragment o con <>. Usamos el fragmento para englobar varios elementos html.

Estilos:
La forma mas basica es importando un fichero css. Para garantizar la encapsulacion de estilos se usan muchas tecnicas. La estrategia se llama BEM (block element modificator). Las clases siempre se nombran con estas tres piezas combinadas. Hay una libreria llamada classNames que es para combinar clases de forma más amigables. 

Renderizado dinámico:
* Condicionales
* Switch
* Loops (bucles)

Condicionales: 
En los componentes se pueden utilizar estructuras condicionales. Para compactar el codigo, se pueden incluir los condicionales en expresiones de Jsx. Si hay un false, no pinta nada y si es true, evalua la siguiente expresión. 

Switch: 
El switch es el básico que evalua el contenido de alguna variable. De una forma mas compacta podria ser con estructuras de && y ||. 

Loops (bucles):

.map()= es un metodo de javascript, que recorre el array devolviendo otro array con los elementos modificados del primer array. Transforma elementos de una array a elementos Jsx. 

.filter()= produce una seleccion de elementos del primer array que cumplen cierta condicion. 

Es mejor filtrar mejor antes.

El uso de claves es muy importante al renderizar arrays con React, para identificar cada uno de los elementos. Si pinta un null, no pinta absolutamente nada. 
Para hacer el ejercicio, he creado otro repositorio Whislist. 

Ejercicio subido en otro repositorio. 

Propiedades de los componentes:

Una función tiene muchas similitudes con un componente de REACT. Una funcion pura es aquella que su respuesta se condiciona por sus parametros de entrada. 
- Es determinista
- Facil de simular
- Facil de optimizar

Intentamos que el componente sea una función pura. En el jsx podemos acceder a las propiedades. En las clases. las propiedades se incluyen en el this, cuando heredan de Component.

Prop Types:
Especifica cada una de las prop que tipo deberian tener, y si usamos un componente de forma incorrecta veremos errores notificando el mal uso. Con estas propTypes podemos definir los tipos que reciben el componente en REACT. De la misma forma, con required. Podemos poner en los componentes, propiedades por defecto. 

Estado: 
El resultado del Jsx puede estar condicionado por el estado del componente. Se lanza un nuevo render cuando se cambia las props y el estado. El estado se puede cambiar por interacciones del usuario por la interfaz (click, change...). La forma mas sencilla es mediante el hook de useState. Habilita la gestión del estado.Nos facilita las modificaciones de variables de estado. 

Ventajas en delegar el estado en el padre: 
Los hijos dejan de tener la responsabilidad de portar con los props. Modificamos los estados de los hijos con los callbacks. 

Ciclo de vida componente:
- Si recibe nuevas propiedades, habra nuevos eventos en el ciclo de vida del componente.
- Puede cambiar su estado recurrentemente, para finalmente desmontarse.

Se produce la llamada al constructor, antes de nada, y luego tres elementos básicos.
* componentDidMount()-> se lanza cuando se ha montado el componente.
* render()-> se volvera realizar despues de los props y seteado el estado
* componentWillUnmount()->se lanza cuando finaliza la vida del componente
* componentDidUpdate()->se lanza tras el update
* shouldComponentUpdate()->se busca si vale la pena un nuevo ciclo de renderizado.
* getDerivedStateFromProps()->actualiza el estado interno a medida de las propiedades activas.

useEffect() habilita a los componentes funcionales su ciclo de vida. 
  

# REACT INTERMEDIO
- Procesamiento y renderacion clasica de la web
- Aplicacion de pagina unica o SPA
- Ajax
- XMLHttpRequest
- Api de Fetch

 Procesamiento y renderacion clasica de la web:
Tenemos un servidor estático, luego una aplicacion a nivel de servidor y luego un usuario que hace una peticion al servidor. Las desventajas de este modelo es que el procesamiento recae en el servidor, por lo que si necesita muchos recursos no es lo ideal. 

SPA 
Es un conjunto de Js y de html el servidor solo ofrece unos cuantos recursos basicos necesarios. Gracias al cache, el servidor no necesita recargar de nuevo los recursos. Es interesante en servidores pequeños. Surgen los SPA para que el cambio de la pagina no se tenga que recargar completamente. Ajax es un conjunto de tecnologias que recupera datos del servidor, al nivel del navegador y cargarlos al html. Producimos un html y lo inyectamos a la web. 

XMLXttpRequest
Nos permite hacer peticiones al servidor y procesarlas. La respuesta siempre mas sencilla es la del html. Ha quedado anticuado.

Api de Fetch
Es una funcion que permite hacer lo de la clase anterior pero con modificaciones: la respuesta sera en Json. Puede trabajar la respuesta de forma mas analizada. Devuelve promesas (son objetos de js que nos devuelven finalizacion de un proceso) que se resuelve de forma asincrona. Podemos hacer un catch que recoja las excepciones u errores (como el 400). 

- Como realizar un GET usando Fetch
- Como realizar un POST usando Fetch
- Objeto init: Las operaciones de la petición
- Cabeceras y respuesta de la peticion

Realizar GET con Fetch
Cualquier GET se consta de una cabecera, peticion y una serie de parametros. Se realizan de forma asincrona y siempre devuelve una promesa. 

Realizar POST con Fetch
El comportamiento es de un formulario basico, consta de lo mismo que el get añadiendo el body, que nos permite mandar archivos binarios, arrays... El post no tienen tamaño limitado. El body siempre tiene que ser una cadena. Hay que indicar la cabecera en Json para que el servidor lo "entienda". 

Objeto init:
Podemos pasarle una serie de atributos que modificar el comportamiento de Fetch, que puede ser total. 

Cabeceras y respuesta de la peticion:
Las cabeceras nos permite comunicar al servidor el tipo de contenido, la politica de cache e incluso propiedades. Tambien se introduce headers que nos permite funciones append(),entries() o has(). 

- ¿Que es servicio front-end?
- Modelos entidades
- Definiendo servicios

¿Que es servicio en front-end?
Los servicios del back end son un punto de consumo para el front end, de forma controlada, por lo que accede a la base de datos manteniendo al maximo la seguridad. Los servicios front end son un serivicio intermedio entre back end y la aplicación, que coge informacion del back end y la transforma en informacion util en la aplicacion. 

Modelo de entidades
Un servicio debe deovlver un modelo, que es una representacion abstracta de una entidad. En front end, los modelos varian, pueden ser una abstraccion de propiedades y metodos para renderizar. DTO es un data tranfer object, que se utiliza para transferencia.  Hay un metodo toDTO que podemos crear para tranformar el modelo cuando sea necesario. 
Un servicio es un contenedor de una llamada a Fetch, que los parametros es una inyeccion. El body podemos pasarlo a json directamente. Es importante invertir tiempo en el GET y POST.  

- Uso modelos en servicios
- Creacion de pseudo-interceptores

Uso de modelos en servicios:
Podemos hacer un get e inyectar una url en la api, que puede responder con promesas. Podemos incluso crear nuevos objetos con el post y procesar la respuesta. Es una solucion muy util para crear o modificar objetos.

Creacion de pseudo-interceptores
Un interceptor se introduce en una peticion que realiza un proceso, que procesa la respuesta. El metodo request es coger el interceptor que recibe la respuesta, y gestiona segun el comportamiento de la respuesta. Fetch siempre avanza. 

Ejercicio: 
create-react-app nos da un monton de plantillas ademas. 
Creación del proyecto: 

![image](https://github.com/LauraMartinezMartins/openWebinars/assets/153906212/deb1242c-e635-46fb-94f8-0c9129c79244)


Podemos tener ficheros por tipo o por caracteristica. Una pagina es un contenedor de componentes. 
Normalmente se ordena por tipo, es mas facil de esta forma saber que rol tiene. 

Todos los servicios heredan de los servicios base. La idea del request que sea mas generico, que es lo mejor de la aplicacion. El post y get deben ser interfaces sencillas. 

Simplificamos la respuesta para que encaje con el front-end. 

- Enrutamiento en una SPA
- Introduciendo react-router
- Switches y rutas react-router
- Navegacion basica por la aplicacion

Enrutamiento en una SPA

En verdad es un falso enrutador que no recarga la pagina, por lo que en verdad no hace la navegación. Si queremos la direccion de otra pagina, ocultara la primera pagina y mostrara la segunda. Todo esta simulado. 

React-router

Es una libreria por REACT, que se integra con otras librerias, que tiene conexion con Redux que se comparten historial y conexion. Es el mas usado. 

Tenemos un switch que nos deja hacer el enroutamiento de distintas paginas de forma optima. 

'''<Switch>
    <Route path="/pagina1">
        <Pagina1 ></Pagina1>
    </Route>
    <Route path="/pagina2">
        <Pagina2 ></Pagina2>
    </Route>
    <Route path="/pagina3">
        <Pagina3 ></Pagina3>
    </Route>
    </Switch>'''
Compara la barra de navegaciones con los paths. El router tiene prioridad, asi que lo hara desde arriba hacia abajo. 

Tambien existe la propiedad exact, que solo hace match si es exactamente el path. Podemos anidar switches, por lo que podemos tener routing dentro de otro routing. 

Navegacion basica por la aplicacion
La forma más básica es mediante Link, de forma que creamos un enlace que nos permite ir a cualquier localizacion de nuestro router. Por lo que solo cambia la url y recarga la pagina. 

El link tiene un path, search (parametros en url), hash (como search pero con hash) y un estado (se inyecta como una propiedad). 

Podemos usar NavLink para saber cuando esta seleccionado por ejemplo.

- Navegacion en una aplicacion web
- Uso historial de navegacion
- React router e historial
- Navegacion programatica en react router

Navegacion en una aplicacion web

Funciona por enroutamiento: muestra y oculta las rutas, y coincide el nombre de la ruta con expresion regex que selecciona texto.
Navegacion: permite mandar y recuperar parametros search, hash.
Gestion del historial: permite volver en la pagina. 

Uso historial de navegacion

Dispone el navegador una serie de metodos para navegar por el historial con History.Podremos hacer acciones frecuentes como añadir y modificarlo. Con back y go.

Los states podemos desplazarnos a un punto dado y generar una entrada al historial, esto se hace con pushState. Se añade un estado, titulo y una ruta. replaceState nos permite reemplazar la entrada. 

Cada cambio de estado lanza un evento y cambia la ruta. 

React router e historial

BrowserRouter implementa gestion de la API History. Link funciona como history.pushState y Redirect como history.replaceState. Estos cambios esta gestionado por history. 

Navegacion programatica en react router

Desplazarnos de una pagina a otra sin que el usuario tenga que pulsar un boton, con Link o NavLink. El hook useHistory da acceso al historial del componente. 

Portales en REACT
- Problema de jerarquia
- Portal como solucion
- Propagar eventos

 Problema de jerarquía
 Un modal siempre deberia estar arriba y tener mas cercania a la pantalla y que la pagina pase caracteristicas al modal. El portal nos permite crear acceso a un componente superior de informacion a un componente inferior. 

 Propagar eventos en portales
 Se comporta como un componente REACT norma. Si ocurre un click, se podra capturar con el modal. 

 - Origen HOC
 - HOC para preocupaciones transversales
 - Uso de los HOC
 - Convenciones y consideraciones

Origen HOC

Basados en funciones de alto orden y HOF en funciones que devuelven funciones. Ejemplos podria ser debounce o throttling, por tanto HOC es un componente que encapsula otros y devuelve uno nuevo como funcion. 

HOC para preocupaciones transversales

Estas funcionalidad pueden afectar otras partes de la app llamadas preocupaciones transversales, que son la base de los aspectos en programacion orientada a aspectos. Se solucionaban con mixins. 

Uso de los HOC

Un HOC puede servbir para introducir propiedades comunes, tambien para los estados compartidos. Casos frecuentes con loaders, autenticaciones..

Convenciones y consideraciones
Con la composicion podemos encadenar HOCs y acumular las logicas agregadas. Los HOC no deberían de afectar al funcionamiento del componente. 

- Uso de los render props
- Render props para preocupaciones transversales
- Ejemplo de render props
- Convenciones y consideraciones

Uso de los render props

El componente representa un proveedor, pero su renderización es fija, por lo que su reusabilidad es minima. Se desliga la logica con render props. 

Render props para preocupaciones transversales

También pueden ocuparse de las preocupaciones transversales. La solución seria de ir arriba hacia abajo en lugar de al reves. Las HOCS y render props se complementan. 

- Componentes funcionales y estado
- Hooks básicos
- Ciclo de vida con Hooks

Componentes funcionales y estado

Antes, los componentes de clase eran los únicos que tenían estado. Los hooks introducen funcionalidades de estado y ciclo de vida y su funcionalidad es similar a la de un componente de clase. 

Hook básicos

* Hook de estado: useState nos permite conservar un estado memorizado y modificable mediante una función setter devuelta. La variable puede guardar cualquier valor, y podemos crear cuantas nuevas variables de estado necesitemos
* Hook de efecto: realiza cambios adicionales relacionados después de realizarse una renderización. Ejecuta una funcion cuando una variable de estado o props cambia. Si devolvemos una función dentro del callback a ejecutar esta funcionará como función de saneamiento
* Hook de contexto: permite acceso de lectura al valor actual de dicho contexto

Ciclo de vida

Los componentes funcionales pueden sustituir también el ciclo de vida de los de clase. La función devuelta por el primer hook realiza la función del componentWillUnmount

- La cascada de props
- Comunicación horizontal del estado
- Soluciones para centralizar

La cascada de props
El paso del estado de un componente a otro se realiza verticalmente y hacia abajo por cascada. El uso de callbacks en la cascada nos permite subir el estado de un componente inferior a otro superior

Comunicación horizontal del estado
En algunos casos el ascenso del estado es insuficiente para lograr una comunicación entre componentes

Soluciones para centralizar

El navegador pone a nuestra disposición soluciones razonables para aplicaciones con una comunicación leve como cookies y localStorage. También es posible encontrar soluciones específicas para la estructura de nuestra app como Redux o Flux

Gestión del estado

- El estado centralizado
- Patrón Redux
- Redux con hooks: useReduce

Patron Redux:

Existe una única fuente de verdad llamada store o almacén y todo el estado de la aplicación se encuentra en ella. El estado de las aplicaciones Redux es de sólo lectura y cambiarlo depende de seguir el flujo interno. Los cambios en el estado se realizan con funciones puras que devuelven un nuevo estado de la aplicación. 

Redux con hooks: useReduce

El hook useReducer es una alternativa al hook useState que permite utilizar un reducer para gestionar el estado. Al invocarlo recibe como entrada un estado inicial y una función reductora y devuelve el estado y una función para ejecutar las acciones. El hook useReducer es una alternativa al hook useState. Al invocarlo recibe como entrada un estado inicial y una función reductora y devuelve el estado y una función para ejecutar las acciones.

- Favorece la cascada
- Mantén los componentes puros
- Centraliza si es necesario

Favorece la cascada:

Seguir la cascada de props es una forma habitual de evitar que la aplicación tenga un estado descontrolado.

Mantén los componentes puros

Un componente puro es aquel cuya renderización sólo depende de las propiedades. Se basa en el concepto de programación funcional de función pura, aquella función cuyo resultado depende exclusivamente de sus parámetros. La ventaja de los componentes puros es que son puramente deterministas, no introducen efectos secundarios y su renderización es optimizable

El componente sólo se renderiza si el name cambia.

Centraliza si es necesario:

La mayor parte de las veces sabremos que es necesaria alguna estrategia de centralización cuando encontremos comunicación horizontal.

#REACT avanzado

- Componentes funcionales vs de clase
- Motivaciones adicionales
- Funcionamiento interno de los hooks

Componentes funcionales vs de clase

Los componentes de clase van en contra de la filosofía React de nunca mutar debido a la existencia del this. El ciclo de vida almacena lógicas combinadas y difíciles de separar.

Motivaciones adicionales

El uso de this, aparte de contraproducente, funciona de forma distinta en JS que en otros lenguajes, se pretende huir de su uso. El uso de Hooks es más parecido al uso inicial propuesto por el equipo de React. React se aprovecha del concepto de closure de Javascript para crear sus hooks. Cada vez que es llamado, useState asigna un valor inicial o actual a su variable, si no retorna la función interna que cambie su estado.


Manejo del estado con hooks

- Estado en componentes funcionales
- El Hook useState
- El Hook useReducer

Estado en componentes funcionales:

El estado en los componentes funcionales depende de un Hook y no está asociado a this. Un Hook de estado se comporta como una función idempotente, es decir, en sucesivas llamadas devuelve siempre el mismo valor (El estado en sí). Los cambios en el estado dependen de una función arrojada por el propio Hook que actúa cambiando el valor interno. Para gestionar el estado podemos usar useState o useReducer. 

El Hook useState

La variable puede guardar cualquier valor, y podemos crear cuantas nuevas variables de estado necesitemos. Podemos introducir el valor directamente en la función setter o una función que recibe de parámetro de entrada el valor actual de la variable de estado dada. Un componente funcional puede tener cualquier número de estados usando useState y estas variables pueden almacenar cualquier tipo. 

El Hook useReducer

El Hook useReducer almacena un estado en forma de objeto, donde cada clave almacena un estado concreto, más similar al state de componentes de clase. La forma de modificar estos estados es a través de un reducer, al igual que en Redux, e invocando acciones con el método devuelto “dispatch”. 

Ciclo de vieda con hooks

- El Hook de efecto
- Ciclo de vida y hook de efecto
- Uso de useLayoutEffect

El Hook de efecto

Ejecuta la función dada cuando se cumple una condición en un array de condiciones, esto es, cuando una de las variables de estado o props en este array cambia. Si devolvemos una función dentro del callback a ejecutar esta funcionará como función de saneamiento, es decir, se ejecutará al desmontar el componente para sanitizar nuestros efectos.

Ciclo de vida y hook de efecto

El hook de efecto puede utilizarse para imitar un componentDidMount, para ello sólo debemos de especificar un array de condiciones vacío. El hook de efecto puede utilizarse para imitar un componentDidUpdate que se ejecute siempre, para ello no especificamos ningún array (Queda undefined).

Uso de useLayoutEffect

Se ejecuta después del render, en vez de síncrono tras las actualizaciones del DOM. Para los casos en los que medimos el DOM, o queremos aplicar una modificación directa sobre la estructura y evitar el “flicker” al usuario tenemos useLayoutEffect. Sólo cambia el momento en el ciclo de vida en el que es llamado.

Construyendo tus hooks

- Aprovechando los Hooks
- Extrayendo un nuevo Hook
- Usando un nuevo Hook

Aprovechando los Hooks

Convertir en un hook propio  nos permite tener una colección de Hooks para nuestra aplicación que nos permita compartir lógicas concretas de nuestra aplicación. Todos los hooks empiezan con la palabra "use". 

Extrayendo un nuevo Hook

La capacidad para crear todas las funciones manejadoras de ciclo de vida que queramos nos permite extraer la funcionalidad atómicamente para dar disponibilidad a cualquier otro componente.

Usamos un arrow para acceder al contexto de React. El ciclo de vida referenciado en el interior del closure se unirá al resto de manejadores de ciclo de vida referenciados en el componente donde lo importemos. En el return de nuestros Hooks podremos devolver cualquier número de propiedades de estado o incluso setters y funciones.


Introducción a Redux

- El estado centralizado
- Patrón Redux
- Redux con react-redux

Patrón Redux

El estado de las aplicaciones Redux es de sólo lectura y cambiarlo depende de seguir el flujo interno. Los cambios en el estado se realizan con funciones puras. 

Redux con react-redux

Versión extensible, optimizada y encapsulada que nos permite introducir el patrón de forma rápida y sencilla en cualquier app. 

Selectores de porciones del estado

- Configuración del store
- Porciones de reductores
- Conectando y usando porciones

Configuración del store

Usamos la función configureStore. 

Porciones de reductores

Está orientada a crear una mayor separación conceptual, no técnica. Cada porción define unos reductores propios y un estado inicial. 

Conectando y usando porciones

Podemos conectar cualquier número de porciones al reductor general de nuestra store, identificándolas con una clave en el objeto

Middlewares y debug del store

- ¿Que es un middleware?
- Aproximaciones para Redux
- Solución final

¿Qué es un middleware?

Es un código que se ejecuta entre la solicitud y la respuesta del framework. Su objetivo es permitir registrar en el log
las acciones y los cambios de estado. 

Solución final

Utilizando un HOF podemos recibir el store y aplicar más de un middleware distinto sobre el store. Cualquier función que definamos como el HOF anterior podrá ser aplicado sobre la store usando la función applyMiddleware de Redux. 

Acciones asincronas con redux thunk

- La limitación de Redux
- ¿Qué es un thunk?
- Aplicando Redux thunk con slices

La limitación de Redux

No podemos actualizar el estado del store con el resultado de una acción asíncrona. Es necesario crear algún tipo de estrategia que sea compatible con realizar cambios en el store en reacción a peticiones asíncronas.

¿Qué es un thunk?

Llamamos thunk a cualquier función que sea devuelta por un HOF. La intención del uso de thunks en Redux es poder resolver la asincronicidad de forma ordenada y mantener sincronizada la store.

Aplicando Redux thunk con slices

La librería más usada es redux-thunk. Cuando queremos usarla con slices la documentación al respecto es más escasa.

Gestion de errores en los componentes

- Fuentes de error habituales
- Captura con boundaries
- React developer tools

Fuentes de error habituales

Aglutinar diferentes funcionalidades separadas en un mismo componente es una fuente importante de error y va en contra de la filosofía de componentización de React. Es mejor crear componente que aloje componentes que aislen funcionalidad y favorecer las props. Puede albergar cualquier número de componentes.

El estado de React es inmutable. Tratar los cambios del estado como síncronos, setState en asincrona. 

Captura con boundaries

Para solucionar errores que puedan extenderse por el arbol, React crea unos componentes especiales llamados Error Boundaries o Limitadores de Errores. Un boundary es un componente que actúa como un try-catch. Los boundaries no capturan errores de manejadores de evento, código asíncrono, renderizado por servidor o errores en el propio boundary. 

React developer tools

Es una extensión de Chrome oficial que permite inspeccionar en tiempo real el árbol de React y editar propiedades y estado. Es instalable mediante npm i react-devtools. 

![Sin título](https://github.com/LauraMartinezMartins/openWebinars/assets/153906212/c28d6484-20e9-49f5-aaf7-578a05880682)

Modo estricto de REACT

- Modo estricto en React
- Ciclos de vida inseguros
- Efectos secundarios inesperados

Modo estricto en React

Herramienta para destacar problemas potenciales en la aplicación. No produce ningún tipo de renderizacion por pantalla. Sólo funcionan en modo desarrollo, y se deshabilita en producción. 

Ciclos de vida inseguro

El modo estrico automáticamente habilita errores por consola para notificar el uso de bibliotecas de terceros.

Efectos secundarios inesperados

En la fase de render se llaman a los hooks de ciclo de vida: constructor,componentWillMount,etc. Los métodos de la fase de render pueden ser llamados múltiples veces y de forma automática por React. No se puede introducir ningún tipo de efecto secundario en estos métodos del ciclo de vida. 

Introducción a Jest

- ¿Qué es Jest?
- Configurando Jest con React
- Uso básico
- Utilización de comparadores

¿Qué es Jest?

Framework basado en la simplicidad para realizar tests y pruebas. Ejecuta los tests en paralelo, realiza los tests por prioridad teniendo en cuenta los que fallaron previamente, y los ordena por tiempo de procesamiento. Cuenta con utilidades para analizar la cobertura del código así como realizar “mocks” de nuestros datos.

Podemos instalarlo mediante npm install --save-dev jest. 

'''
E:\REACT\openWebinars\mi-app>npm install --save-dev jest

added 62 packages, removed 17 packages, changed 7 packages, and audited 1603 packages in 36s

262 packages are looking for funding
  run `npm fund` for details

8 vulnerabilities (2 moderate, 6 high)

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.

E:\REACT\openWebinars\mi-app>
'''

Utilización de comparadores

Jest se basa en el uso de expectativas y comparadores. El comparador toBe() utiliza comprueba referencias para objetos pero no valores. toEqual() para objeto sea igual a clave a clave. 

Testando el DOM generado por REACT

- Introduciendo React test utils
- Funciones importantes
- Usando jest para los tests

Introduciendo React test utils

React test utils es una librería de funciones de apoyo para testing. Se instala con el comando npm install @testing-library/react --save-dev
'''
E:\REACT\openWebinars\mi-app>npm install @testing-library/react --save-dev
npm WARN idealTree Removing dependencies.@testing-library/react in favor of devDependencies.@testing-library/react

removed 13 packages, changed 1 package, and audited 1590 packages in 7s

258 packages are looking for funding
  run `npm fund` for details

8 vulnerabilities (2 moderate, 6 high)

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.

E:\REACT\openWebinars\mi-app>

'''

Funciones importantes

act()->renderiza componentes. 
simulate-> simula la ejecución de un evento en un nodo del DOM.


Minimizando el numero de renderizados

- El renderizado en React
- Usando shouldComponentUpdate
- Virtualización de listas

El renderizado en React

React mantiene un DOM virtual paralelo al DOM del navegador. Tras cada cambio en el DOM React decide qué renderizar de nuevo, este proceso es llamado reconciliación y es pesado. Para decidir que renderizar se usa  shouldComponentUpdate. Por defecto React.Component de este ciclo de vida siempre devuelve true.

Realiza los siguientes pasos por cada nodo:

1. Llama a shouldComponenteUpdate y mira si devuelve true.
2. Revisa si hay nodos inferiores cuyo SCU devuelva true.
3. Compara el nodo en el DOM actual con el nuevo DOM.


Usando shouldComponentUpdate

ShouldComponentUpdate es un método que recibe las nuevas propiedades y el estado y devuelve un booleano si indica que el componente debe de ser actualizado. 

Virtualización de listas

La comprobación de listas renderizadas de muchos elementos es una de las tareas más lentas.  Soluciones como paginar el contenido, ya sea explícitamente por páginas o usando scroll infinito. 

Memorizacion: cacheando funciones

- Definición de memoización
- Uso con hooks
- Hooks de memorización

Definición de memoización

Es una técnica de optimización que almacena en un caché el resultado de una función a ser devuelto si los parámetros no han cambiado. Si no cambian los parámetros la segunda llamada será casi instantánea. 

Uso con hooks

La memorización implica un proceso por debajo que aumenta la complejidad a la hora de la ejecución. React.memo crea un
componente memoizado; Si las props no cambian el componente devolverá su valor previo. Consecuencias del uso de React.memo es que tenemos que asegurar que el componente sea puro. 

Hooks de memorización

useMemo()->hook para memorizar funciones que impacten en el rendimiento profundamente.
useCallback()->crear callbacks para ser pasados a los componentes hijos. 

Code-splitting y tree-shaking

- Tamaño de bundle
- Estrategias de reducción
- Reducción por code-spliting
- Reducción por tree-shaking

  Tamaño de bundle

Nuestro transpilador y nuestro bundler crearán una versión optimizada para el despliegue. Esta versión tendrá un cierto peso, basado en el peso de nuestro código, nuestras dependencias en si han sido minimizadas. El tamaño final es el tamaño de bundle o empaquetado.
Para poder analizar nuestro bundle y ver la distribución del peso, podemos instalar source-map-explorer.

'''

E:\REACT\openWebinars\mi-app>npm install --save-dev source-map-explorer

added 12 packages, and audited 1602 packages in 8s

259 packages are looking for funding
  run `npm fund` for details

8 vulnerabilities (2 moderate, 6 high)

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.

E:\REACT\openWebinars\mi-app>

'''

Luego añadir al package.json lo siguiente:
'''
"scripts": {
    "analyze": "source-map-explorer 'build/static/js/*.js'",
  },
'''

Luego realizaremos los siguientes comandos: 

E:\REACT\openWebinars\mi-app>npm run build

> mi-app@0.1.0 build
> react-scripts build

Creating an optimized production build...

Compiled successfully.

File sizes after gzip:

  46.6 kB  build\static\js\main.c9bd7450.js
  1.77 kB  build\static\js\453.d6579b24.chunk.js
  513 B    build\static\css\main.f855e6bc.css

The project was built assuming it is hosted at /.
You can control this with the homepage field in your package.json.

The build folder is ready to be deployed.
You may serve it with a static server:

  npm install -g serve
  serve -s build

Find out more about deployment here:

  https://cra.link/deployment


E:\REACT\openWebinars\mi-app>


Y luego npm run analyze

'''
E:\REACT\openWebinars\mi-app>npm run analyze

> mi-app@0.1.0 analyze
> source-map-explorer 'build/static/js/*.js'

build/static/js/453.d6579b24.chunk.js
  Unable to map 176/4512 bytes (3.90%)
build/static/js/main.c9bd7450.js
  Unable to map 110/143782 bytes (0.08%)

E:\REACT\openWebinars\mi-app>

'''

Por lo que saldria lo siguiente: 
![Captura](https://github.com/LauraMartinezMartins/openWebinars/assets/153906212/b7fa0dbf-5b65-404c-abdd-2fb3823425d9)

Estrategias de reducción

Reducir el bundle aumenta la velocidad de carga de nuestras web-apps y por tanto incrementa su disponibilidad. Tiempo de espera superior a 2 o 3 segundos sería inaceptable. Evitar usar librerías superfluas o utilizar directamente las funciones necesarias de esas librerías.

Reducción por code-spliting

Corta el bundle en pequeños fragmentos que son cargados siempre que son necesarios, el peso total es el mismo pero el tiempo de carga es menor. 

Reducción por tree-shaking

Es la eliminación de código muerto (No usado) de nuestro código y dependencias. 

Renderizado concurrente

- El renderizado en React
- Modo concurrente

El renderizado en React

Renderiza de manera sindrona. La renderización de ciertos componentes pesados puede bloquear la interfaz de usuario. Nos asegura un cierto orden de ejecución y número máximo de ejecuciones de ciclos de vida. 

Modo concurrente

Feature experimental, comenzará con React 18 y su adopción será progresiva. Detecta componentes con mayor prioridad para renderizar. Esta prioridad también podrá ser ajustada con unas líneas de código. 






