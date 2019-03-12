import React from 'react';
import { connect } from 'react-redux';
import { editPost } from '../../actions';
import PostForm from './PostForm';
import history from '../../history'


class PostEdit extends React.Component {

    onSubmit = (formValues) => {
        console.log(formValues);
        this.props.editPost(this.props.match.params.id, formValues);
    };

    renderPost() {
        console.log(this.props.match.params.id)

        if (localStorage.getItem("validToken") && this.props.match.params.id) {
            console.log(this.props.post, 'render method');
            return (
                <div>
                    <center> <h2>Edit post</h2></center>
                    <PostForm
                        onSubmit={this.onSubmit} />
                </div>
            );

        } else {
            return <div>{history.push('/')}</div>
        }
    }

    render() {

        return (
            <div>{this.renderPost()}</div>
        );
    }
}

const mapstateToProps = (state, ownProps) => {
    //console.log(state.post[ownProps.match.params.id],'gjhghg')
    //console.log(state.post[ownProps.match.params.id],'mapstatetoprops');
    return { posts: state.posts[ownProps.match.params.id] };
};

export default connect(
    mapstateToProps,
    { editPost }
)(PostEdit);