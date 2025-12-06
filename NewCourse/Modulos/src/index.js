/* 
	📌 Named Imports
	Podemos importar variables y funciones que han sido exportadas mediante la palabra "export".
	Podemos importarlas con el mismo nombre o podemos usar un alias usando la palabra "as".
	Normalmente todos los import se establecen al inicio del documento.
*/
import { nombre1, obtenerPosts as obtainPosts, nombre2 } from './namedExports.js';
console.log('Mi nombre es ' + nombre1 + " y tambien " + nombre2);
console.log(obtainPosts());

/* 
	📌 Namespace Imports
	Podemos importar todas las variables y funciones que fueron exportadas 
	con un export dentro de un objeto.
*/
import * as datos from './namedExports.js';
console.log(datos.nombre1);
console.log(datos.nombre2);
console.log(datos.obtenerPosts());

/* 
	📌 Default Imports
	Los default imports no utilizan llaves y podemos ponerles el nombre que queramos.
*/
import obtenerUsuario from './defaultExport.js';
console.log(obtenerUsuario());

/* 
	📌 Empty Imports
	Carga todo el codigo pero sin hacer ningun objeto.
*/
import './emptyExport.js';

// No podemos acceder a las variables definidas en el archivo emptyExport.
// Si las necesitamos tenemos que que exportarlas.
import { correo } from './emptyExport.js';
console.log(correo);

//para crear un solo fichero para después importarlo en el html puedes ejecutar en la raiz:
//  npx rollup src/index.js -o public/rollup.js -f es
// o si tienes un file de config (rollup.config.js): npx rollup -c
// o si tienes configurado al package.json:
	// "scripts": {
	// 	"build": "rollup --watch --config"  //el watch hace que se quede compilando todo el rato
	// },
// npm run build
