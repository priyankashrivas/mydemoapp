import React from 'react'
import { postList } from '../../actions'
import { connect } from 'react-redux'
import history from '../../history'

class PostView extends React.Component {
  
  removeHTMLTag(str) {
    return str.replace(/<[/]?\w+>/g, "");
  }

  render () {
    if(localStorage.getItem("validToken")){
      if(this.props.post !== undefined){
        //console.log(this.props.post,'render post');
        const {id,title,content} = this.props.post;
        return (
            <div className='ui secondary pointing menu' key={id}>
                <div className = 'content'>
                  <h1>{title.rendered}</h1>
                  <div className='description'>
                    {this.removeHTMLTag(content.rendered)}
                  </div>
                </div>
              </div>
          )
      }else {
        return(
          <div>
            {history.push('post/list')}
          </div>
    
        ); 
    } 
    }
  }
}
const mapStateToProps = ({posts},ownProps) => {
  //console.log(ownProps.match.params.id ,'postveiw')
  return {
    post: posts[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps,{postList})(PostView);
