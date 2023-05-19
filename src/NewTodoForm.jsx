import {useState} from "react";
import PropTypes from "prop-types";

export default function NewTodoForm({onSubmit}) {
    const [newItem, setNewItem] = useState('')
    function handleSubmit(e) {
        e.preventDefault();
        if (newItem === '') return
        onSubmit(newItem)
        setNewItem('')
    }
    return (<form onSubmit={handleSubmit} className={'new-item-form'}>
        <div className={'form-row'}>
            <label htmlFor={'item'}>New Item</label>
            <input onChange={event => setNewItem(event.target.value)} value={newItem} type={'text'} id={'item'}/>
        </div>
        <button className={'btn'}>ADD</button>
    </form>)
}
NewTodoForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}