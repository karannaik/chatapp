import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {Cell} from "./Cell";
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import {Spin, Typography} from "antd";
import {updateCell} from "../../app/reducers/gameSlice";

const { Title } = Typography;

export const TicTacToeTable: React.FC = () => {

    const [opponentName, setOpponentName] = useState("");

    const [isLoading, setIsLoading] = useState(true);
    const playerId = useAppSelector(state => {return state.player.playerId});
    const playerName = useAppSelector(state => {return state.player.playerName});
    const dispatch = useAppDispatch();

    const client = new W3CWebSocket('wss://9vf5n75aj0.execute-api.us-east-2.amazonaws.com/Prod?roomId=ours');
    const cellsFromRedux = useAppSelector((state) => { return state.game.value });
    const totalRows = 3;
    const totalCols = 3;

    useEffect(() => {
        client.onopen = () => {
            console.log("Websocket initiated");
            if(playerId === "1") {
                setIsLoading(false);
            }
        };

        client.onmessage = (message) => {
            var newData = JSON.parse(message.data);
            console.log("Message received from cellId: "+newData.cellId);
            console.log("Message received from playerId: "+newData.playerId);
            console.log("Message received from playerName: "+newData.playerName);

            // if same player, then don't hide the loading bar
            if(playerId !== newData.playerId) {
                setIsLoading(false);
            }
            setOpponentName(newData.playerName);
            dispatch(updateCell({index: newData.cellId, playerId: newData.playerId}));
        };
    }, []);

    const sendMessage = (cellId) => {
        if(client.readyState === 1) {
            setIsLoading(true);
            const data = {
                "playerId": playerId,
                "playerName": playerName,
                "cellId": cellId
            };
            client.send(JSON.stringify({
                "action": "sendmessage",
                "data": JSON.stringify(data)
            }));
        }
    };

    const generateRowsNCols = () => {
        const tempRows : JSX.Element[] = [];
        let index = 0;
        for(let i=0;i<totalRows;i++) {
            const tempCols : JSX.Element[] = [];
            for(let j=0;j<totalCols;j++) {
                tempCols.push(
                    <td key={index}>
                        <Cell value={cellsFromRedux[index]}
                              index={index}
                              onClick={sendMessage}/>
                    </td>
                );
                index++;
            }
            tempRows.push(<tr key={"key-"+i}>{tempCols}</tr>);
        }
        return tempRows;
    };

    return (
        <Spin size="large"
              spinning={isLoading}
              tip="Loading... please wait for another players turn">
            <div className={"ticTacToe"} id={"ticTacToeId"}>
                <div>
                    <table>
                        <tbody>
                        {generateRowsNCols()}
                        </tbody>
                    </table>
                </div>
                <div>{playerName} vs {opponentName}</div>
            </div>
        </Spin>
    )
};