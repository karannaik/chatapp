import {createSlice} from "@reduxjs/toolkit";

interface PlayerState {
    playerId: string,
    playerName: string,
    roomName: string
}

const initialState: PlayerState = {
    playerId: "1",
    playerName: "NoName",
    roomName: ""
};

export const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        updatePlayerId: (state:PlayerState,
                         action) => {
            return {
                ...state,
                playerId: action.payload
            }
        },
        updatePlayerName: (state:PlayerState,
                           action) => {
            return {
                ...state,
                playerName: action.payload
            }
        },
        updateRoomName: (state:PlayerState,
                           action) => {
            return {
                ...state,
                roomName: action.payload
            }
        }

    }
});

export const { updatePlayerId, updatePlayerName, updateRoomName } = playerSlice.actions;
export default playerSlice.reducer;