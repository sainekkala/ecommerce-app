import { useState, useReducer } from 'react';

function reducer(state, action) {
    if (action.type === 'add') {
        return [...state, {id: state.length + 1, title: action.payload, isCompleted: false}];
    } else if (action.type === 'remove') {
        return state.filter(todo => todo.id !== action.payload);
    } else if (action.type === 'toggle') {
        const updatedState =  state.map(todo => {
            if (todo.id === action.payload) {
                return {...todo, isCompleted: !todo.isCompleted};
            } else {
                return todo;
            }
        });
        return updatedState;
    }
    return state;
}

function TodoComponent() {
    const [todoName, setTodoName] = useState('');
    const [state, dispatch] = useReducer(reducer, [{id: 1, title: 'Taking React class at 7 am ', isCompleted: false}]);

    return (
        <div className='container my-4'>
            <div className='row'>
                <div className='col-sm'>
                    <h2 className='text-center'>Todo List</h2>
                    {state.map(todo => (
                        <div key={todo.id}>
                            <h3 style={{'textDecoration': todo.isCompleted ? 'line-through' : ''}}>{todo.title}</h3>
                            <button className='btn btn-danger me-3' onClick={() => dispatch({type: 'remove', payload: todo.id})}>Remove</button>
                            <button className='btn btn-primary' onClick={() => dispatch({type: 'toggle', payload: todo.id})}>{todo.isCompleted ? 'Completed': 'In Complete'}</button>
                        </div>
                    ))}
                </div>
                <div className='col-sm'>
                    <h2 className='text-center'>Add Todo</h2>
                    <div className="mb-3">
                        <label htmlFor="todoName" className="form-label">Todo Name: <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" value={todoName} onChange={(event) => setTodoName(event.target.value)} id="todoName" placeholder="Enter Todo..." />
                    </div>
                    <button className='btn btn-success' onClick={() => {dispatch({type: 'add', payload: todoName}); setTodoName('')}}>Add</button>
                </div>
            </div>
        </div>
    )
}

export default TodoComponent;
