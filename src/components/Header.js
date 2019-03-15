import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Auth from '../Auth'

class Header extends Component {
    renderHeader(){
        if(localStorage.getItem("validToken")){
            return (
                <div className='ui secondary pointing menu'>
                <Link to='/' className='item'>React Demo App</Link>
                <Link to='/post/list'  className='ui button primary'> Post List</Link>
                <Link to='/post/create' className='ui button grey'> Create your own post</Link>
                    <div className='right menu'>
                        <Link className='ui button left aligned button' to={`/post/list`}>back</Link>
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
            {this.renderHeader()}
        </div>
    )
  }
}

export default Header
