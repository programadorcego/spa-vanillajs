import ObterCategorias from "./ObterCategorias";

const CorpoTabela = async (tabela) => {
    const categorias = await ObterCategorias();

    categorias.data.categories.forEach(categoria => {
        tabela.querySelector("tbody").innerHTML += `
            <tr>
                <td>${categoria.id}</td>
                <td><span onclick="window.navegacao('/posts/${categoria.id}')">${categoria.name}</span></td>
                <td>
                    <button onclick="window.navegacao('/category/edit/${categoria.id}')">Editar</button>
                </td>
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