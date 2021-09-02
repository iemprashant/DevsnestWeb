import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask } from '../store/actions';
const ShowlistComponent = () => {
    const todo = useSelector(state => state.todo);
    const dispatch = useDispatch();
    return (
        <>
            {todo.map((item, index) => (
                <div>
                    <h5>{item}</h5>
                    <button onClick={() => dispatch(removeTask(index))}>Delete</button>
                </div>)
            )}

        </>
    );
};

export default ShowlistComponent;
