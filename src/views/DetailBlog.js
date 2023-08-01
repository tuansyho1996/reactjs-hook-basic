import { useParams, useHistory } from "react-router-dom";
import useFetch from "./customize/fectch";
import _ from 'lodash'
const DetailBlog = () => {
    let { id } = useParams();
    let history = useHistory();
    const handleClickBack = () => {
        history.push('/blog')
    }
    let { data: dataBlogDetail, isLoading } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, false)
    // console.log('check data detail blog', dataBlogDetail)
    let data = dataBlogDetail.data
    return (
        <div className="detail-blog-container ">
            <div><span onClick={() => handleClickBack()}>	&#60;-- back</span></div>
            {data && !_.isEmpty(data) &&
                <div className="content-detail-blog mt-4">
                    <p className="title-detail-blog">{data.title}</p>
                    <p className="body-detail-blog">{data.body}</p>
                </div>
            }
            {
                isLoading &&
                <div>Loading....</div>
            }
        </div>
    )
}

export default DetailBlog;