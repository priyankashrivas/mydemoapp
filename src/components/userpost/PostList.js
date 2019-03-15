import React from 'react'
import { postList } from '../../actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import history from '../../history'

class PostList extends React.Component {

  componentDidMount () {
    this.props.postList()
  }

  removeHTMLTag(str) {
    return str.replace(/<[/]?\w+>/g, "");
  }

  renderAdmin (post) {
   // console.log(localStorage.getItem("userId") ,'renderadmin');
    if((post.author).toString() === localStorage.getItem("userId")){
      return (
        <div className='right floated content '>
          <Link className='ui button primary' to={`/post/edit/${post.id}`}> Edit </Link>
          <Link className='ui button red' to={`/post/delete/${post.id}`}> Delete</Link>
        </div>
      );
    } 
  }

  renderPostList(){
    if(localStorage.getItem("validToken")){
      console.log(this.props.posts,'render');
      return this.props.posts.map(post => {
        console.log(post,'render');
        return (
          <div className='item' key={post.id}>
           {this.renderAdmin(post)} 
            <i className='large middle aligned icon user' />
            <div className='content'>
              <Link to={`/post/view/${post.id}`} className="header">
             {post.id} {post.title.rendered}
              </Link>
              <div className='description'>
                {this.removeHTMLTag(post.content.rendered)}
              </div>
            </div>
          </div>
        )
      })
    } else {
      return(
        <div>{history.push('/')}</div>
      );
    }
    
  }
  render () {
    return (
      <div>
        <center><h2>Post List</h2></center>
        <div className='ui celled list'>
          {this.renderPostList()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({posts}) => {
  console.log(posts)
  return {
    posts: Object.values(posts)
  }
}
export default connect(mapStateToProps , { postList })(PostList);