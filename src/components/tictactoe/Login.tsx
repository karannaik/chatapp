import React, {useState} from "react";
import {Typography, Input, Button } from "antd";
import { updatePlayerId, updatePlayerName, updateRoomName } from "src/app/reducers/playerSlice";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

const { Title } = Typography;
export default function Login() {

    const [name, setName] = useState("");
    const [room, setRoom] = useState("");

    const dispatch = useDispatch();

    const createGameClick = () => {
        dispatch(updatePlayerId("1"));
        dispatch(updatePlayerName(name));
        dispatch(updateRoomName(room));
    };

    const joinGameClick = () => {
        dispatch(updatePlayerId("2"));
        dispatch(updatePlayerName(name));
        dispatch(updateRoomName(room));
    };

    return (
        <>
            <div className={"title"}>
                <Title type={"secondary"} level={4}>Tic-Tac-Toe</Title>
            </div>
            <div className={"login"}>
                <Input size="large"
                       placeholder="Your name"
                       value={name}
                       onChange={(e) => {setName(e.target.value)}}
                       maxLength={25}/>
                <br/>
                <br/>
                <Input size="large"
                       placeholder="Room name"
                       value={room}
                       onChange={(e) => {setRoom(e.target.value)}}
                       maxLength={25} />
                <br/>
                <br/>
                <div >
                    <Link to="/tictactoe">
                        <Button id={"join-btn"} type="primary" onClick={joinGameClick}>Join Room</Button>
                    </Link>
                    {"  "}
                    <Link to="/tictactoe">
                        <Button id={"create-btn"} onClick={createGameClick}>Create Room</Button>
                    </Link>
                </div>
            </div>
        </>
    );
}