import React, { Component } from 'react';

class UseableTable extends Component {
    render() { 
        const {items} = this.props
        return (
            <div>
                <ul>
                    {items.map(item=><li>{item.title}</li>)}
                </ul>
            </div>
          );
    }
}
 
export default UseableTable;