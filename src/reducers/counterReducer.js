const initialState = {
    count: 0,
    valuePerSecond: 1
};

export default function counterReducer(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_COUNTER':
            return Object.assign({}, state, {
                count: state.count + action.count
            })
        default:
            return state;
    }
}