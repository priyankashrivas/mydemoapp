import React from 'react'
import {editPost} from '../../actions'
import {connect} from 'react-redux'
import PostForm from './PostForm';
import history from '../../history'


class PostEdit extends React.Component {

  onSubmit = formValues => {
    this.props.editPost(this.props.match.params.id,formValues);
  }

  removeHTMLTag(str) {
    return str.replace(/<[/]?\w+>/g, "");
  }
  renderPost(){
    if(localStorage.getItem("authToken") && this.props.match.params.id){
      if((this.props.post === undefined) ){
        return (
         history.push('/')
        )
      }else{
        return (
          <div>
            <h3>Update post</h3>
            <PostForm 
              initialValues={{
                title:this.props.post.title.rendered,
                content:this.props.post.content.rendered,
                status:this.props.post.status
              }} 
              onSubmit={this.onSubmit} />
          </div>      
        )
      }
    }else{
        return(
          <div>
          {history.push('/')}
          </div>
        )
      }
  }

  render () {
    return(
      <div>
        {this.renderPost()}
      </div>
      )
   }
}

const mapStateToProps = (state,ownProps) => {
  console.log(state.posts[ownProps.match.params.id])
  return {
    post:state.posts[ownProps.match.params.id]
  }
}
export default connect(mapStateToProps,{editPost})(PostEdit)