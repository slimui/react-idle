import { delay } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import { updateCounter, finishIsland, updateLoot, updateDamage } from '../actions';
import { getValuePerSecond, getIslandProgress, getCount, getLootSpeed, getLoot, getIslandSearchingStatus } from '../helpers/selectors';

import islandData from '../data/islands';

export default function* gameLoop() {
    // Set up initial variables for the game loop

    const frameRate = 60;
    let lastUpdateTime = Date.now();
    let currentTime;
    let deltaTime;
    let valuePerSecond = yield select(getValuePerSecond);
    let lootSpeed = yield select(getLootSpeed);
    let loot = yield select(getLoot);
    let count = yield select(getCount);
    let islandNumber = yield select(getIslandProgress);
    let islandLives = islandData.islands[islandNumber - 1].lives;
    let damageUpdated = false;
    let islandSearchingStatus = yield select(getIslandSearchingStatus);

    // Game Loop runs at 60 fps (may be an option set by the user later)

    function* update() {
        while (true) {
            // Update kill counter every frame based on calculated kills per second

            islandSearchingStatus = yield select(getIslandSearchingStatus); // Check to see if the player is currently searching the island

            if (islandSearchingStatus === true) {
                islandLives = islandData.islands[islandNumber - 1].lives;

                valuePerSecond = yield select(getValuePerSecond);
                loot = yield select(getLoot);
                lootSpeed = yield select(getLootSpeed);

                currentTime = Date.now();
                deltaTime = currentTime - lastUpdateTime;
                lastUpdateTime = currentTime;

                yield put(updateCounter(valuePerSecond * deltaTime / 1000));
                yield put(updateLoot(lootSpeed * deltaTime / 1000));

                // Check if the current island is complete

                count = yield select(getCount);
                if (islandLives && count >= islandLives) {
                    yield put(finishIsland(islandNumber));
                    islandNumber = yield select(getIslandProgress);
                    console.log(islandNumber);
                }

                if (loot > 10 && damageUpdated === false) {
                    yield put(updateDamage(1));
                    damageUpdated = true;
                }
            } else {
                lastUpdateTime = Date.now();
            }

            yield delay(1000 / frameRate);
        }
    }

    yield call(update);
}
