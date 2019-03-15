import React from 'react'
import { Link } from 'react-router-dom'

class Auth extends React.Component {
  
  onSubmit(){
    
    localStorage.removeItem("UserId")
    localStorage.removeItem("validToken");
  }
  
  renderAuthButton () {
    
    if(!localStorage.getItem("validToken")){
      return (
        <div>
          <Link className='ui button primary' to={`/user/login`}> Login</Link>
          <Link className='ui button primary' to={`/user/register`}> Register</Link>
        </div>
       
      );
    }else {
      return(
        <div className='ui list'>
          <div><button className ='ui button cyan'><Link to ='/' onClick = {this.onSubmit}>logout</Link></button></div>
        </div>
      );
    }
      
  }
  
  render () {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default Auth
