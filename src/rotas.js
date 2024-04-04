import ListarCategorias from "./componentes/categorias/ListarCategorias";
import ListarPosts from "./componentes/posts/ListarPosts";
import EditarCategoria from "./componentes/categorias/EditarCategoria";
import EditarPost from "./componentes/posts/EditarPost";

const rotas = [
    {path: "/", callback: () => ListarCategorias()},
    {path: "/category/edit/:id", callback: (id) => EditarCategoria(id)},
    {path: "/posts/:category_id", callback: (category_id) => ListarPosts(category_id)},
    {path: "/post/:id", callback: (id) => EditarPost(id)},
];

export default rotas;