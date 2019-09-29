import React, { Component } from 'react';
import { getMovies } from'./services/fakeMovieService'
import TableHeader from './../../test/link/tableHeader';
import TableBody from './../../test/link/tableBody';
import { Link } from 'react-router-dom';
class TableLink extends Component {
    state = { 
        movies:getMovies()
    }
    
    render() { 
        const {movies} = this.state
        const columns=[
            {path:'title', label:'Title', content:movie=>(<Link to={`/movies/${movie._id}`}>{movie.title}</Link>)},
            {path:'genre.name', label:'Genre'},
            {path:'dailyRentalRate', label:'Rate'},
            {path:'numberInStock', label:'Stock'},
            {content:movie=><button>Delete</button>},

        ]
        return ( 
            <table className="table">
                <TableHeader columns={columns} />
                <TableBody data={movies} columns={columns}/>
            </table>
         );
    }
}
 
export default TableLink;