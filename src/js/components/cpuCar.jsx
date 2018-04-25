import React from "react";

class CpuCar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            moveLeft: 0,
            end: 545,

            counterGlobal: 0,
            activeGear: 0,

            // useClass: "",
            // userMoveLeft: 0,
            // userActiveGear: 0,

            // isKeyPressed: false, //dodany state
            // isUserChangeGear: false,
            
            // counterPlayer: 0
        }
    }

    moveCar = () => {
        this.timerMove = setInterval(()=>{
            if(this.state.moveLeft >= this.state.end){
                clearInterval(this.timerMove)
            }
            this.setState ({
                moveLeft: this.state.moveLeft + (2+this.state.activeGear) //dodanie mnożnika
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

            // console.log("globalCounter "+this.state.counterGlobal)

            //Koniec gry
            if(this.state.userMoveLeft >= this.state.end){
                clearInterval(this.timer)
            }

            
            const obj = this.automateChangeGear(counter);
            counter = obj.counter;

            this.setState ({
                counterGlobal: counter,
                activeGear:  obj.activeGear
            })
        }, 1000) 

        this.moveCar();

    }

    render() {
        const cpuCar = {
            left: this.state.moveLeft
        }
        return  <div className="car2" style={cpuCar}></div>
    }
}

export {CpuCar}