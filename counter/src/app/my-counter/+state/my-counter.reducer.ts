import { createReducer, on, Action } from '@ngrx/store';
import { increment, decrement, reset } from './my-counter.actions';

export const initialState = 0;

const _counterReducer = createReducer(
    initialState, 
    on(increment, state => state + 1),
    on(decrement, state => state - 1),
    on(reset, () =>  0)
);

export function myCounterReducer(state: number | undefined, action: Action) {
    return _counterReducer(state, action);
}