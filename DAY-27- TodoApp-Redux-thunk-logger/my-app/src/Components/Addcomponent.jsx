import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/actions';
const AddComponent = () => {
    const [task, settask] = useState("");
    const dispatch = useDispatch();
    return (
        <div className="mx-5 my-3">
            <div class="input-group ">
                <input type="text" value={task} placeholder="Add a Todo" onChange={(e) => settask(e.target.value)} class="form-control" aria-describedby="basic-addon2" />
                <button type="button" class="btn btn-outline-dark input-group-text" id="basic-addon2" onClick={() => { dispatch(addTask(task)); settask(""); }} >ADD</button>
            </div>
        </div >
    );
};

export default AddComponent;
