import { call, put } from 'redux-saga/effects';
import { updateCounter } from '../actions';

export default function* helloSaga() {
    console.log("It's time for a new Saga!");
    yield put(updateCounter(5));
}