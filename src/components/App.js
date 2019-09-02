import React from 'react';
import Header from './Header';
import Jumbotron from './Jumbotron';
import Footer from './Footer';
import CardBox from './CardBox';
import Card from './Card';
import guessWho from "../guessWho.json";


function App() {
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
              name={guessWho.name}
            />
          )
        })}
      </CardBox>
      <Footer />
    </div>

  );
}

export default App;
