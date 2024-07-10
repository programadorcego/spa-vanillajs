import ObterPost from "./Requests/ObterPost";
import SalvarPost from "./Requests/SalvarPost";
import Formulario from "./Formulario";
import ObterCategorias from "../categorias/Requests/ObterCategorias";

const ValorFormulario = async (container, id) => {
    const post = await ObterPost(id);
    const categorias = await ObterCategorias();

    container.querySelector("#nome").value = post.data.post.name;
    container.querySelector("#content").value = post.data.post.content;

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

    container.querySelector("#salvar").addEventListener("click", async (e) => {
        e.target.setAttribute("disabled", "disabled");

        try {
            const salvar = await SalvarPost(container, id);

            if(salvar.data.status === "error") throw new Error(salvar.data.message);

            alert("Post atualizado com sucesso!");
            window.navegacao(`/post/${id}`);
        } catch(err) {
            console.error(err);
        }
    });

    return container;
};

export default EditarPost;