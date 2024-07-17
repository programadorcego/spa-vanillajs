import ObterCategorias from "./Requests/ObterCategorias";
import RemoverCategoria from "./Requests/RemoverCategoria";

const ApagarCategoria = async (id, row) => {
    if(confirm("Tem certeza que deseja remover esta categoria?")) {
        try {
            const apagar = await RemoverCategoria(id);

            if(apagar.data.status === "error") throw new Error(apagar.data.message);

            alert("Categoria removida com sucesso!");
            row.remove();
        } catch(err) {
            console.error(err);
        }
    }
};

const CorpoTabela = async (tabela) => {
    const categorias = await ObterCategorias();

    categorias.data.categories.forEach(categoria => {
        const row = document.createElement("tr");

        row.innerHTML += `
                <td>${categoria.id}</td>
                <td><span onclick="window.navegacao('/posts/${categoria.id}')">${categoria.name}</span></td>
                <td>
                    <button onclick="window.navegacao('/category/edit/${categoria.id}')">Editar</button>
                    <button class="remove-category">Remover</button>
                </td>
        `;
        row.querySelector(".remove-category").addEventListener("click", () => ApagarCategoria(categoria.id, row));
        tabela.querySelector("tbody").append(row);
    });

    return tabela;
};

const ListarCategorias = () => {
    const tabela = document.createElement("table");

    tabela.innerHTML = `
        <thead>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Ações</th>
            </tr>
        </thead>

        <tbody></tbody>
    `;

    CorpoTabela(tabela);
    return tabela;
};

export default ListarCategorias;