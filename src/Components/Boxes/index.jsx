import React from "react";
import './style.scss'

class Container extends React.Component {
  state = {
    name: "Italian Brand",
    info: "Brand",

  }

 

  ContainerInfo = () => {
    this.setState({name: ++this.state.name})
  }


  render() {
    return <div className="box">
      <h1>{this.state.name}</h1>
      <p>{this.state.info} </p>

    </div>
  }
}

export default Container