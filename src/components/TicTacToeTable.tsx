import React from 'react';
import { updateCell } from '../app/reducers/gameSlice';
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {Cell} from "./Cell";

export const TicTacToeTable: React.FC = () => {

    const cellsFromRedux = useAppSelector((state) => { return state.game.value });


    const dispatch = useAppDispatch();

    const totalRows = 3;
    const totalCols = 3;

    const generateRowsNCols = () => {
        const tempRows : JSX.Element[] = [];
        let index = 0;
        for(let i=0;i<totalRows;i++) {
            const tempCols : JSX.Element[] = [];
            for(let j=0;j<totalCols;j++) {
                tempCols.push(
                    <td>
                        <Cell value={cellsFromRedux[index]}
                              index={index} />
                    </td>
                );
                index++;
            }
            tempRows.push(<tr>{tempCols}</tr>);
        }
        return tempRows;
    };

    return (
        <div className={"ticTacToe"} id={"ticTacToeId"}>
            <table>
                {generateRowsNCols()}
            </table>
        </div>
    );
};