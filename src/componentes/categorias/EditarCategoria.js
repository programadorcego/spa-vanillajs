import ObterCategoria from "./Requests/ObterCategoria";
import SalvarCategoria from "./Requests/SalvarCategoria";
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

    container.querySelector("#salvar").addEventListener("click", async (e) => {
        e.target.setAttribute("disabled", "disabled");

        try {
            const salvar = await SalvarCategoria(container, id);

            if(salvar.data.status === "error") throw new Error(salvar.data.message);

            alert("Categoria atualizada com sucesso");

            window.navegacao(`/category/edit/${id}`);
        } catch(err) {
            console.error(err);
        }
    });

    return container;
};

export default EditarCategoria;