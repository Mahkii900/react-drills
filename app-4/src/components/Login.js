import React, {Component} from 'react'

export default class Login extends Component {
    constructor() {
        super()

        this.state = {
            username: '',
            password: ''
          }
        this.alertLogin = this.alertLogin.bind(this)
    }

    updateUsername(val) {
        this.setState({username: val})
    }
    
    updatePassword(val) {
        this.setState({password: val})
    }

    alertLogin() {
        alert(`${this.state.username} ${this.state.password}`)
    }

    render() {
        return (
            <div>
                <input className="userNameInput" onChange={(e)=>this.updateUsername(e.target.value)}/>
                <input className="passwordInput" onChange={(e) =>this.updatePassword(e.target.value)}/>
                <button onClick={this.alertLogin}>Login</button>
            </div>
        )
    }
}