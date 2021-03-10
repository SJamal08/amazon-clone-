export const initialState= {
    basket: ["chicken","bucket"],
};

function reducer(state,action) {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            
            break;
    
        case 'REMOVE_FROM_BASKET':
            break;
        default:
            return state;
    }
}

export default reducer;
