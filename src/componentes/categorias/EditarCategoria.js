import ObterCategoria from "./ObterCategoria";
import Formulario from "./Formulario";

const ValorFormulario = async (container, id) => {
    const categoria = await ObterCategoria(id);
    container.querySelector("#nome").value = categoria.data.category.name;

    return container;
}

const EditarCategoria = id => {
    let container = document.createElement("div");
    container.innerHTML = Formulario;
    ValorFormulario(container, id);

    return container;
};

export default EditarCategoria;