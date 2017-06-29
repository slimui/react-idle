const initialState = {
    counter: 0
};

export default function counterReducer(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_COUNTER':
            return Object.assign({}, state, {
                counter: state.counter + action.count
            })
        default:
            return state;
    }
}