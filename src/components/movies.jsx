import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService'
import {getGenres} from '../services/fakeGenreService'
import Pagination from './pagination'
import {paginate} from '../utils/paginate'
import ListGroup from './common/listGroup'
import MoviesTable from './common/moviesTable'
import _ from 'lodash'

class Movies extends Component {
    state = { 
        Movies:[],
        currentPage:1,
        pageSize:4, 
        genres:[],
        selectedGenre:'',
        sortColumn:{path:'title', order:'asc'}
     };
     componentDidMount(){
       const genres = [{_id:'', name:'All Genres'},...getGenres()]
        this.setState({Movies:getMovies(), genres})
     }

     handleDelete=(movie)=>{
       const Movies = this.state.Movies.filter(m=> m._id !== movie._id)
        console.log(movie)
          this.setState({Movies})
     }

     handleLike=(movie)=>{
       console.log(movie)
     }

     handlePageChange=(currentPage)=>{
       this.setState({currentPage})
     }

     handleGenreSelect=(genre)=>{
        this.setState({selectedGenre:genre, currentPage:1})
     }

     handleSort=(sortColumn)=>{
       
        this.setState({sortColumn})
     }

     getPagedData=()=>{
      const {pageSize, currentPage,Movies:allMovies, selectedGenre, sortColumn} = this.state
      const filtered = selectedGenre && selectedGenre._id ? allMovies.filter(m=> m.genre._id === selectedGenre._id):allMovies
      const sorted = _.orderBy(filtered,[sortColumn.path], [sortColumn.order])
      const movies = paginate(sorted,currentPage,pageSize)
      return {totalCount:filtered.length, data:movies }


     }
    render() { 
      const {length:count} = this.state.Movies
      const {pageSize, currentPage,sortColumn} = this.state
      if(count === 0)
      return <p>There are no movies in the database</p>
      
      const {totalCount, data:movies} = this.getPagedData()

        return ( 
            <div className='row'>
              <div className='col-3'>
                <ListGroup 
                items={this.state.genres} 
                onItemSelect={this.handleGenreSelect}
                selectedItem={this.state.selectedGenre}

                />
              </div>
              <div className="col">

              <p>Showing {totalCount} movies from Database </p>
              <MoviesTable 
              movies={movies}
              onDelete={this.handleDelete}
              onLike={this.handleLike}
              onSort={this.handleSort}
              sortColumn={sortColumn}
              />
              
        
        <Pagination itemsCount={totalCount} pageSize={pageSize} currentPage={currentPage} onPageChange={this.handlePageChange}/>
              </div>

      </div>
         );
    }
}
 
export default Movies;