import React, { Component } from 'react';
class LoginForm extends Component {
    state = {
        account:{username:'', password:''}
    }
    handleSubmit = e =>{
        e.preventDefault();
        console.log('submitted')
    }

    handleChange=(e)=>{
        const account = {...this.state.account};
        account.username = e.currentTarget.value;
        this.setState({account});
    }
    render() { 
        return ( 
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" className="form-control" onChange={this.handleChange} value={this.state.account.username}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="text" id="password" className="form-control"/>
                    </div>
                    <button className="btn btn-primary">Login</button>
                </form>

            </div>
         );
    }
}
 
export default LoginForm;
