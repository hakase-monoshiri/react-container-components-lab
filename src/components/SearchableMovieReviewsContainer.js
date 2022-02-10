import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'F5r4yT93ZVAG7oNzx8OA9twujn6AxUcv';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {

    state = {
        reviews: [],
        searchTerm: ''
    }

    handleSearch = (e) => {

        e.preventDefault();

        fetch(URL + '&query=' + this.state.searchTerm)
        .then( resp => resp.json())
        .then( (obj) => {
            this.setState({reviews: obj.results})})
    }

    handleInput = (e) => {
        this.setState(
            {searchTerm: e.target.value}
        )

    }

  render() {
    return <div className='searchable-movie-reviews'>
         <MovieReviews reviews={this.state.reviews} /> 
            <form>
                <input onChange={this.handleInput} value={this.state.searchTerm}></input>
                <button type='submit' onClick={this.handleSearch}>Search</button>
            </form>
         </div>;
  }
}
