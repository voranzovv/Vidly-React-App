import React, { Component } from 'react';
import _ from 'lodash'

class Task extends Component {
    state = { 
        userInput:'',
        tasks:[]
     }

     handleInput=(e)=>{
         const userInput =e.currentTarget.value
         this.setState({userInput})
        }
        
        handleAdd=(e)=>{
            e.preventDefault();
         const tasks = [...this.state.tasks]
         tasks.push(this.state.userInput)
         this.setState({tasks})
         console.log(tasks)
     }

     handleDelete=(task)=>{
            const tasks = this.state.tasks.filter(tasks=> task !==tasks)
            this.setState({tasks})
        }
        render() { 
            const x=0
            
            return ( 
                <div className='col-3'>
                <form >
                    <div>
                        <input type="text" onChange={this.handleInput} name='userinput'/>
                        <button onClick={this.handleAdd} className='btn btn-primary'>Add</button>
                    </div>
                </form>
                <span>{this.state.tasks.length!== 0 ? 'there are '+ this.state.tasks.length+ ' tasks assigned' : 'No tasks assigned'} </span>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Tasks</th>
                                <th></th>
                            </tr>
                        </thead>
                            <tbody>
                    {this.state.tasks.map(task=>
                                <tr key={Math.random()} className=''>
                                    <td>{this.state.tasks.length}</td>
                                    <td ><span className='badge badge-success '>{task}</span></td>
                                    <td><button onClick={()=>this.handleDelete(task)} className='btn btn-danger'>x</button></td>
                                </tr>
                        )}
                            </tbody>
                    </table>

            </div>
         );
         
         
        }
    }

 
export default Task;