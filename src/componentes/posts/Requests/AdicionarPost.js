import axios from "axios";

const AdicionarPost = async (container) => {
    return await axios.post(`http://localhost/api/post/create.php`, {
        name: container.querySelector("#nome").value,
        category_id: Number(container.querySelector("#category_id").value),
        content: container.querySelector("#content").value,
    });
};

export default AdicionarPost;