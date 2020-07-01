import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts';
import { Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';
import NewPost from "../../containers/Blog/NewPost/NewPost";

class Blog extends Component {

    state = {
        auth: false
    };

    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to='/posts/' 
                                    activeClassName='my-active' 
                                    exact
                                    activeStyle={{color: '#fa923f'}}>Home</NavLink></li>
                            <li><NavLink to={{
                                    pathname: '/new-post',
                                    hash: '#submit',
                                    search: '?quick-submit=true'
                                }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    {/* sequence is imporatant */}
                    {this.state.auth ? <Route path="/new-post" component={NewPost}/> : null }
                    <Route path="/posts" component={Posts}/>
                    {/* <Route path="/" component={Posts}/> */}
                    <Redirect from="/" to="/posts" />
                </Switch>
            </div>
        );
    }
}

export default Blog;