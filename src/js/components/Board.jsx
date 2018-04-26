import React from "react";
import {Car1} from './car1.jsx';
import {CpuCar} from './cpuCar.jsx'; //dodane
import {Indicator} from './indicator.jsx'; //dodane
import {StartScreen} from './StartScreen.jsx';
import {EndScreen} from './EndScreen.jsx'

class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            indicatorReset: false,
            showEndGame: false,

            startGame: true
        }
    }

    resetIndicator =() => {
        
        this.clockTimer = setTimeout (() => {
            this.setState({
                indicatorReset: false,
            })
        }, 100)
        this.setState({
            indicatorReset: true,
        })
    }

    gameOver = () => {
        this.setState ({
            showEndGame: true
        })
    }

    startGame = () => {
        this.setState ({
            startGame: false
        })
    }
    
    render() {
        //  console.log(this.state.indicatorReset)
        if(this.state.startGame === true) {
            return <StartScreen startGame={this.startGame}/>
        } else if (this.state.showEndGame === true) {
            return <EndScreen />
        } else {
            return <div className="playground" >

                <Car1 resetIndicator={this.resetIndicator} gameOver={this.gameOver}/>
                <CpuCar />
                <div className="timer"></div>
                <div className="road"></div>
                <div className="clock">
                    <Indicator indiReset={this.state.indicatorReset}/>
                    <div className="dot"></div>
                </div>

            </div>
        }
    
    }
}


export {Board}