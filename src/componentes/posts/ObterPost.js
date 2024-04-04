import axios from "axios";

const ObterPost = async (id) => {
    return await axios.get(`http://localhost/api/post/?id=${id}`);
};

export default ObterPost;