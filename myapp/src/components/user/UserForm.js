import React from 'react'
import { Field, reduxForm } from 'redux-form'
import _ from 'lodash'

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
        <input {...input} type={Type} autoComplete="off"/>
        {this.renderError(meta)}
      </div>
    )
  }

  onSubmit = formValues => {
    formValues= _.omit(formValues,'cpassword')
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
        />
        <Field 
          Type='text'
          name='last_name'
          component={this.renderField}
          label='Enter Last Name'
        />
        <Field 
          Type='email'
          name='email'
          component={this.renderField}
          label='Enter Email ID'
        />
        <Field 
          Type='text'
          name='username'
          component={this.renderField}
          label='Enter User Name'
        />
        <Field 
          Type='password' 
          name='password' 
          component={this.renderField} 
          label='Enter Password'
          
        />
        <Field 
          Type='password' 
          name='cpassword' 
          component={this.renderField} 
          idLable='cpsw' 
          label='Confirm Password'
          
        />
        <button className="ui button primary" >Submit</button>
      </form>
      </div>      
    )
  }
}


const validate = formValues => {
  const errors = {};
  
  if(!formValues.first_name){
    errors.first_name = "must enter first name!!!";
  }else if(formValues.first_name.length>30){
    errors.password = 'Max length is 30 character'
  }

  if(!formValues.last_name){
    errors.last_name = "must enter last name!!!";
  }else if(formValues.last_name.length>30){
    errors.password = 'Max length is 30 character'
  }

  if(!formValues.email){
    errors.email = "must enter  email!!!"; 
  }
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)) {
    errors.email = 'Enter Valid Email'
  }

  if(!formValues.username){
    errors.username = "must enter username!!!";
  }else if(formValues.username.length>30){
    errors.password = 'Max length is 30 character'
  }
  if (!/[^a-zA-Z0-9 ]/i.test(formValues.username)) {
    errors.username = 'Only Alfanumeric value will aceepted'
  }

  if(!formValues.password){
    errors.password = "must enter password!!!";
  }else if(formValues.password.length>6 && formValues.password.length<8){
    errors.password = 'Minimum length is 6 and maximum is 8 character'
  }

  if(!formValues.cpassword){
    errors.cpassword = "must enter confirm Password!!!";
  }

  if(formValues.password !== formValues.cpassword){
    errors.cpassword = "mismatch password!!!";
  }
  return errors;
};

export default reduxForm({
    form: 'registerForm',
    validate
  })(UserForm);

