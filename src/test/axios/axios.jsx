import React, { Component } from 'react';
import axios from 'axios';


class Axios extends Component {
    state = { 
        posts:[]
     };

     async componentDidMount() {
         const {data:posts} = await axios.get('https://jsonplaceholder.typicode.com/posts');
        this.setState({posts})
     } 

     render() { 
        console.log(this.state.posts);
        return ( 
            <div>
                {this.state.posts.map(data=><li>{data.title}</li>)}

            </div>
         );
    }
}
 
export default Axios;