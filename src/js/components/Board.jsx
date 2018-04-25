import React from "react";
import {Car1} from './car1.jsx';
import {CpuCar} from './cpuCar.jsx' //dodane
import {Indicator} from './indicator.jsx' //dodane

class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            indicatorReset: false,
            showEndGame: false
        }
    }

    resetIndicator =() => {
        
        let clockTimer = setTimeout (() => {
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
    
    render() {
        //  console.log(this.state.indicatorReset)
        if(this.state.showEndGame === true) {
            return <h1>lalala</h1> // dodany ekran endGame
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