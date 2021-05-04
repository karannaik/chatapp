import { createSlice } from "@reduxjs/toolkit";

interface GameState {
    value: number[]
}

const initialState: GameState = {
    value: [
        0,1,2,
        0,0,0,
        0,0,0
    ]
};

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        updateCell: (state,
                     action) => {
            state.value[action.payload.index] = action.payload.playerId
        }
    }
});

export const { updateCell } = gameSlice.actions;
export default gameSlice.reducer;