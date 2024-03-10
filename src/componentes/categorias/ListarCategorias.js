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

    return tabela;
};

export default ListarCategorias;