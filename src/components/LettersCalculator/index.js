// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  increaseCount = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="img-letters-container">
          <div>
            <h1 className="heading">
              Calculate the
              <br />
              letters you
              <br />
              enter
            </h1>
            <label className="text" htmlFor="myInput">
              Enter the phrase
            </label>
            <br />
            <input
              id="myInput"
              type="text"
              placeholder="Enter the Phrase"
              className="input"
              onKeyDown={this.increaseCount}
            />
            <br />
            <p className="button">No.of letters: {count}</p>
          </div>
          <div>
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
