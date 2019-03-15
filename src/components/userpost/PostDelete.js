import React from 'react'
import {postList,deletePost} from '../../actions'
import Modal from '../Modal'
import history from '../../history'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class PostDelete extends React.Component {

  componentDidMount(){
    console.log(this.props.match.params.id)
    this.props.postList(this.props.match.params.id)
  }

  renderAction () {
    const {id} = this.props.match.params;
    return (
      <React.Fragment>
        <button onClick={() => this.props.deletePost(id) } className='ui negative button'>
          Delete
        </button>
        <Link to="/post/list" className='ui primary button'>
          Cancel
        </Link>
      </React.Fragment>
    )
  }

  renderContent(){
    if(!this.props.post){
      return 'Are You sure want to Delete this post .............?' 
    }
    return 'Are you sure you want to delete this post....?'
   }

  render () {
    return (
      <Modal
      title='Delete Post'
      content={this.renderContent()}
      actions={this.renderAction()}
      onDismiss={() => history.push('/post/list')}
    />
    )
  }
}

const mapStateToProps = (state,ownProps) => {
    return {
      post:state.posts[ownProps.match.params.id]
    }
  }

  export default connect(mapStateToProps,{postList,deletePost})(PostDelete)
