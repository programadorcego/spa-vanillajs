import axios from "axios";

const AdicionarCategoria = async (container) => {
    return await axios.post(`http://localhost/api/category/create.php`, {
        name: container.querySelector("#nome").value,
    });
};

export default AdicionarCategoria;