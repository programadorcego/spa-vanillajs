import ListarCategorias from "./componentes/categorias/ListarCategorias";
import ListarPosts from "./componentes/posts/ListarPosts";
import EditarCategoria from "./componentes/categorias/EditarCategoria";

const rotas = [
    {path: "/", callback: () => ListarCategorias()},
    {path: "/category/edit/:id", callback: (id) => EditarCategoria(id)},
    {path: "/posts/:category_id", callback: (category_id) => ListarPosts(category_id)},
    {path: "/", callback: () => ListarCategorias()},
];

export default rotas;