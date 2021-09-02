import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask } from '../store/actions';
const ShowlistComponent = () => {
    const todo = useSelector(state => state.todo);
    const dispatch = useDispatch();
    return (
        <div className="d-flex flex-column text-center p-5 ">
            {!todo.length && <h5>Nothing Planned yet! 😵</h5>}
            {todo.length > 0 && todo.map((item, index) => (
                <div className="d-flex justify-content-between bg-dark text-white rounded m-2 px-5 py-3 shadow">
                    <h5>{item}</h5>
                    <button type="button" class="btn btn-outline-light btn-sm" onClick={() => dispatch(removeTask(index))}>Delete</button>
                </div>)
            )}

        </div>
    );
};
export default ShowlistComponent;
