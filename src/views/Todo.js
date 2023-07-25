
const Todo = (props) => {
    let todos = props.todos
    return (
        <div>
            {todos && todos.length &&
                todos.map(item => {
                    return (
                        <li className='element-todo' key={item.id}>{item.title}</li>
                    )
                })
            }
        </div>
    )
}
export default Todo;