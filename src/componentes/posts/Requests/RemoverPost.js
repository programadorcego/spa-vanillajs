import axios from "axios";

const RemoverPost = async (id) => {
    return await axios.delete(`http://localhost/api/post/delete.php?id=${id}`);
};

export default RemoverPost;