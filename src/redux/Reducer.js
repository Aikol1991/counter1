
const reducer = (state = { counter: 0}, action) => {
    if(action.type === 'DECREASE') {
        return { counter: state.counter - 1 };
    }
    if(action.type === 'INCREASE') {
        return { counter: state.counter + 1};
    }
    if(action.type === 'RESET'){
        return { counter: state.counter = 0};
    }
    return state;
};
export default reducer;