import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'

class Modal extends React.Component {

  el = document.createElement('div')

  componentDidMount() {
    document.body.appendChild(this.el)
  }

  componentWillUnmount() {
    document.body.removeChild(this.el)
  }

  render() {
    return <>{
      ReactDOM.createPortal(
        <div className='modal-window'>{this.props.children}</div>,
        document.body
      )
    }</>
  }
}

export default Modal;
