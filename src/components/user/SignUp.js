import React from 'react'
import {signUp} from '../../actions'
import { connect } from 'react-redux';
import UserForm from './UserForm';
import history from '../../history'

class SignUp extends React.Component {
  
  onSubmit = formValues => {
    this.props.signUp(formValues);
  }

  render () {
    if(!localStorage.getItem("validToken")){
      return (
        <div>
          <center><h2>Register Here</h2></center>
          <UserForm onSubmit={this.onSubmit} />
        </div>      
      )
    } else {
        return <div>{history.push('/')}</div>;
    }
  }
}

export default connect(null,{signUp})(SignUp)

