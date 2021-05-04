import React from "react";
import {Typography, Input, Button } from "antd";

const { Title } = Typography;
export default function Login() {
    return (
        <>
            <div className={"title"}>
                <Title type={"secondary"} level={4}>Tic-Tac-Toe</Title>
            </div>
            <div className={"login"}>
                <Input size="large"
                       placeholder="Your name"
                       maxLength={25}/>
                <br/>
                <br/>
                <Input size="large"
                       placeholder="Room name"
                       maxLength={25} />
                <br/>
                <br/>
                <div >
                    <Button id={"join-btn"} type="primary" >Join Room</Button>
                    {" "}
                    <Button id={"create-btn"} >Create Room</Button>
                </div>
            </div>
        </>
    );
}