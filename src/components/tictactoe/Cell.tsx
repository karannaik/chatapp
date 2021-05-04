import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {updateCell} from "../../app/reducers/gameSlice";
import {useAppSelector} from "../../app/hooks";

interface Props {
    value: number,
    index: number
}

export const Cell : React.FC<Props> = (props:Props) => {

    const playerId = useAppSelector(state => {return state.player.id});
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(updateCell({index: props.index, playerId}))}>
                {props.value}
            </button>
        </div>
    );
};