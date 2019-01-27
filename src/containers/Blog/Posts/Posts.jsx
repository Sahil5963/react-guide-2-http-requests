import React, { Component } from 'react'
import axios from '../../../axios'
import Post from '../../../components/Post/Post'
import './Post.css'
import { Link, Route } from 'react-router-dom'
import FullPost from '../FullPost/FullPost';

export default class Posts extends Component {
    state = {
        posts: [],
    }

    selectedPostHandler = (id) => {
        // this.props.history.push('/posts/'+id)
        this.props.history.push({pathname:'/posts/'+id})
    }

    componentDidMount() {
        console.log(this.props)
        axios.get('/posts')
            .then(res => {
                const posts = res.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author:"Max"
                    }
                })
                this.setState({posts:updatedPosts})
            })
            .catch(er => {
                // this.setState({error:true})
            });
    }


    render() {
        let posts = <p style={{ textAlign: "center" }}>Something Went Wrong</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                // <Link to={'/posts/'+post.id} key={post.id}>
                    <Post
                        key={post.id}
                        title={post.title}
                        author={post.author}
                        clicked={() => this.selectedPostHandler(post.id)}
                    />
                // </Link>
                )
            })
        }

        return (
            <div>
            <section className="Posts">
                {posts}
            </section>
                <Route path={this.props.match.url+ '/:id'} exact component={FullPost} />
            </div>
    )
  }
}
