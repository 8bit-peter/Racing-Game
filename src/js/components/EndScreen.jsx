import React from "react";

class EndScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startButton: false

        }
    }

    
    render() {
        return  <div className="startScreen">
        <h2>RACE OVER!</h2>
            
        </div>
    }
}

export {EndScreen}