import React, { Component } from 'react';
import axios from 'axios';
// import axios from '../../axios';  - Instances Based
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import PostList from '../../components/Post/PostList/PostList';


class Blog extends Component {

    state = {
        posts: [],
        selectedPostId: null,
        error:false
    }

    componentDidMount() {
        axios.get('/posts')
            .then(res => {
                const posts = res.data.slice(0, 6);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author:"Max"
                    }
                })
                this.setState({posts:updatedPosts})
            })
            .catch(er => {
                this.setState({error:true})
            });
    }

    selectedPostHandler = (id) => {
        this.setState({ selectedPostId: id });
    }


    render() {
        let posts = <p style={{ textAlign: "center" }}>Something Went Wrong</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={() => this.selectedPostHandler(post.id)}
                />
            })
        }

        return (
            <div>
                <PostList posts={this.state.posts}>
                    {posts}
                </PostList>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;