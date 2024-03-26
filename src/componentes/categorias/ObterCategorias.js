import axios from "axios";

const ObterCategorias = async () => {
    return await axios.get(`http://localhost/api/categories/`);
};

export default ObterCategorias;