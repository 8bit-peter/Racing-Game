import React from "react";

class Car1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            end: 545,

            useClass: "",
            userMoveLeft: 0,
            userActiveGear: 0,
            isUserChangeGear: false,
            
            counterPlayer: 0,
         
        }
    }

    userCar = () => {
        this.userTimerMove = setInterval(()=>{
            if(this.state.userMoveLeft >= this.state.end){
                clearInterval(this.userTimerMove)
                this.props.gameOver()
               
            }
            this.setState ({
                userMoveLeft: this.state.userMoveLeft + (1+this.state.userActiveGear) //dodanie mnożnika
            })
        }, 50) 
    }

  

    componentDidMount() {

       window.addEventListener('keypress', this.userGearChange);

        this.timer = setInterval(()=>{

            // console.log("userActiveGear "+this.state.userActiveGear)

            //Koniec gry
            if(this.state.userMoveLeft >= this.state.end){
                clearInterval(this.timer)
            }

            this.setState ({
                counterPlayer: this.state.counterPlayer + 1
            })
        }, 1000) 
        this.userCar()
    }

    userGearChange = (event) => {
        if(event.keyCode == 32 && this.state.counterPlayer >= 2 && this.state.counterPlayer <= 6) {
            
            this.setState({
                userActiveGear: this.state.userActiveGear+1,
                counterPlayer: 0
            })
            this.props.resetIndicator()
        }
        

    }

    render() {
        const userCar = {
            left: this.state.userMoveLeft
        }
        return  <div className="car1" style={userCar}></div>
    }
}

export {Car1}