import React from "react";

class StartButton extends React.Component {
    constructor(props) {
        super(props);
    }

    startClick = () => {
        if(typeof this.props.handleClick == "function" ) {
            this.props.handleClick()
        }
    }

    render() {
        return <button className="startButton" onClick={this.startClick}>Insert Coin</button>
    }
}

class StartScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startGame: false
        }
    }

    handleClick = () => {
        
        this.setState({
            startGame: true
        })
        this.props.startGame()
    }
    
    render() { //DODANE startGAME na buttonie
        return  <div className="startScreen">
            <div className="startScreenText">
                <h1>REACT<br/>RACER</h1>
                <div>
                    <StartButton handleClick={this.handleClick}/>
                </div>
            </div>
        </div>
    }
}

export {StartScreen}