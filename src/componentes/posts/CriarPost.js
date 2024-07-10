import AdicionarPost from "./Requests/AdicionarPost";
import Formulario from "./Formulario";
import ObterCategorias from "../categorias/Requests/ObterCategorias";

const ValorFormulario = async (container, id) => {
    const categorias = await ObterCategorias();

    categorias.data.categories.forEach(categoria => {
        const option = document.createElement("option");

        option.value = categoria.id;
        option.textContent = categoria.name;
        container.querySelector("#category_id").appendChild(option);
    });

    return container;
}

const CriarPost = () => {
    let container = document.createElement("div");
    container.innerHTML = Formulario;
    ValorFormulario(container);

    container.querySelector("#salvar").addEventListener("click", async (e) => {
        e.target.setAttribute("disabled", "disabled");
        try {
            const salvar = await AdicionarPost(container);

            if(salvar.data.status === "error") throw new Error(salvar.data.message);

            alert("Post cadastrado com sucesso!");

            window.navegacao(`/post/${salvar.data.post.id}`);
        } catch(err) {
            console.error(err);
        }
    });

    return container;
};

export default CriarPost;