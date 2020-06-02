import React, { Component } from "react";
import axios from 'axios'
import {Route} from 'react-router-dom'

import Post from '../../../components/Post/Post'
import FullPost from '../FullPost/FullPost'
import { Link } from "react-router-dom";

class Posts extends Component{

    state = {posts : [], selectedPostId: null, error : false}

    componentDidMount(){
        axios.get('/posts')
            .then((response)=>{
                console.log(response);
                let posts = response.data.slice(0,4);
                const updatePosts = posts.map(post => {
                    return {
                        ...post, author: 'Max'}}
                )
                this.setState({posts : updatePosts})
            }).catch((error) => {
                console.log(error);
                //this.setState({error : true});
            })
    }

    postSelectedHandler = (id)=>{
        this.props.history.push({pathname: '/posts/'+id})
    }

    render(){

        let posts = <p style={{textAlign:'center'}}> Error occur</p>
        if(!this.setState.error)
         posts = this.state.posts.map(post => {
           return <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked = {() => this.postSelectedHandler(post.id)}/>
            })

        return (
        <div>
            <section className="Posts">
                {posts}
            </section>
            <Route path="/posts/:id"  component={FullPost} ></Route>
        </div>)
    }
    
}

export default Posts;