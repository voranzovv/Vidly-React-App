import React, { Component } from 'react';
import UseableTable from './useableTable';
import { getMovies } from './../services/fakeMovieService';
class Tables extends Component {
    state = { 
        movies:getMovies()
     }
    render() { 
        const {movies} = this.state
        return ( 
        <div>
            <UseableTable items={movies}/>
        </div> );
    }
}
 
export default Tables;