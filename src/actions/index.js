export const updateCounter = count => {
    return {
        type: 'UPDATE_COUNTER',
        count
    };
};

export const finishIsland = () => {
    return {
        type: 'FINISH_ISLAND'
    };
};

export const updateLoot = loot => {
    return {
        type: 'UPDATE_LOOT',
        loot
    };
};

export const updateDamage = damage => {
    return {
        type: 'UPDATE_DAMAGE',
        damage
    };
};

export const startIsland = () => {
    return {
        type: 'START_ISLAND'
    };
};
