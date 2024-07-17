import ObterPosts from "./Requests/ObterPosts";
import RemoverPost from "./Requests/RemoverPost";

const ApagarPost = async (id, row) => {
    if(confirm("Tem certeza que deseja remover este Post?")) {
        try {
            const apagar = await RemoverPost(id);

            if(apagar.data.status === "error") throw new Error(apagar.data.message);

            alert("Post removido com sucesso!");

            row.remove();
        } catch(err) {
            console.error(err);
        }
    }
};

const CorpoTabela = async (tabela, category_id) => {
    const posts = await ObterPosts(category_id);

    posts.data.posts.forEach(post => {
        const row = document.createElement("tr");
        row.innerHTML += `
                <td>${post.id}</td>
                <td>${post.name}</td>
                <td><button onclick="window.navegacao('/post/${post.id}')">Editar</button>
                    <button class="remove-post">Remover</button></td>
        `;
        row.querySelector(".remove-post").addEventListener("click", () => ApagarPost(post.id, row));
        tabela.querySelector("tbody").append(row);
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