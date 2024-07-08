import ObterPost from "./Requests/ObterPost";
import Formulario from "./Formulario";
import ObterCategorias from "../categorias/Requests/ObterCategorias";

const ValorFormulario = async (container, id) => {
    const post = await ObterPost(id);
    const categorias = await ObterCategorias();

    container.querySelector("#nome").value = post.data.post.name;

    categorias.data.categories.forEach(categoria => {
        const option = document.createElement("option");

        option.value = categoria.id;
        option.textContent = categoria.name;
        container.querySelector("#category_id").appendChild(option);
    });

    container.querySelector("#category_id").selectedIndex = post.data.post.category_id;

    return container;
}

const EditarPost = id => {
    let container = document.createElement("div");
    container.innerHTML = Formulario;
    ValorFormulario(container, id);

    return container;
};

export default EditarPost;