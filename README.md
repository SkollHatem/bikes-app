# Vite - ReactJs

## Stack de tecnologias

Para este reto las soluciones son diversas sin embargo decidi optar por [ViteJs](https://vitejs.dev/) con React en lugar de [NextJs](https://nextjs.org/), debido a que el look&feel no seria tomado en cuento siendo uno de los mayores fuertes de NextJs con sus sistema de layouts.

## Estructura y codigo

Se utilizo [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) como estructura de organizacion sin embargo esta puede variar de acuerdo a la necesidad, es una forma limpia de segmentar porciones de codigo y hacerlas reutilizables. Tambien se agrego [ESLint](https://eslint.org/) y [Prettier](https://prettier.io/) para mantener reglas y un formato de codigo legible y escalable bajo una normativa estandar.

## Preparacion de ambiente de desarrollo

- instalar dependencias
    ```bash
    # npm
    npm install
    ```
- Para iniciar el servidor de desarrollo:
    ```bash
    # npm
    npm run dev
    ```

Esto lanzara el servidor de desarrollo en su navegador en la siguiente url [http://localhost:5173](http://localhost:5173)


# Posibles mejoras

Se pueden aplicar muchas cosas dependiendo del ambito desde el que se evalue este reto sin embargo estas son algunas cosas que yo agregaria para hacerla mas robusta.

## Herramientas

Añadir [Docker](https://www.docker.com/) puede ser de gran ayuda al momento del despliegue y esto ayudaria a una mejor implementacion. Para este reto pense en usar [Docker Compose](https://docs.docker.com/compose/) para levantar un servidor con [Serve](https://www.npmjs.com/package/serve) y servir de esta forma la data dummy pero me parecio algo excesivo.

## Testing

Para el manejo e2e quedaria muy bien [Cypress](https://www.cypress.io/) ya que tiene un gran manejo que se acopla muy bien a Atomic Desing para la prueba de componentes y posee extensiones para ejecutar las pruebas e2e muy facilmente desde entornos de CI

## Librerias

Viendo la app como un servicio de ecommerce a una escala más pequeña, podria ser de gran ayuda [TanStack Query](https://tanstack.com/query/v3/) con su manejo de cache y refresco de data por intervalos que a su vez evitaria el uso de manejadores de estado global como [Redux](https://redux.js.org/)






