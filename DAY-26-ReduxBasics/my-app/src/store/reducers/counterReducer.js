const initialCounter = 0;
const counterReducer = (state = initialCounter, action) => {
    if (action.type === "INC_NUMBER") {
        return state + 1;
    }
    else if (action.type === "DEC_NUMBER") {
        return state - 1;
    }
    return state;
};
export default counterReducer;