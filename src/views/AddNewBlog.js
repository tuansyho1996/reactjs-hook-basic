import './Blog.scss';
import { useState } from 'react';
import axios from 'axios';

const AddNewBlog = (props) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleClickSubmit = async () => {
        if (!title) {
            alert('Empty title')
            return;
        }
        if (!content) {
            alert('Empty content')
            return;
        }
        // console.log('check submit -------->', title, content)
        let data = { title, body: content, userId: 1 }
        let res = await axios.post('https://jsonplaceholder.typicode.com/posts', data);
        // console.log('check new blog', res)
        props.handleAddNewBlog(res.data)
        setContent('');
        setTitle('');
    }
    return (
        <div>
            <div className="container form-add-new-blog-container mt-3">
                <div className='mb-3 title-add-new-blog'>--- Add new blog---</div>

                <div className="form-group">
                    <label >Title</label>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" placeholder="Enter title" />
                </div>
                <div className="form-group my-3">
                    <label >Content</label>
                    <input value={content} onChange={(e) => setContent(e.target.value)} type="text" className="form-control" placeholder="Enter content" />
                </div>
                <button onClick={() => handleClickSubmit()} className="btn btn-primary">Submit</button>
            </div>
        </div>
    )
}
export default AddNewBlog;



