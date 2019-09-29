import React, { Component } from 'react';
import Movies from './components/movies'
import Customers from './components/customers';
import NotFound from './components/notFound';
import Rentals from './components/rentals';
import { Route, Redirect, Switch } from 'react-router-dom';
import Navbar from './components/navBar';
import MovieForm from './components/movieForm';
import LoginForm from './components/common/loginForm';
import Axios from './test/axios/axios';
import Todo from './test/todo';



class App extends Component {
  render() { 
    return ( 
            <Todo/>
      
          //   <React.Fragment>
          //     <Navbar/>
          // <main className='container'>
          //   <Switch>
          //    <Route path="/movies/:id" component={MovieForm} />
          //    <Route path='/login' component={LoginForm} />
          //   <Route path="/movies" component={Movies}></Route>
          //   <Route path="/customers" component={Customers}></Route>
          //   <Route path="/rentals" component={Rentals}></Route>
          //   <Route path="/not-found" component={NotFound}></Route>
          //   <Redirect from='/' to='/movies' exact/>
          //   <Redirect  to='/not-found'/>
          //   </Switch>
          // </main>
          //   </React.Fragment> 
     );
  }
}
 
export default App;