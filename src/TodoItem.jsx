import PropTypes from "prop-types";

export default function TodoItem({id, title, completed, toggleTodo, deleteTodo}) {
    return (
        <li key={id}>
            <label>
                <input type={'checkbox'}
                       checked={completed}
                       onChange={e => toggleTodo(id, e.target.checked)}/>
                {title}
                <button className={'btn btn-danger'}
                        onClick={() => deleteTodo(id)}>Delete</button>
            </label>
        </li>
    )
}
TodoItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,

}