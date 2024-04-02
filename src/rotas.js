import ListarCategorias from "./componentes/categorias/ListarCategorias";
import ListarPosts from "./componentes/posts/ListarPosts";

const rotas = [
    {path: "/", callback: () => ListarCategorias()},
    {path: "/posts/:category_id", callback: (category_id) => ListarPosts(category_id)},
    {path: "/", callback: () => ListarCategorias()},
];

export default rotas;