import axios from "axios";

const RemoverCategoria = async (id) => {
    return await axios.delete(`http://localhost/api/category/delete.php?id=${id}`);
};

export default RemoverCategoria;