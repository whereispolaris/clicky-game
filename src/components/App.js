import React from 'react';
import Header from './Header';
import Jumbotron from './Jumbotron';
import Footer from './Footer';
import CardBox from './CardBox';
import Card from './Card';
import guessWho from "../guessWho.json";


class App extends React.Component {

  state = {
    guessWho,
    clicked: false
  }

  handleClickedCard = (id) => {
    console.log(id + " Has been clicked");
    this.setState({
      guessWho: this.state.guessWho.sort(() => Math.random() - 0.5)
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Jumbotron />
        <CardBox>
          {guessWho.map(character => {
            return (
              <Card
                key={character.id}
                image={character.image}
                name={character.name}
                id={character.id}
                clicked={this.state.clicked}
                clickedCard={this.handleClickedCard}

              />
            )
          })}
        </CardBox>
        <Footer />
      </div>

    );
  }

}

export default App;
