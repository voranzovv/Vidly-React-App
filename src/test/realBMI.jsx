import React, { Component } from 'react';

class Bmi2 extends Component {
    state = { 
        bmi:{
            height:0,
            weight:0,
        }
     }

     handleSubmit=(e)=>{
        e.preventDefault()
        const calculation = parseFloat(this.state.bmi.height)+ parseFloat(this.state.bmi.weight)
        console.log(calculation)
     }
     handleChange=({currentTarget: Input})=>{
         const bmi = {...this.state.bmi}
         bmi[Input.name] = Input.value
         this.setState({bmi})
        // console.log(Input)
     }
    render() { 
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <input type="number" placeholder='Height' className='form-control' name='height' value={this.state.bmi.height} onChange={this.handleChange}/>
                    </div>

                    <div className='form-group'>
                        <input type="number" placeholder='Weight' className='form-control' name='weight' value={this.state.bmi.weight} onChange={this.handleChange}/>
                    </div>

                    <div className="form-group">
                        <button className='btn btn-primary'>Calculate</button>
                    </div>
                    <p>{parseFloat(this.state.bmi.height)+ parseFloat(this.state.bmi.weight)}</p>
                </form>
            </div>
         );
    }
}
 
export default Bmi2;