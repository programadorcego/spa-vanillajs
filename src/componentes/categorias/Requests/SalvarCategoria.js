import axios from "axios";

const SalvarCategoria = async (container, id) => {
    return await axios.put(`http://localhost/api/category/edit.php?id=${id}`, {
        name: container.querySelector("#nome").value,
    });
};

export default SalvarCategoria;