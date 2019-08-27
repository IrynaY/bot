import React from "react"
import socketIOClient from "socket.io-client"
import "./App.css"

import PanicMode from "./components/panic-mode"

class App extends React.Component {
  state = {
    isPanic: false
  }

  componentDidMount() {
    const socket = socketIOClient("http://localhost:3000/")
    socket.on("notify", () => {
      const { isPanic } = this.state
      this.setState({isPanic: !isPanic})
    })
  }

  render() {
    const { isPanic } = this.state
    return (
      <>{isPanic && <PanicMode/>}</>
    )
  }
}

export default App
