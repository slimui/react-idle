import { delay } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import { updateCounter } from '../actions';
import { getValuePerSecond } from '../helpers/selectors';

export default function* gameLoop() {

    const frameRate = 60;
    let lastUpdateTime = Date.now();
    let currentTime;
    let deltaTime;
    let valuePerSecond = yield select(getValuePerSecond);
    console.log(valuePerSecond);

    function* update() {
        while (true) {
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