
const Todo = (props) => {
    let todos = props.todos
    return (
        <div>
            <p>{props.title}</p>
            {todos && todos.length &&
                todos.map(item => {
                    return (
                        <li className='element-todo' key={item.id}>{item.title}</li>
                    )
                })
            }
            <hr />
        </div>
    )
}
export default Todo;