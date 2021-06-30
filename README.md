# React Blog

Plantilla para desarrollo de blog implementada con [React](https://es.reactjs.org/), [MDX](https://mdxjs.com/) y [Navi](https://frontarm.com/navi/)

## Demo

Demo: [http://desarrollos.artikaweb.com/](http://desarrollos.artikaweb.com/)

## Como...

**Actualizar post principal,** edit `src/pages/posts/2021-06-29/bienvenidos/document.mdx` y guardar para recargar.

**Para actualizar el título del blog,** editar `src/siteMetadata.js`.

**Para actualizar bio y foto,** editar `src/components/Bio.js`.

**Para cambiar los colores del blog,** editar el `:root` bloque en `src/index.module.css`.

**Para crear un nuevo post,** agrega un nuevo directorio en `src/pages/posts` con el prefijo de la fecha de publicación, entonces cerar un archivo `post.js` dentro:

```jsx
export default {
  title: `"Lorem ipsum dolor sit amet`,
  tags: ['etiqueta 1', 'etiqueta 2'],
  spoiler: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  getContent: () => import('./document.mdx'),
}
```

**Para establecer el número máximo de publicaciones en la página de índice,**, selecciona la `indexPageSize` propiedad del objeto exportado por `src/siteMetadata.js`.

**Para modificar el HTML generado,** actualiza `src/renderPageToString.js`.

**Para añadir páginas estáticas,** usa [`Navi.createPage()`](https://frontarm.com/navi/reference/declarations/#createpage), [`Navi.createSwitch()`](https://frontarm.com/navi/reference/declarations/#createswitch) y [`Navi.createRedirect()`](https://frontarm.com/navi/reference/declarations/#createredirect). Por ejemplo, revisa `src/pages/about/index.js`. Si creas una página, recuerda agregarla al conmutador raíz en `src/pages/index.js`.


## Herramientas

- [React](https://reactjs.org) renderiza la UI
- [MDX](https://mdxjs.com) convierte el markdown en componentes de React
- [Navi](https://frontarm.com/navi/) maneja el enrutamiento y crea archivos HTML estáticos para cada ruta
- [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html) construye los activos de la aplicación y proporciona el servidor de desarrollo

