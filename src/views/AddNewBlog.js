import './Blog.scss'
import { useState } from 'react'
const AddNewBlog = () => {
    let [title, setTitle] = useState('');
    let [content, setContent] = useState('');
    const handleClickSubmit = () => {
        if (!title) {
            alert('Empty title')
            return;
        }
        if (!content) {
            alert('Empty content')
            return;
        }
        console.log('check submit -------->', title, content)
    }
    return (
        <div>
            <div className='my-3 title-add-new-blog'>--- Add new blog---</div>
            <div className="container form-add-new-blog-container">
                <div className="form-group">
                    <label >Title</label>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" placeholder="Enter title" />
                </div>
                <div className="form-group">
                    <label >Content</label>
                    <input value={content} onChange={(e) => setContent(e.target.value)} type="text" className="form-control" placeholder="Enter content" />
                </div>
                <button onClick={() => handleClickSubmit()} className="btn btn-primary">Submit</button>
            </div>
        </div>
    )
}
export default AddNewBlog