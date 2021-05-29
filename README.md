# Hackathon Nuwe v3 👩‍💻👨‍💻

En esta Hackathon he decidido realizar la sección de Frontend haciendo uso para ello de tecnologías como ReactJs y NextJs.

## Descifrando las pistas iniciales

Antes de comenzar con el reto de desarrollo Frontend he tenido que descifrar una serie de pistas a fin de obtener la contraseña que diera acceso al reto. A continuación, se detalla la forma en la cual he abordado este reto:

- Para la obtención de la primera pista he decidido filtrar los datos proporcionados para unicamente quedarme con aquellos en los que el last_name fuera Nuwe. Procediendo a contar despues el número de elementos que conformaban el array.

```html
const datosFiltrados = mockData.filter((element) => element.last_name
==="Nuwe"); const primeraPista = datosFiltrados.length;
```

- En el caso de la segunda pista, he partido de los elementos filtrados en el paso anterior para quedarme solo con el primer elemento del array. Despues mediante una expresión regular me he quedado unicamente con los números que conformaban el código identificativo.

```html
const segundaPista = datosFiltrados[0].id.replace(/\D/g,'');
```

- Para la última pista, he hecho uso de la función reduce. Mediante esta función he calculado el número máximo de la primera parte de las IPs en las cuales el objeto no tuviera mascota.

```html
const datosSinMascota = mockData.filter((element) => !element.pet; const
terceraPista = datosSinMascota.reduce((accumulator, currentValue) =>
Math.max(accumulator, currentValue.ip.split(".")[0]),0);
```

Consiguiendo de esta forma la siguiente contraseña: **9-129873-248**

## Primera parte

Como he mencionado anteriormente para la realización de esta parte he hecho uso de las tecnologías ReactJs y NextJs. Además, a fin de mantener un mismo formato a lo largo de todo el proyecto y validar la calidad del código desarrollado he configurado en el proyecto los paquetes eslint (haciendo uso del estilo Standard) y Prettier. Tambien he puesto Husky para que se verifique el estilo del código antes de poder realizar cualquier commit.

Para la gestión del SEO he uso de Next-seo configurando así los metadatos necesarios para optimizar el posicionamiento en buscadores.

Como paquetes adicionales a los mencionados anteriormenete, tambien he hecho uso de react-hot-toast para mostrar mensajes pop up al usuario cuando los datos introducidos no resulten correctos o para informar, por ejemplo, al usuario de que ha de introducir un nombre de usuario antes de realizar la busqueda o que el nombre de usuario introducido no existe.

Tambien he empleado el paquete react-coding-skeleton para intentar proporcionar una mejor experiencia de usuario. Para ello se enseña al usuario en que secciones deberian aparecer los datos solicitados.

### Estructura del proyecto

La estructura del proyecto es la siguiente:

- **components**: Directorio donde se almacenan todos los componentes desarrollados y de los que se nutre la aplicación.
- **pages**: Directorio por defecto creado por NextJS a fin de gestionar las diferentes páginas que componen la aplicación.
- **public**: Lugar donde se recogen los recursos públicos de la aplicación como imágenes, iconos,...
- **styles**: Carpeta donde se recogen los aspectos comunes al estilo general de la aplicación. En este caso aqui se recogen los colores principales que componen la aplicación y las fuentes a utilizar de forma general. De esta forma realizar cambios generalizados sobre la aplicación resultaría más sencillo.
- **utils**: Carpeta en la cual se recogen los archivos con funciones o constantes a utilizar por toda la aplicación. De forma que las funciones propias del negocio resulten más aisladas.
- **pistas**: Código correspondiente a la sección explicada anteriormente.
- **resources**: Carpeta que contiene los recursos proporcionados en el hackathon.

### Conexión Github

Para la recuperación de datos he hecho uso de la REST API pública ofrecida por Github. En concreto, he hecho uso de dos endpoints:

- api.github.com/users/{nombre de usuario}: Para recopilar información propia del usuario como su avatar, el nombre de usuario, el número de followers,...
- api.github.com/users/{nombre de usuario}/repos: Para obtener la información referida a los repositorios del usuario. A este endpoint solo se llama si previamente se verifica que existe el usuario, a fin de minimizar el número de llamadas. De este endpoint se extrae información como el nombre del repositorio, el código identificativo o la descripción en caso de contener.

## Segunda parte

En esta parte, además, he añadido vistas para realizar el login y el registro del usuario. Al no existir una parte backend asociada para gestionar estos procesos, he hecho uso del local storage. Mientras que para mantener la sesión abierta he hecho uso de cookies. Es decir, si el usuario accede a la seccion main de la aplicación sin haberse logueado antes se le redirigirá a la sección del login y viceversa.

Para realizar el registro, el usuario unicamente ha de introducir un nombre de usuario valido y una contraseña. En cuanto al nombre de usuario, esté no debe existir en la lista de usuarios disponibles, sino se mostraría un pop up de error. Mientras que para la contraseña no se han contemplado restricciones pero se guarda encriptada a fin de mantener la seguridad de los usuarios.

### Despliegue

Para el despliegue se ha hecho uso de la plataforma **Vercel**.
