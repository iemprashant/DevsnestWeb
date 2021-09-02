const initialState = [];
const TodoReducer = (state = initialState, action) => {
    if (action.type === "ADD_TASK") {
        return [...state,action.payload]
    }
    else if(action.type==="REMOVE_TASK"){
        return state.filter((item,index)=>index!==action.payload);
    }
    return state;
};
export default TodoReducer