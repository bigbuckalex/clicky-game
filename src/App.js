import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { lookupService } from 'dns';
import images from "./images.json";
import Card from "./components/Card";

class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    instructions: "Click a tile to begin!",
    guessId: 0,
    guessedIds: [],
    images: images
  }

  lose = () => {
    this.setState({
      score: 0,
      guessedIds: [],
      instructions: "Already clicked! Try again."
    });
  }

  handleCardClicked = id => {
    this.setState({guessId: id});
    this.state.guessedIds.includes(this.state.guessId) ?
      this.lose() :
      this.setState({
        score: this.state.score++,
        topScore: this.state.topScore++,
        guessedIds: this.state.guessedIds.push(this.state.guessId),
        instructions: "Click a tile to begin!"
      });
  }

  render() {
    return (
      <div className="App">
        <nav class="navbar navbar-dark bg-dark">
          <span class="navbar-brand mb-0 h1">Clicky Game!</span>
          <span id="instructions">{this.state.instructions}</span>
          <span id="score">Score: {this.state.score} | Top Score: {this.state.topScore}</span>
        </nav>
        <div id="card-container">
          {this.state.images.map((card, i) => {
            <Card
              key= {i}
              id= {card.id}
              image= {card.image}
            />
          })}
        </div>
      </div>
    );
  }
}

export default App;
