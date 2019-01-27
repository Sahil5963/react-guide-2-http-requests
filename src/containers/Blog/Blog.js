import React, { Component } from 'react';
import axios from 'axios';
// import axios from '../../axios';  - Instances Based
import './Blog.css';
import Posts from './Posts/Posts'
import { Route ,Link , NavLink , Switch ,Redirect} from 'react-router-dom'
// import NewPost from './NewPost/NewPost'
import asyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {

    state = {
        auth:true,
    }

    render() {
       
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/posts/"
                                exact
                                activeClassName="my-active"
                                activeStyle={{ color: 'red', textDecoration: 'underline' }}>
                                Posts</NavLink></li>
                            
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
                
                <Switch> 
                    {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}
                    <Route path="/posts" component={Posts} />
                    <Route render={()=> <h2>Nothing Found</h2>} />
                    {/* <Redirect from="/" to="/posts/"/> */}
                    {/* <Route path="/" component={Posts} /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;