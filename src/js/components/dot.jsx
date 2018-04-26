import React from "react";

class Dot extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          resetUserCounter: false
      }
  }

    render() {
        // console.log(this.props.indiReset)
        const classElement = this.props.indiReset === true ? "dot" : "dot greenColor"
        return  <div className={classElement}></div>
    }
}

export {Dot}