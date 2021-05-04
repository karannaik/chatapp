import { configureStore} from "@reduxjs/toolkit";
import gameReducer from "./reducers/gameSlice";
import playerReducer from "./reducers/playerSlice";

export const store = configureStore({
    reducer: {
        player: playerReducer,
        game: gameReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
// export state for type script
export type RootState = ReturnType<typeof store.getState>;

//export AppDispatch related to our store which will include thunk as well
export type AppDispatch = typeof store.dispatch;
