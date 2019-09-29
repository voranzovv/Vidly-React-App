import React, { Component } from 'react';
import movies, { getMovies } from '../services/fakeMovieService'
import {getGenres} from '../services/fakeGenreService'
import Pagi from './pagi'
import _ from 'lodash'
import { paginate } from './paginate'
class Pagination extends Component {
    state = {
        movies:getMovies(),
        genres:getGenres(),
        pageSize:3,
        currentPage:1,
        sortColumn:{path:'title', order:'asc'}
        
      }

      handlePageClick=(page)=>{
          this.setState({currentPage:page})
        }

        handleSort=(path)=>{
            const sortColumn ={...this.state.sortColumn};
            if(sortColumn.path ===path)
            sortColumn.order = sortColumn.order === 'asc'? 'desc':'asc';
            else {
                sortColumn.order='asc'
                sortColumn.path=path

            }
            this.setState({sortColumn})

        }
        
        render() { 
            console.log(this.state.currentPage)
            const Count=this.state.movies.length;
            const {pageSize, currentPage, movies:allMovies, sortColumn} =this.state
            const sorted = _.orderBy(allMovies, [sortColumn.path] , [sortColumn.order])
           const movies = paginate(sorted,currentPage,pageSize)
        return ( 
            <div>
                <table className="table">
                    <thead>
                        <tr>
                        <th onClick={()=>this.handleSort('title')}>Name</th>
                        <th onClick={()=>this.handleSort('genre.name')}>Genre</th>
                        <th onClick={()=>this.handleSort('dailyRentalRate')}>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map(movie =>
                        <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.dailyRentalRate}</td>
                        </tr>
                            )}
                    </tbody>
                </table>

                    <Pagi totalItems={Count}
                    pageSize={pageSize}
                    onPageClick={this.handlePageClick}
                    currentPage={currentPage}/>
            </div>
         );
    }
}
 
export default Pagination;