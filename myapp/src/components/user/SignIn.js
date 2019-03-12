import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {signIn} from '../../actions'
import { connect } from 'react-redux'
import history from '../../history'


class SignIn extends React.Component {

  renderError({error,touched}){
    if(touched && error){
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

 renderField = ({input,Type, label,meta,placeholder}) => {
  const className= `field ${meta.error && meta.touched ? 'error' : '' }`;
  return (
    <div className={className}>
      <label>
        {label}
      </label>
      <input {...input}  type={Type} holder ={placeholder} autoComplete="off"/>
      {this.renderError(meta)}
    </div>
  )
}


onSubmit = formValues => {
  this.props.signIn(formValues);
}


  render () {
    if(!localStorage.getItem("validToken")){
      return (
        <div>
            <center><h2>Login Here</h2></center>
          <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form error'>
            <Field 
              Type='text'
              name='username'
              component={this.renderField}
              label='Username'
              placeholder ='Enter username'
            />
            <Field 
              Type='password' 
              name='password' 
              component={this.renderField}  
              label='Password'
            />
            <button className="ui button primary" >Submit</button>
          </form>
        </div>      
      );
    }else {
      return <div>{history.push('/')}</div>;
    }
    
  }
}


const validate = formValues => {
  const errors = {};
  
  if(!formValues.username){
    errors.username = "must enter username!!!";  
  }else if(formValues.username.length>30){
    errors.username = 'Max length is 30 character'
  } 

  if(!formValues.password){
    errors.password = "must enter password!!!";
  }else if(formValues.password.length>6 && formValues.password.length<8){
    errors.password = 'Minimum length is 6  and maximum is 8 character'
  } 

  return errors;
};

 const form = reduxForm({
    form: 'loginForm',
    validate
  })(SignIn);

  export default connect(null,{signIn})(form);

