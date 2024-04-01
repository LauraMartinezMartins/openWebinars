# REACT
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
