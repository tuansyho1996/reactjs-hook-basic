import useFetch from "./customize/fectch";
import './Blog.scss'
import { Link } from "react-router-dom/cjs/react-router-dom";
import { Fragment } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from 'react';
import AddNewBlog from "./AddNewBlog";


const Blog = () => {
    const [show, setShow] = useState(false);
    const [data, setData] = useState({});
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let { data: dataBlogs, isLoading, isError } = useFetch('https://jsonplaceholder.typicode.com/posts', false);
    useEffect(() => {
        if (dataBlogs.data && dataBlogs.data.length > 0) {
            let currentData = dataBlogs.data.slice(90);
            setData(currentData);
        }
    }, [dataBlogs])
    const handleAddNewBlog = (blog) => {
        let currentData = data;
        currentData.unshift(blog);
        setData(currentData);
        setShow(false);
    }
    const handleClickDeleteBlog = (id) => {
        let currentData = data.filter(item => item.id !== id)
        setData(currentData)

    }
    return (
        <Fragment>
            <div>
                <Button variant="primary" onClick={handleShow}>
                    Launch demo modal
                </Button>
            </div>
            <div className="blog-container row mt-4">
                {
                    !isLoading && data && data.length > 0 &&
                    data.map((item, index) => {
                        return (
                            <div className="single-blog col-3" key={index}>
                                <div className="title-blog ">Title: {item.title} <span onClick={() => handleClickDeleteBlog(item.id)}>X</span></div>
                                <p className="body-blog">{item.body}</p>
                                <button>
                                    <Link to={`/blog/${item.id}`}>Detail</Link>
                                </button>
                            </div>
                        )
                    })
                }
                {
                    !isError && isLoading &&
                    <div>Loading....</div>
                }
                {
                    isError &&
                    <div>Something wrong</div>
                }
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddNewBlog
                            handleAddNewBlog={handleAddNewBlog}
                        />
                    </Modal.Body>
                </Modal>
            </div>
        </Fragment>
    )
}
export default Blog