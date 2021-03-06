import React from 'react';
import Header from './Header';
import Jumbotron from './Jumbotron';
import Footer from './Footer';
import CardBox from './CardBox';
import Card from './Card';
import guessWho from '../guessWho.json';

class App extends React.Component {
	state = {
		guessWho,
		score: 0,
		topScore: 0,
		message: 'Click on a character!',
		clickedCards: [],
		wrongImage: false,
	};

	handleClickedCard = (id) => {
		// find out if id exists in clickedCards array
		if (this.state.clickedCards.includes(id)) {
			this.setState({
				message: 'You guessed incorrectly!',
				wrongImage: true,
				// reset state on all elements
				score: 0,
				clickedCards: [],
			});
		} else {
			this.setState({
				wrongImage: false,
				// Console Error: "Do not mutate state directly. Use setState()  react/no-direct-mutation-state"
				score: (this.state.score += 1),
				message: 'You guessed correctly!',
				guessWho: this.state.guessWho.sort(() => Math.random() - 0.5),
			});
			// Push card id to clickedCards
			this.setState({
				clickedCards: [...this.state.clickedCards, id],
			});
		}
		// Top score checker
		if (this.state.topScore < this.state.score) {
			this.setState({
				topScore: this.state.score,
			});
		}
		console.log(this.state.clickedCards);
	};

	render() {
		return (
			<div className='wrapper'>
				<Header
					score={this.state.score}
					topScore={this.state.topScore}
					message={this.state.message}
					wrongImage={this.state.wrongImage}
				/>
				<Jumbotron />
				<CardBox wrongImage={this.state.wrongImage}>
					{guessWho.map((character) => {
						return (
							<Card
								key={character.id}
								image={character.image}
								name={character.name}
								id={character.id}
								clicked={character.clicked}
								clickedCard={this.handleClickedCard}
							/>
						);
					})}
				</CardBox>
				<Footer />
			</div>
		);
	}
}

export default App;
