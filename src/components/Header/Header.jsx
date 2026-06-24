import { Component } from 'react';
import './Header.css';

export class Header extends Component {
  render() {
    const movieTitle = this.props.title;
    return (
      <>
        <h2>{movieTitle}</h2>
      </>
    );
  }
}

export default Header;
