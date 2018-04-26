import React from "react";

class EndScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startButton: false

        }
    }

    
    render() {
        return  <div className="gameOver">
        <div className="endScreenText">
            <h2>RACE<br/>OVER!</h2>
            <p>Press F5 to reload</p>
        </div>
        </div>
    }
}

export {EndScreen}