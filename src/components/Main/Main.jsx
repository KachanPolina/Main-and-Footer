import { Component } from 'react';
import poster from '../../assets/Back_to_the_Future.jpg'
import './Main.css';

export class Main extends Component {
  render() {
    const plot = this.props.plot;
    const actors = this.props.actors;
    const country = this.props.country;
    const genre = this.props.genre;
    const year = this.props.year;
    const studio = this.props.studio;
    return (
      <>
        <div className='movie-info'>
          <div className='plot'>
            <h3>Plot</h3>
            <p>{plot}</p>
          </div>
          <div className='other-info'>
            <div className='actors'>
              <h3>Actors</h3>
              <ul>
                {actors.map((actor) => {
                  return <li key={actor}>{actor}</li>;
                })}
              </ul>
            </div>
            <div className='info'>
              <h3>Info</h3>
              <p>Country: {country}</p>
              <p>Genre: {genre}</p>
              <p>Year: {year}</p>
              <p>Studio: {studio}</p>
            </div>
          </div>
          <img src={poster} alt="Movie poster" />
        </div>
      </>
    );
  }
}

export default Main;
