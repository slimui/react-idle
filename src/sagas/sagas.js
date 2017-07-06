import { delay } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import { updateCounter, finishIsland } from '../actions';
import { getValuePerSecond, getIslandProgress, getCount } from '../helpers/selectors';

import islands from '../data/islands';

export default function* gameLoop() {

    // Set up initial variables for the game loop

    const frameRate = 60;
    let lastUpdateTime = Date.now();
    let currentTime;
    let deltaTime;
    let valuePerSecond = yield select(getValuePerSecond);
    let count = yield select(getCount);
    let islandNumber = yield select(getIslandProgress);
    let islandLives = islands.islands[islandNumber - 1].lives;

    // Game Loop runs at 60 fps (may be an option set by the user later)

    function* update() {
        while (true) {
            count = yield select(getCount);
            
            islandLives = islands.islands[islandNumber - 1].lives;

            // Check if the current island is complete
            if( islandLives && count >= islandLives) {
                yield put(finishIsland(islandNumber));
                islandNumber = yield select(getIslandProgress);
                console.log(islandNumber);
            }

            valuePerSecond = yield select(getValuePerSecond);
            currentTime = Date.now();
            deltaTime = currentTime - lastUpdateTime;
            lastUpdateTime = currentTime;

            yield put(updateCounter(valuePerSecond * deltaTime/1000));

            yield delay(1000/frameRate);
        }
    }

    yield call(update);

}