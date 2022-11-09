import React from 'react';
import Menu from '../Menu';
import "./style.scss";

class Header extends React.Component {
  render() {
    return (

      <div className='header-main'>
        <p className='header'>
          UNITED COLORS OF BENETTON
        </p>
        <Menu />
      </div>

    )
  }
}
export default Header
