import React from "react";



import './style.scss';


class Box extends React.Component {

  state = {
    isHover: false,
  }


  giveBgColor = (e) => {
    this.setState({ isHover: true })
  }

  removeBgColor = (e) => {
    this.setState({ isHover: false })
  }

  render() {
    return <div  >
       <div className={`G-padding-33 ${this.state.isHover ? 'P-hovered' : ''}`} 
      style={{ backgroundColor: this.state.isHover ? this.props.colorValue ? this.props.colorValue : 'black' : 'transparent'  }}
      onMouseLeave={this.removeBgColor}
      onMouseOver={this.giveBgColor}
      
    >
      <div className="compo-box hover" >

        {this.props.main && this.props.main.length ? <p>{this.props.main}</p> : null}
        {/* {this.props.children} */}
      </div>
    </div>
    </div>

  }
}

export default Box