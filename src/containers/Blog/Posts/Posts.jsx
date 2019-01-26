import React, { Component } from 'react'
import axios from '../../../axios'
import Post from '../../../components/Post/Post'
import './Post.css'
import { Link } from 'react-router-dom'

export default class Posts extends Component {
    state = {
        posts: [],
    }

    selectedPostHandler = (id) => {
        // this.props.history.push('/'+id)
        this.props.history.push({pathname:'/'+id})
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
                // <Link to={'/'+post.id} key={post.id}>
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
        <section className="Posts">
             {posts}
        </section>
    )
  }
}
