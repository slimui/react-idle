import { delay } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { updateCounter } from '../actions';

export default function* gameLoop() {

    const frameRate = 60;
    let lastUpdateTime = Date.now();
    let currentTime;
    let deltaTime;
    let valuePerSecond = 1;

    function* update() {
        while (true) {
            currentTime = Date.now();
            deltaTime = currentTime - lastUpdateTime;
            lastUpdateTime = currentTime;
            yield put(updateCounter(valuePerSecond * deltaTime/1000));
            yield delay(1000/frameRate);
        }
    }

    yield call(update);

}