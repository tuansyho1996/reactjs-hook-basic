
const Todo = (props) => {
    let { todos, title, deleteElementJob } = props;
    const handleClickDelete = (id) => {
        deleteElementJob(id)
    }
    return (
        <div>
            <p>{title}</p>
            {todos &&
                todos.map(item => {
                    return (
                        <li className='element-todo' key={item.id}>{item.title}
                            &nbsp;&nbsp;<span onClick={() => handleClickDelete(item.id)}>x</span></li>
                    )
                })
            }
            <hr />
        </div>
    )
}
export default Todo;