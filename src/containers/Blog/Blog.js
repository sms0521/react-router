import React, { Component } from 'react';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom'


import './Blog.css';
import Posts from './Posts/Posts';
import asynComponent from '../../hoc/asyncComponent';

const AsyncNewPost = asynComponent(()=>{
    return import('./NewPost/NewPost')
})

class Blog extends Component {

    constructor(props){
        super(props);
    }

    state = {
        auth:true
    }
    render () {   
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts" 
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color:'orange',
                                    textDecoration:'underline'
                                }}>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname:'/new-post',
                                hash:'#submit',
                                search:'?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={()=> <h1>Home</h1>}/>
                <Route path="/"  render={()=> <h1>Home 2</h1>}/> */}
                <Switch>
                    {this.state.auth ? <Route path="/new-post" exact component={AsyncNewPost} ></Route> : null}
                    <Route path="/posts" component={Posts} ></Route>
                    {/* <Redirect from="/" to="/posts"></Redirect> */}
                    <Route render={() => <h1>Not Found</h1>}></Route>
                </Switch>
            </div>
        );
    }
}

export default Blog;