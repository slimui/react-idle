const initialState = {
    count: 0,
    valuePerSecond: 1,
    islandProgress:1
};

export default function counterReducer(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_COUNTER':
            return Object.assign({}, state, {
                ...state,
                count: state.count + action.count
            })
        case 'FINISH_ISLAND': {
            return Object.assign({}, state, {
                ...state,
                islandProgress: state.islandProgress + 1
            })
        }
            
        default:
            return state;
    }
}