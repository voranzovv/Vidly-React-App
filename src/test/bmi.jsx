import React, { Component } from 'react';

class Bmi extends Component {
    state = { 
        account:{
            username:'',
            password:''
        }
     }

     handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state.account)
    }
    
    handleChange=({currentTarget:input})=>{
        const account = {...this.state.account}
        account[input.name] = input.value
        this.setState({account})
     }
    render() { 
        const {account} = this.state
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                    <label htmlFor="username">User Name</label>
                    <input 
                    id="username"
                    name='username' 
                    type="text" 
                    className="form-control"
                    autoFocus 
                    value={account.username}
                    onChange={this.handleChange}/>
                    </div>

                    <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="text" className="form-control"
                    onChange={this.handleChange}
                    value={account.password}
                    name='password'

                    />
                    </div>
                    <button className="btn btn-primary">Login</button>
                    </form>
                    <p>{account.username}</p>

            </div>
         );
    }
}
 
export default Bmi;