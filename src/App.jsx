import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

class App extends React.Component {
  movieInfo = {
    title: 'Back to the Future',
    plot: "In 1985, teenager Marty McFly lives in Hill Valley, California, with his depressed alcoholic mother, Lorraine; his older siblings, who are professional and social failures; and his meek father, George, who is bullied by his supervisor, Biff Tannen. After Marty's band fails a music audition, he confides in his girlfriend, Jennifer Parker, that he fears becoming like his parents despite his ambitions.",
    actors: [
      'Michael J. Fox',
      'Christopher Lloyd',
      'Lea Thompson',
      'Crispin Glover',
    ],
    country: 'United States',
    genre: 'Science fiction',
    year: '1985',
    studio: {
      name: 'Universal',
      address: 'Hollywood',
      directorsEmail: 'test@gmail.com',
    },
  };
  websiteCreatorPhone = '+380630300438';
  render() {
    return (
      <>
        <header id='header'>
          <Header title={this.movieInfo.title} />
        </header>
        <main id='main'>
          <Main
            plot={this.movieInfo.plot}
            actors={this.movieInfo.actors}
            country={this.movieInfo.country}
            genre={this.movieInfo.genre}
            year={this.movieInfo.year}
            studio={this.movieInfo.studio.name}
          ></Main>
        </main>
        <footer id='footer'>
          <Footer
            studioAdress={this.movieInfo.studio.address}
            directorsEmail = {this.movieInfo.studio.directorsEmail}
            creatorPhone={this.websiteCreatorPhone}
          />
        </footer>
      </>
    );
  }
}

export default App;
