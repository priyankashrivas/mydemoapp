import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import Header from './Header'
import history from '../history'
import SignIn from './user/SignIn'
import SignUp from './user/SignUp'
import ProfileUpdate from './user/ProfileUpdate'

import PostCreate from './userpost/PostCreate';
import PostDelete from './userpost/PostDelete';
import PostEdit from './userpost/PostEdit';
import PostList from './userpost/PostList';
import PostView from './userpost/PostView';

class App extends React.Component {
  router () {
    return (
      <div className='ui container'>
        <Router history={history}>
          <div>
            <Header />
            <Switch>
              <Route path='/user/login' exact component={SignIn} />
              <Route path='/user/register' exact component={SignUp} />
              <Route path='/user/profileUpdate' exact component={ProfileUpdate} />
              

              <Route path='/post/create' exact component={PostCreate} />
              <Route path='/post/delete/:id' exact component={PostDelete} />
              <Route path='/post/edit/:id' exact component={PostEdit} />
              <Route path='/post/list' exact component={PostList} />
              <Route path='/post/view/:id' exact component={PostView} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }

  render () {
    return( 
      <div>
        {this.router()}
      </div>
    );
  }
}

export default App
