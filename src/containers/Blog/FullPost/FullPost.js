import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {

    state = {selectedPost : null}

    componentDidMount(){
        console.log(this.props.match.params.id);
        this.loadDate();
    }

    loadDate(){
        if(this.props.match.params){
            if(this.state.selectedPost == null || (this.state.selectedPost.id != this.props.match.params.id) ){
                axios.get('posts/'+this.props.match.params.id)
                .then((response)=>{
                    this.setState({selectedPost : response.data})
                })    
            }
        }
    }

    componentDidUpdate(){
        this.loadDate();
    }

    deletePostHandler = ()=>{
        axios.delete('/posts/'+this.props.id)
            .then((response)=>{
                console.log(response);
            })
    }

    render () {
        let post = <p style={{textAlign:'center'}}>Please select a Post...</p>;
        {if(this.props.match.params.id && this.state.selectedPost)
            post = (
                <div className="FullPost">
                    <h1>{this.state.selectedPost.title}</h1>
                    <p>{this.state.selectedPost.body}</p>
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