const initialState = {
    count: 0,
    valuePerSecond: 0,
    loot: 0,
    lootSpeed: 1,
    islandProgress:1
};

export default function counterReducer(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_COUNTER':
            return Object.assign({}, state, {
                ...state,
                count: state.count + action.count
            })
        case 'UPDATE_LOOT':
            return Object.assign({}, state, {
                ...state,
                loot: state.loot + action.loot
            })
        case 'UPDATE_DAMAGE':
            return Object.assign({}, state, {
                ...state,
                valuePerSecond: state.valuePerSecond + action.damage
            })
        case 'FINISH_ISLAND': 
            return Object.assign({}, state, {
                ...state,
                islandProgress: state.islandProgress + 1,
                count: 0
            })
        default:
            return state;
    }
}