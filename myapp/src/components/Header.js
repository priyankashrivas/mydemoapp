import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Auth from '../Auth'

class Header extends Component {
    renderDashBoard(){
        if(localStorage.getItem("validToken")){
            return (
                <div className='ui secondary pointing menu'>
                <Link to='/' className='item'> React Demo App</Link>
                <Link to='/post/list'  className='ui button primary'> Post List</Link>
                <Link to='/post/create' className='ui button primary'> Create your own post</Link>
                    <div className='right menu'>
                        <Link className='ui button left aligned button' to={`/`}>back</Link>
                        <Auth/>
                    </div>
                </div>    
            )   
        }else{
            return (
                <div className='ui secondary pointing menu'>
                    <Link to='/' className='item'> React Demo App</Link>
                    <div className='right menu'>
                        <Auth />
                    </div>
                </div>
            )
        }
        
    }

  render () {
    return (
        <div>
            {this.renderDashBoard()}
        </div>
    )
  }
}

export default Header
