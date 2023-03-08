import {Component} from 'react'

class Editable extends Component {
  state = {isSaved: false, value: ''}

  inputValue = event => {
    this.setState({value: event.target.value})
  }

  clicked = () => {
    this.setState(prevState => ({isSaved: !prevState.isSaved}))
  }

  editClicked = () => {
    this.setState(prevState => ({isSaved: !prevState.isSaved}))
  }

  saveContent = () => {
    const {value} = this.state

    return (
      <div>
        <h1>Editable Text Input</h1>
        <input type="text" value={value} onChange={this.inputValue} />
        <button type="button" onClick={this.clicked}>
          Save
        </button>
      </div>
    )
  }

  savedData = () => {
    const {value} = this.state
    return (
      <div>
        <h1>Editable Text Input</h1>
        <p>{value}</p>
        <button type="button" onClick={this.editClicked}>
          Edit
        </button>
      </div>
    )
  }

  render() {
    const {isSaved} = this.state
    return <div>{isSaved ? this.savedData() : this.saveContent()}</div>
  }
}
export default Editable
