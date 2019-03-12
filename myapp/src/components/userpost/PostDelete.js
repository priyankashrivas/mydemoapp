import React from 'react';
import Modal from '../Model';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import history from '../../history';
import { deletePost } from '../../actions';


class PostDelete extends React.Component {

  
    renderAction(){
        const { id } = this.props.match.params;
        return (
            <React.Fragment>
                <button 
                    onClick = {() => this.props.deletePost(id)} 
                    className ="ui negative button"
                >
                    Delete
                </button>
                <Link to ="/" className ="ui button">Cancel</Link>
            </React.Fragment>      
        );
    }
    renderContent(){
        if(!this.props.post){
            return 'Are you sure you want to delete this post...?'
        }
        return `Are you sure you want to delete this post...with this title:${this.props.post.title.rendered}`
    }
    
    render(){
        return (
             <Modal 
                title ="Delete Stream"
                content ={this.renderContent()}
                action ={this.renderAction()}
                onDismiss ={() => history.push('/')}
            />   
        );
    }
}

const mapStateToProps = (state ,ownProps) => {
    return { post : state.posts[ownProps.match.params.id]}
};

export default connect(
    mapStateToProps,
    { deletePost } 
)(PostDelete);