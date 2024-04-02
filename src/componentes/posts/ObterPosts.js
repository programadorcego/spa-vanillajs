import axios from "axios";

const ObterPosts = async (category_id) => {
    return await axios.get(`http://localhost/api/posts/?category_id=${category_id}`);
};

export default ObterPosts;