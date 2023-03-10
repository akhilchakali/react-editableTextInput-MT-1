import './index.css'

import {Component} from 'react'

class LoginPage extends Component {
  state = {
    input1: '',
    operator: '',
    input2: '',
    output: '',
    list: [],
    masterPage: false,
    studentPage: false,
  }

  calculate = () => {
    const {input1, input2, operator} = this.state
    const a = {operator}
    if (a.operator === '+') {
      const x = parseInt(input1, 10) + parseInt(input2, 10)
      const y = `${input1}${operator}${input2}`
      this.setState({output: x})
      localStorage.setItem(y, `${y} = ${x}`)
      this.setState(prevState => ({list: [...prevState.list, y]}))
    } else if (a.operator === '-') {
      const x = parseInt(input1, 10) - parseInt(input2, 10)
      const y = `${input1}${operator}${input2}`
      this.setState({output: x})
      localStorage.setItem(y, `${y} = ${x}`)
      this.setState(prevState => ({list: [...prevState.list, y]}))
    } else if (a.operator === '*') {
      const x = parseInt(input1, 10) * parseInt(input2, 10)
      const y = `${input1}${operator}${input2}`
      this.setState({output: x})
      localStorage.setItem(y, `${y} = ${x}`)
      this.setState(prevState => ({list: [...prevState.list, y]}))
    } else if (a.operator === '/') {
      let x = parseInt(input1, 10) / parseInt(input2, 10)
      const y = `${input1}${operator}${input2}`
      x = Math.floor(x)
      this.setState({output: x})
      localStorage.setItem(y, `${y} = ${x}`)
      this.setState(prevState => ({list: [...prevState.list, y]}))
    }
    this.setState({input1: '', input2: '', operator: ''})
  }

  changeInput1 = event => {
    this.setState({input1: event.target.value})
  }

  changeInput2 = event => {
    this.setState({input2: event.target.value})
  }

  changeOperator = event => {
    this.setState({operator: event.target.value})
  }

  masterClicked = () => {
    this.setState({masterPage: true})
  }

  studentClicked = () => {
    this.setState({studentPage: true})
  }

  login = () => (
    <div className="tot-cont">
      <div className="login-cont">
        <h1>Are you a teacher? Please login here.</h1>
        <button className="btn" type="button" onClick={this.masterClicked}>
          Login
        </button>
      </div>
      <div className="login-cont">
        <h1>Are you a student? Please login here.</h1>
        <button className="btn" type="button" onClick={this.studentClicked}>
          Login
        </button>
      </div>
    </div>
  )

  masterLogout = () => {
    this.setState({masterPage: false})
  }

  master = () => {
    const {input1, input2, operator, output} = this.state
    return (
      <div className="master">
        <nav className="nav">
          <button className="logout" type="button" onClick={this.masterLogout}>
            Logout
          </button>
        </nav>
        <div className="master-cont">
          <h1>WelCome to Master Page.</h1>
          <div className="two-conts">
            <div className="cont">
              <h3>Enter details to calculate</h3>
              <input
                type="text"
                value={input1}
                onChange={this.changeInput1}
                placeholder="Enter digit"
              />
              <br />
              <input
                type="text"
                value={operator}
                onChange={this.changeOperator}
                placeholder="Enter arthimetic operator"
              />
              <br />
              <input
                type="text"
                value={input2}
                onChange={this.changeInput2}
                placeholder="Enter digit"
              />
              <br />
              <button type="button" onClick={this.calculate}>
                Calculate
              </button>
            </div>
            <div className="cont">
              <h3>See your output here.</h3>
              <h3>{output}</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }

  studentLogout = () => {
    this.setState({studentPage: false})
  }

  student = () => {
    const {list} = this.state
    return (
      <div className="student">
        <nav className="nav">
          <button className="logout" type="button" onClick={this.studentLogout}>
            Logout
          </button>
        </nav>
        <div>
          <ul className="ul">
            {list.map(each => (
              <li className="li">{localStorage.getItem(each)}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    const {masterPage, studentPage} = this.state
    return (
      <div>
        {masterPage === false && studentPage === false ? this.login() : ''}
        {masterPage ? this.master() : ''}
        {studentPage ? this.student() : ''}
      </div>
    )
  }
}
export default LoginPage
