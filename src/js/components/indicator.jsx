import React from "react";

class Indicator extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          resetUserCounter: false
      }
  }

    render() {
        // console.log(this.props.indiReset)
        const classElement = this.props.indiReset === true ? "indicator" : "indicator moveCLock"
        return  <div className={classElement}></div>
    }
}

export {Indicator}