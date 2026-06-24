import { Component } from 'react';
import './Footer.css';

export class Footer extends Component {
  render() {
    const studioAdress = this.props.studioAdress;
    const directorsEmail = this.props.directorsEmail;
    const creatorPhone = this.props.creatorPhone;
    return (
      <>
        <div className='footer-info'>
          <p>Studio adress: {studioAdress}</p>
          <p>Directors email:{directorsEmail}</p>
          <p>Сreator phone:{creatorPhone}</p>
        </div>
      </>
    );
  }
}

export default Footer;
