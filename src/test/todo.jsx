import React, { Component } from 'react';
class Todo extends Component {
    state = { 
        time:'',
        task:{
            name:[
                {task:'hjdhfjdhf ', time:'2.30'},
                {task:'sdfsdfdsf ', time:'6.30'},
            ]
        }
     }

     handleSubmit=(e)=>{
            e.preventDefault()
            console.log('submitted')
     }

     handleClick=(e)=>{
         console.log(e.target.value)
         const name = {...this.state.task.name}
         
         this.setState(e.currentTarget.name =e.target.value)


     }

    render() { 
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" className="form-control" name='task' onChange={this.handleClick} value={this.state.task.name.task}/>
                    </div>

                    <div className="form-group">
                        <input type="time" className="form-control" name='time' onChange={this.handleClick} value={this.state.task.name.time}/>
                    </div>

                    <div className="form-group">
                        <button className="form-control btn btn-primary">Save</button>
                    </div>

                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th>Task</th>
                                <th>Time</th>
                            </tr>
                                </thead>
                            <tbody>
                                {this.state.task.name.map(ta=>
                                <tr key={Math.random()}>
                                    <td>{ta.task}</td>
                                    <td>{ta.time}</td>
                                    </tr>
                                    )}
                            </tbody>
                    </table>
                    <p>{this.state.name}</p>
                </form>
            </div>
         );
    }
}
 
export default Todo;