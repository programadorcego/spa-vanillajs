import ObterPost from "./ObterPost";
import Formulario from "./Formulario";

const ValorFormulario = async (container, id) => {
    const post = await ObterPost(id);
    container.querySelector("#nome").value = post.data.post.name;

    return container;
}

const EditarPost = id => {
    let container = document.createElement("div");
    container.innerHTML = Formulario;
    ValorFormulario(container, id);

    return container;
};

export default EditarPost;