export const updateCounter = (count) => {
    return {
        type: 'UPDATE_COUNTER',
        count
    }
}

export const finishIsland = () => {
    return {
        type: 'FINISH_ISLAND'
    }
}

export const updateLoot = (loot) => {
    return {
        type: 'UPDATE_LOOT',
        loot
    }
}