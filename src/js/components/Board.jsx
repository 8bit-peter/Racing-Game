import React from "react";


class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            moveLeft: 0,
            end: 545,

            counterGlobal: 0,
            activeGear: 0,

            useClass: "",
            userMoveLeft: 0,
            userActiveGear: 0,
            isKeyPressed: false, //dodany state
            isUserChangeGear: false,
            
            counterPlayer: 0
        }
    }

    moveCar = () => {
        this.timerMove = setInterval(()=>{
            if(this.state.moveLeft >= this.state.end){
                clearInterval(this.timerMove)
            }
            this.setState ({
                moveLeft: this.state.moveLeft + (1+this.state.activeGear) //dodanie mnożnika
            })
        }, 50) 
    }

    userCar = () => {
        this.userTimerMove = setInterval(()=>{
            if(this.state.userMoveLeft >= this.state.end){
                clearInterval(this.userTimerMove)
            }
            this.setState ({
                userMoveLeft: this.state.userMoveLeft + (1+this.state.userActiveGear) //dodanie mnożnika
            })
        }, 50) 
    }


    automateChangeGear = (counter) => {
        if(counter >=6) {
            return {
               activeGear: this.state.activeGear + 1,
               counter: 0
            }
        } else {
            return {
                activeGear: this.state.activeGear,
                counter: counter
            }
        }
    }

    componentDidMount() {
        let counter = 0;
        this.timer = setInterval(()=>{
            counter++;

            console.log("globalCounter "+this.state.counterGlobal)

            //Koniec gry
            if(counter >=18){
                clearInterval(this.timer)
            }

            
            const obj = this.automateChangeGear(counter);
            counter = obj.counter;

            this.setState ({
                counterGlobal: counter,
                activeGear:  obj.activeGear
                // activeGear: counter >=3 && counter <=9 ? this.state.activeGear : this.state.activeGear //podmianka by został na biegu
            })
        }, 1000) 

        this.moveCar();
        this.userCar();

    }
    userGearChange = (event) => {
        if(event.keyCode == 32 && this.state.counterGlobal >= 2 && this.state.counterGlobal <= 6) {
            //sprawdzic na jakim bieg mozna zmienic
            //         return {
            //             activeGear: this.state.activeGear + 1,
            //             counter: 0
            //         }
            //     } else {
            //         return {
            //             activeGear: this.state.activeGear,
            //             counter: counter
            //         }
            // }

            this.setState({
                userActiveGear: this.state.userActiveGear+1,
                counterGlobal: 0
            })
        }
         
    }

    render() {
         
        console.log("activeGear "+this.state.activeGear)
        const cpuCar = {
            left: this.state.moveLeft
        }
        const userCar = {
            left: this.state.userMoveLeft
        }
        return <div className="playground" onKeyDown={this.userGearChange}
        tabIndex="0">
    
        <div className="car1" style={userCar}></div>
        <div className="timer"></div>
        <div className="car2" style={cpuCar}></div>
        <div className="road"></div>
        <div className="clock">
            <div className="indicator"></div>
            <div className="dot"></div>
        </div>

    </div>
    }
}


export {Board}