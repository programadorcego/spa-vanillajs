import AdicionarCategoria from "./Requests/AdicionarCategoria";
import Formulario from "./Formulario";

const CriarCategoria = () => {
    let container = document.createElement("div");
    container.innerHTML = Formulario;

    container.querySelector("#salvar").addEventListener("click", async (e) => {
        e.target.setAttribute("disabled", "disabled");

        try {
            const categoria = await AdicionarCategoria(container);

            if(categoria.data.status === "error") {
                throw new Error(categoria.data.message);
            }

            alert("Categoria cadastrada com sucesso!");
            window.navegacao(`/category/edit/${categoria.data.category.id}`);
        } catch(err) {
            console.error(err);
        }
    });

    return container;
};

export default CriarCategoria;