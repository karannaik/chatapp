import {createSlice} from "@reduxjs/toolkit";

interface PlayerState {
    id: number,
    name: string
}

const initialState: PlayerState = {
    id: 1,
    name: "NoName"
};

export const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        updatePlayerId: (state,
                         action) => state.id = action.payload,
        updatePlayerName: (state,
                           action) => state.name = action.payload

    }
});

export const { updatePlayerId, updatePlayerName } = playerSlice.actions;
export default playerSlice.reducer;