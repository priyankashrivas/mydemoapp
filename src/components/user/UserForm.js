import React from 'react'
import { Field, reduxForm } from 'redux-form'

class UserForm extends React.Component {
  
  renderError({error,touched}) {
    if(touched && error){
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

 renderField = ({input,Type, label,meta }) => {
   const className= `field ${meta.error && meta.touched ? 'error' : '' }`;
    return (
      <div className={className}>
        <label>
          {label}
        </label>
        <input {...input} type={Type} placeholder={label} autoComplete="off"/>
        {this.renderError(meta)}
      </div>
    )
  }

  onSubmit = formValues => {
   
    this.props.onSubmit(formValues);
  }

  render () {
    return (
      <div>
       <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form error'>
        <Field 
          Type='text'
          name='first_name'
          component={this.renderField}
          label='Enter First Name'
          placeholder='Enter your first name'
        />
        <Field 
          Type='text'
          name='last_name'
          component={this.renderField}
          label='Enter Last Name'
          placeholder='Enter your last name'
        />
        <Field 
          Type='email'
          name='email'
          component={this.renderField}
          label='Enter Email ID'
          placeholder='Enter email id'
        />
        <Field 
          Type='text'
          name='username'
          component={this.renderField}
          label='Enter User Name'
          placeholder='Enter username'
        />
        <Field 
          Type='password' 
          name='password' 
          component={this.renderField} 
          label='Enter Password'
          placeholder='Enter password'
          
        />
        <Field 
          Type='password' 
          name='cpassword' 
          component={this.renderField} 
          idLable='cpsw' 
          label='Confirm Password'
          placeholder='Confirm password'
          
        />
        <button className="ui button primary" >Submit</button>
        <button className='ui button red' disabled={this.props.pristine || this.props.submitting} onClick={this.props.reset}>
          Clear
        </button>
      </form>
      </div>      
    )
  }
}


const validate = formValues => {
  const errors = {};
  
  if(!formValues.first_name){
    errors.first_name = "First name required !!!";
  }else if(formValues.first_name.length>30){
    errors.password = 'Max length is 30 character'
  }

  if(!formValues.last_name){
    errors.last_name = "Last name required!!!";
  }else if(formValues.last_name.length>30){
    errors.password = 'Max length is 30 character'
  }

  if(!formValues.email){
    errors.email = "Email required!!!"; 
  }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)) {
    errors.email = 'Enter Valid Email'
  }

  if(!formValues.username){
    errors.username = "Username required......!!!";
  }else if(formValues.username.length>30){
    errors.password = 'Max length is 30 character'
  }else if (!/[^a-zA-Z0-9 ]/i.test(formValues.username)) {
    errors.username = 'Only Alphanumeric value will accepted'
  }

  if(!formValues.password){
    errors.password = "Password required.....!!!";
  }else if(formValues.password.length<6 ){
    errors.password = 'Minimum length is 6'  
  }else if(formValues.password.length>20 ){
    errors.password = 'Minimum length is 20' 
  }
  else if (!/[^a-zA-Z0-9 ]/i.test(formValues.password)) {
    errors.password = 'Only Alfanumeric value will aceepted'
  }

  if(!formValues.cpassword){
    errors.cpassword = "Confirm your password!!!";
  }else if(formValues.password !== formValues.cpassword){
    errors.cpassword = "mismatch password!!!";
  }
  return errors;
};

export default reduxForm({
    form: 'registerForm',
    validate
  })(UserForm);

