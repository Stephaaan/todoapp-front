export const rootReducer = (state = {}, action) => {
    console.log(action);
    switch(action.type){
        default:
            return state;
    }
}