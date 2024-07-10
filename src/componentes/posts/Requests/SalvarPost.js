import axios from "axios";

const SalvarPost = async (container, id) => {
    return await axios.put(`http://localhost/api/post/edit.php?id=${id}`, {
        name: container.querySelector("#nome").value,
        category_id: Number(container.querySelector("#category_id").value),
        content: container.querySelector("#content").value,
    });
};

export default SalvarPost;