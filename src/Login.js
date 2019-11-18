import React from 'react'
import { connect } from 'react-redux'

import { loginPayment } from './action/actionLogin'

class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          userID:'',
          password:''
      };
  
      this.handleChange= this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

  
    handleChange(e) {
      this.setState({[e.target.name]:e.target.value})
    }
  
    handleSubmit(e) {
        e.preventDefault();
        const { userID, password } = this.state
        console.log('[usernmae]', userID,'[passsword]', password)
        // const { loginPayment } = this.props
        // loginPayment(username, password)
    }
  
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
            Name:
            <input type="text" 
            name="userID" 
            value={this.state.userID} 
            onChange={this.handleChange} />

            <input type="text" 
            name="password"
            value={this.state.password} 
            onChange={this.handleChange} />

          </label>
          <button type="submit">Submit</button>
          </form>
          
        </div>
      );
    }
  }

  const mapStateToProps = state => ({
    login: state.login.responseLogin
  })

  const mapDispatchToProps = ({
      loginPayment: (userID, password) => loginPayment(userID, password)
  })

  export default connect(mapStateToProps, mapDispatchToProps)(Login)