import React, {Component} from  'react';
import _ from 'lodash'
class TableBody extends Component {
    renderData=(item, column)=>{
        if (column.content) return column.content(item);
        return _.get(item,column.path)
    }

    createKey=(item,column)=>{
        const key = item._id+(column.path || column.id);
        return key;

    }
    render() { 
        const{data, Columns} = this.props;
        return ( 
            <tbody>
            {data.map(item=>
            <tr>
                {Columns.map(column=>
                    <td key={this.createKey(item,column)}>{this.renderData(item,column)}</td>
                    )}
            </tr>
            )
            }

            {/* {data.map(item=> 
            <tr>
                {Columns.map(column=>
                <td key={this.createKey(item,column)}>
                    {_.get(item,column.path)}
                </td>
                    )}
            </tr>
                )} */}
        </tbody>

         );
    }
}

 
export default TableBody;