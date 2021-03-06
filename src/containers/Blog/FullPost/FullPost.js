import React, { Component } from 'react';
import './FullPost.css';
import Axios from 'axios';

class FullPost extends Component {
    state = {
        loadedPost:null
    }

    componentDidMount() {
        
        this.loadedPost();
    }

    componentDidUpdate() {
        this.loadedPost();
    }

    loadedPost = () => {
        if ( this.props.match.params.id ) {
            if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id != this.props.match.params.id) ) {
                Axios.get('/posts/' + this.props.match.params.id)
                    .then(res => {
                        this.setState({ loadedPost: res.data })
                    });
        }
        }
    }

    deletePostHandler = () => {
        Axios.delete('/posts/' + this.props.match.params.id)
            .then(res => {
            console.log(res)
        })
    }

    render () {
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if (this.props.match.params.id) {
            post = <p style={{textAlign:'center'}}>Loading Post</p>;
        }
        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                    </div>
                </div>
    
            );
        }
        
        return post;
    }
}

export default FullPost;