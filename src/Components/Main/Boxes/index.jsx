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
    return <div className={`G-padding-33 ${this.state.isHover ? 'P-hovered' : ''}`}
      style={{ backgroundColor: this.state.isHover ? this.props.colorValue ? this.props.colorValue : 'blue' : 'transparent' }}
      onMouseLeave={this.removeBgColor}
      onMouseOver={this.giveBgColor}
      onClick={this.props.onClick}
    >
      <div className="compo-box hover">

        {this.props.main && this.props.main.length ? <p>{this.props.main}</p> : null}
        {this.props.children}
      </div>
    </div>

  }
}

export default Box