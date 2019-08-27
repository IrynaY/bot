import React from 'react';
import './style.css';

import Modal from "../modal"
import { getGifByTag } from "../../utils"

class PanicMode extends React.Component {

  state = {
    gif: ''
  }

  componentDidMount() {
    getGifByTag().then(url => {
      this.setState({gif: url})
      console.log(url)
    })
  }

  render() {
    const { gif } = this.state
    return (
      <div className="panic-overlay">
        <Modal>
          <div className="panic-wrapper">
            <p className="panic-title">
              <span role="img" aria-label="siren">🚨</span>IT'S PANIC TIME !!! <span role="img" aria-label="siren">🚨</span>
            </p>
            {gif && <img src={gif} alt="panic" style={{ maxWidth: 600 }}/>}
          </div>
        </Modal>
      </div>
    )
  }
}

export default PanicMode
