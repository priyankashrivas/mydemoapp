import React from 'react';
import {Field, reduxForm} from 'redux-form';


class PostForm extends React.Component {
    
    renderError({error,touched}){
        if(touched && error){
            return (
                <div className="ui error message">
                    <div className ="header" >{error}</div>
                </div>
            );
        }
    }
    

    renderInput = ({input,label,meta}) => {
        const className=`Field ${meta.error && meta.touched ? 'error' : ' '}`;
        return (
            <div className ={className}>
                <label>{label}</label>
                <input {...input} placeholder ={label}autoComplete="off"/>
                {this.renderError(meta)}
            </div>
        );  
    }

    renderSelect =({input,label,meta}) => {
        const className=`Field ${meta.error && meta.touched ? 'error' : ' '}`;
        return (
            <div className={className}>
              <label>
                {label}
              </label>
              <select {...input} placeholder ={label}>
                <option></option>
                <option value="publish">Publish</option>
                <option value="future">Future</option>
                <option value="draft">Draft</option>
                <option value="pending">Pending</option>
                <option value="draft">Private</option> 
              </select>
              {this.renderError(meta)}
            </div>
        )
    }

    renderContent = ({input,label,meta}) => {
        const className=`Field ${meta.error && meta.touched ? 'error' : ' '}`;
        return (
            <div className ={className}>
                <label>{label}</label>
                <textarea {...input} placeholder ={label} rows="10" cols="30"autoComplete="off"/>
                {this.renderError(meta)}
            </div>
        );  
    }
    
    onSubmit = formValues =>{
        this.props.onSubmit(formValues);
    };

    render() {
        return (
            <form onSubmit = {this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field 
                    name ="title" 
                    component ={this.renderInput} 
                    placeholder ='Enter title'
                    label="Enter title" 
                />
                <Field 
                    name ="content" 
                    component={this.renderContent}  
                    placeholder ='Enter content' 
                    label="Enter description" 
                />
                <Field 
                    name ="status" 
                    component={this.renderSelect}  
                    placeholder ='Enter status'
                    label="Status"
                />
                
                <div>
                    <button className = "ui button primary">submit</button>
                    <button className='ui button red' disabled={this.props.pristine || this.props.submitting} onClick={this.props.reset}>
                        Clear 
                    </button>
                </div>
            </form>
        );
    }  
}

const validate =(formValues) => {
    const error ={};
    if(!formValues.title){
        error.title= "Title required";
    }else if(formValues.title.length>20){
        error.title = 'Max length is 20 character'
    }

    if(!formValues.content){
        error.content="Content can't be empty";
    }else if(formValues.content.length<3){
        error.content = 'Content should be more than 3 characters'
    }else if(formValues.content.length>200){
        error.content = 'max length is 200 characters'
    }

    if(!formValues.status){
        error.status = "Select status.............!!!";
    }
    return error;
}

export default reduxForm({
    form: 'streamForm',
    validate:validate
})(PostForm);

