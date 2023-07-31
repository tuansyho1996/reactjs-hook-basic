import useFetch from "./customize/fectch";
import './Blogs.scss'
import { Link } from "react-router-dom/cjs/react-router-dom";

const Blogs = () => {
    let { data: dataBlogs, isLoading } = useFetch('https://jsonplaceholder.typicode.com/posts', false);
    let newData
    if (dataBlogs.data && dataBlogs.data.length > 0) {
        newData = dataBlogs.data.slice(90);
    }

    return (
        <div className="blogs-container row mt-4">
            {
                !isLoading && newData && newData.length > 0 &&
                newData.map(item => {
                    return (
                        <div className="single-blogs col-3" key={item.id}>
                            <p className="title-blog ">Title: {item.title}</p>
                            <p className="content-blog">{item.body}</p>
                            <button>
                                <Link to={`/blog/${item.id}`}>Detail</Link>
                            </button>
                        </div>
                    )
                })
            }
            {
                isLoading &&
                <div>Loading....</div>
            }
        </div>
    )
}
export default Blogs