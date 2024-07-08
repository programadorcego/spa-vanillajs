import axios from "axios";

const ObterCategoria = async (id) => {
    return await axios.get(`http://localhost/api/category/?id=${id}`);
};

export default ObterCategoria;