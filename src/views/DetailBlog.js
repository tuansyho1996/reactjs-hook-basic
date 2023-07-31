import { useParams, useHistory } from "react-router-dom";

const DetailBlog = () => {
    let { id } = useParams();
    let history = useHistory();
    const handleClickBack = () => {
        history.push('/blog')
    }
    return (
        <div>
            <div><span onClick={() => handleClickBack()}>	&#60;-- back</span></div>
            hello detail blog {id}
        </div>
    )
}

export default DetailBlog;