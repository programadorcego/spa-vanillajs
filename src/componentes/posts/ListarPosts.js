import ObterPosts from "./Requests/ObterPosts";

const CorpoTabela = async (tabela, category_id) => {
    const posts = await ObterPosts(category_id);

    posts.data.posts.forEach(post => {
        tabela.querySelector("tbody").innerHTML += `
            <tr>
                <td>${post.id}</td>
                <td>${post.name}</td>
                <td><button onclick="window.navegacao('/post/${post.id}')">Editar</button></td>
            </tr>
        `;
    });

    return tabela;
};

const ListarPosts = (category_id) => {
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

    CorpoTabela(tabela, category_id);
    return tabela;
};

export default ListarPosts;