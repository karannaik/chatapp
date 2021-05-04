import React, {Component} from "react";
import {Card, Input, Typography, Avatar} from "antd";
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import 'antd/dist/antd.css';
import '../../index.css';

const { Meta } = Card;
const { Search } = Input;
const { Text } = Typography;
const client = new W3CWebSocket('wss://9vf5n75aj0.execute-api.us-east-2.amazonaws.com/Prod?roomId=ours');

export default class ChatApp extends Component {
    state = {
        userName: "",
        isLoggedIn: false,
        messages: [],
        sendVal: ""
    };
    sendMessage = (value) => {
        if(client.readyState === 1) {
            const data = {
                "message": value,
                "user": this.state.userName,
                "roomId": "oursRoom"
            };
            client.send(JSON.stringify({
                "action": "sendmessage",
                "data": JSON.stringify(data)
            }));
        }
    };

    componentDidMount() {

        client.onopen = () => {
            console.log("Websocket initiated");
        };

        client.onmessage = (message) => {
            var newData = JSON.parse(message.data);
            console.log("Message received from "+newData.user);

            this.setState({
                messages: [...this.state.messages, {
                    "message": newData.message,
                    "user": newData.user
                }]
            });
        };
    }

    render() {
        return (
            <div className="main" id='wrapper'>
                <div className={"title"}>
                    <Text type={"secondary"}>Chat App</Text>
                </div>
                {this.state.isLoggedIn ?
                    <div>
                        <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: 50 }} id="messages">
                            {this.state.messages.map((message: {message: string, user: string}) =>
                                <Card key={message.message} style={{ width: 300, margin: '16px 4px 0 4px',
                                    alignSelf: this.state.userName === message.user ? 'flex-end' : 'flex-start' }}
                                      loading={false}>
                                    <Meta
                                        avatar={
                                            <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
                                                {message.user[0].toUpperCase()}
                                            </Avatar>
                                        }
                                        title={message.user+":"}
                                        description={message.message}
                                    />
                                </Card>
                            )}
                        </div>
                        <div className={"bottom"} id={"messageInput"}>
                            <Search
                                placeholder={"message..."}
                                enterButton={"send"}
                                size={"large"}
                                value={this.state.sendVal}
                                onChange={(e) => {this.setState({ sendVal:e.target.value })}}
                                onSearch={value => this.sendMessage(value)}
                            />
                        </div>
                    </div> :
                    <div style={{ padding: '200px 40px' }}>
                        <Search
                            placeholder={"Enter username"}
                            enterButton={"Login"}
                            size={"large"}
                            onSearch={value => this.setState({isLoggedIn:true, userName: value})}
                        />
                    </div>
                }
            </div>
        )
    }
}
