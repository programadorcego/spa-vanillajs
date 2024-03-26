import ObterCategorias from "./ObterCategorias";

const CorpoTabela = async (tabela) => {
    const categorias = await ObterCategorias();

    categorias.data.categories.forEach(categoria => {
        tabela.querySelector("tbody").innerHTML += `
            <tr>
                <td>${categoria.id}</td>
                <td>${categoria.name}</td>
                <td></td>
            </tr>
        `;
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