export const updateCounter = (count) => {
    return {
        type: 'UPDATE_COUNTER',
        count
    }
}

export const finishIsland = (island) => {
    return {
        type: 'FINISH_ISLAND',
        island
    }
}