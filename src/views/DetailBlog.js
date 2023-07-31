import { useParams } from "react-router-dom";

const DetailBlog = () => {
    let { id } = useParams()
    return (
        <div>
            hello detail blog {id}
        </div>
    )
}

export default DetailBlog;