import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { increment } from './App.js';

test('Test increment per tick', () => {
    expect(increment(5)({value: 5})).toEqual({value: 5.005});
});