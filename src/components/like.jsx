import React, { Component } from 'react';
class Like extends Component {
    
    render() { 
        let classes = 'fa fa-heart';
        if(!this.props.liked)
        classes +='-o'
        return ( 
            <div>
                <i className={classes} onClick={this.props.onLike} style={{cursor:'pointer'}}/>
            </div>
         );
    }
}
 
export default Like;