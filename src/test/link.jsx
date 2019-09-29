import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import TableHeader from './tableHeader';
import TableBody from './tableBody';
import { Link } from 'react-router-dom';
class Links extends Component {
    state = { 
        Movies: getMovies()
     }
     render() { 
       const {Movies} = this.state
      const Columns =[
        // {path:'title', label:'Title', content: <Link to='/djfjf/csd'>ghghg</Link>},
        {path:'title', label:'Title', content:movie=>(<Link to={`/movies/${movie._id}`}>{movie.title}</Link>)},
        {path:'genre.name', label:'Genre'},
        {path:'numberInStock', label:'Stock'},
        {path:'dailyRentalRate', label:'Rate'},
        {id:'like', content:<button>Like</button>},
        {id:'delete'}      
      ]
        return ( 
            <table className="table">
                <TableHeader Columns={Columns} />
                <TableBody data={Movies} Columns={Columns} /> 
            </table>
         );
    }
}
 
export default Links;