import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return(
        <div className={"home"}>
            <p><Link id={"chatAppId"} to="/chatapp" className="link-primary">Chat APP</Link></p>
            <p><Link id={"ticTacToeId"} to="/login" className="link-primary">Tic Tac Toe game</Link></p>
        </div>
    )
}