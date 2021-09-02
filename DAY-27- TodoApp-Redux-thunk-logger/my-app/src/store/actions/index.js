const addTask=(item)=>{
    return{
        type:"ADD_TASK",
        payload:item
    }
}
const removeTask=(index)=>{
    return{
        type:"REMOVE_TASK",
        payload:index
    }
}
export{addTask,removeTask}