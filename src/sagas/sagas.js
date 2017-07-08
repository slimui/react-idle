import { delay } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import { updateCounter, finishIsland, updateLoot } from '../actions';
import { getValuePerSecond, getIslandProgress, getCount, getLootSpeed } from '../helpers/selectors';

import islandData from '../data/islands';

export default function* gameLoop() {

    // Set up initial variables for the game loop

    const frameRate = 30;
    let lastUpdateTime = Date.now();
    let currentTime;
    let deltaTime;
    let valuePerSecond = yield select(getValuePerSecond);
    let lootSpeed = yield select(getLootSpeed);
    let count = yield select(getCount);
    let islandNumber = yield select(getIslandProgress);
    let islandLives = islandData.islands[islandNumber - 1].lives;

    // Game Loop runs at 60 fps (may be an option set by the user later)

    function* update() {
        while (true) {

            // Update kill counter every frame based on calculated kills per second
            
            islandLives = islandData.islands[islandNumber - 1].lives;

            valuePerSecond = yield select(getValuePerSecond);
            lootSpeed = yield select(getLootSpeed);

            currentTime = Date.now();
            deltaTime = currentTime - lastUpdateTime;
            lastUpdateTime = currentTime;

            yield put(updateCounter(valuePerSecond * deltaTime/1000));
            yield put(updateLoot(lootSpeed * deltaTime/1000));

            // Check if the current island is complete

            count = yield select(getCount);
            if( islandLives && count >= islandLives) {
                yield put(finishIsland(islandNumber));
                islandNumber = yield select(getIslandProgress);
                console.log(islandNumber);
            }

            yield delay(1000/frameRate);
        }
    }

    yield call(update);

}