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
    score: 0,
    topScore: 5,
    message: "Click and Image to Begin!",
    clickedCards: []
  }

  handleClickedCard = (id) => {
    // find out if Card exists in clickedCards
    if (this.state.guessWho[id - 1].clicked) {
      this.setState({
        message: "You're wrong!",

      });
    } else {
      this.setState({
        score: this.state.score += 1,
        message: "You guessed correctly!",
        // Push card id to clickedCards
        clickedCards: this.state.clickedCards.push(id),
        guessWho: this.state.guessWho.sort(() => Math.random() - 0.5)
      });
      console.log(this.state.clickedCards);
    }
    // Top score checker
    if (this.state.topScore < this.state.score) {
      this.setState({
        topScore: this.state.score
      });
    }
  }

  render() {
    return (
      <div>
        <Header
          score={this.state.score}
          topScore={this.state.topScore}
          message={this.state.message}
        />
        <Jumbotron />
        <CardBox>
          {guessWho.map(character => {
            return (
              <Card
                key={character.id}
                image={character.image}
                name={character.name}
                id={character.id}
                clicked={character.clicked}
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
