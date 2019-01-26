import React, { Component } from 'react';
import axios from 'axios';
// import axios from '../../axios';  - Instances Based
import './Blog.css';
import Posts from './Posts/Posts'
import { Route ,Link , NavLink , Switch } from 'react-router-dom'
import NewPost from './NewPost/NewPost'
import FullPost from './FullPost/FullPost'



class Blog extends Component {






    render() {
       
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/"
                                exact
                                activeClassName="my-active"
                                activeStyle={{ color: 'red', textDecoration: 'underline' }}>
                                Home</NavLink></li>
                            
                            {/* <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li> */}
                            {/* <li><Link to="/new-post">New Post</Link></li> */}
                            <li><NavLink to={{
                                // pathname: this.props.match.url +'/new-post', --Generate Relative Path
                                pathname: '/new-post',
                                hash: '#this-section',
                                search:"?wgwec=12"
                            }}>New Post</NavLink></li> 
                        </ul>
                    </nav>
                </header>

                {/* <Route path="/" exact render={() => <h2>Home</h2>} />
                <Route path="/new-post" render={()=><h2>New Post</h2>} /> */}
                <Route path="/" exact component={Posts} />
                <Switch> 
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/:id" component={FullPost} />
                </Switch>
            </div>
        );
    }
}

export default Blog;