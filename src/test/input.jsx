import React, { Component } from 'react';
class Input extends Component {
    state = { 
        account:{
            name:'',
            age:0,
        }
     }

    handleSubmit=(e)=>{
        e.preventDefault()
        console.log(this.state.account)
    }
 
    handleClick=({currentTarget:input})=>{
        const account = {...this.state.account}
        account[input.name] = input.value
        this.setState({account})
        console.log(input)
    }
    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
                <div className='form-group'><br/>
                <input 
                type="text" 
                className="form-control" 
                onChange={this.handleClick} 
                value={this.state.account.name}
                name='name'
                id='name'
                />
                </div>

                <div className='form-group'><br/>
                <input 
                type="number" 
                className="form-control" 
                onChange={this.handleClick} 
                value={this.state.account.age}
                name='age'
                id='age'
                />
                </div>
                <button className="form-control btn btn-primary">Enter</button>
            </form>
         );
    }
}
 
export default Input;