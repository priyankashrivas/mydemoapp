import React from 'react'
import { postList } from '../../actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class PostList extends React.Component {

  componentDidMount () {
    this.props.postList()
  }

  renderAdmin (post) {
   // console.log(localStorage.getItem("userId") ,'renderadmin');
    if((post.author).toString() === localStorage.getItem("userId")){
      return (
        <div className='right floated content'>
          <Link className='ui button primary' to={`/post/edit/${post.id}`}> Edit </Link>
          <Link className='ui button red' to={`/post/delete/${post.id}`}> Delete</Link>
        </div>
      );
    } 
  }

  renderPostList(){
    //console.log(this.props.posts,'render');
    return this.props.posts.map(post => {
      return (
        <div className='item' key={post.id}>
        {this.renderAdmin(post)}
          <i className='large middle aligned icon user' />
          <div className='content'>
            <Link to={`/post/view/${post.id}`} className="header">
            {post.title.rendered}
            </Link>
            <div className='description'>
              {post.excerpt.rendered}
            </div>
          </div>
        </div>
      )
    })
  }
  render () {
    return (
    <div>
      <center><h2>Post List</h2></center>
      <div className='ui celled list'>
        {this.renderPostList()}
      </div>
      
    </div>)
  }
}

const mapStateToProps = ({posts}) => {
  return {
    posts: Object.values(posts)
  }
}
export default connect(mapStateToProps , { postList })(PostList);