import React from "react";


class ReloadButton extends React.Component {
    constructor(props) {
        super(props);
    }

    reloadBtn = () => {
        if(typeof this.props.handleClick1 == "function" ) {
            this.props.handleClick1()
        }
    }

    render() {
        return <button className="reloadButton" onClick={this.reloadBtn}>Play Again?</button>
    }
}

class EndScreen extends React.Component {

    handleClick1 = () => {
        
        this.setState({
            startGame: true
        })
        this.props.reloadGame()
    }
    
    render() {
        return  <div className="gameOver">
        <div className="endScreenText">
            <h2>RACE<br/>OVER!</h2>
            <div>
                <ReloadButton handleClick1={this.handleClick1}/>
            </div>
        </div>
        </div>
    }
}

export {EndScreen}