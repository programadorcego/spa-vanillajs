const Formulario = `
    <div>
        <div>
            <label for="nome">Título *</label>
        </div>

        <div>
            <input type="text" id="nome" required placeholder="Informe o título do Post">
        </div>

        <div>
            <label for="category_id">Categoria *</label>
        </div>

        <div>
            <select id="category_id">
                <option value="">Selecione uma categoria</option>
            </select>
        </div>

        <div>
            <div>
                <label for="content">Conteúdo *</label>
            </div>

            <div>
                <textarea id="content" required></textarea>
            </div>
        </div>

        <button id="salvar">Salvar</button>
    </div>
`;

export default Formulario;