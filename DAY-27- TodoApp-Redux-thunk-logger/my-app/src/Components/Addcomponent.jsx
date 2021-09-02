import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/actions';
const AddComponent = () => {
    const [task, settask] = useState("");
    const dispatch = useDispatch();
    return (
        <>
            <input type="text" value={task} placeholder="Add a Todo" onChange={(e) => settask(e.target.value)} />
            <button onClick={() => { dispatch(addTask(task)); settask(""); }} >ADD</button>
        </>
    );
};

export default AddComponent;
