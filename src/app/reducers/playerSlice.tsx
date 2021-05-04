import {createSlice} from "@reduxjs/toolkit";

interface PlayerState {
    id: number
}

const initialState: PlayerState = {
    id: 33
};

export const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        updatePlayerId: (state,
                         action) => state.id = action.payload
    }
});

export const { updatePlayerId } = playerSlice.actions;
export default playerSlice.reducer;