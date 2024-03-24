import { configureStore } from '@reduxjs/toolkit';
import { menuReducer } from 'widgets/Navbar/model/slice/menuSlice';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            menu: menuReducer,
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
