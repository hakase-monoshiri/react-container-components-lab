// Code MovieReviews Here
import React from 'react';

export default function MovieReviews(props) {


  return <div className='review-list'> 
    {props.reviews.map( (review, idx) => {
        return <h1 className='review' key={idx}>{review.display_title}</h1>
        })
    }
  </div>;
}

MovieReviews.defaultProps = {
    reviews: [
        {display_title: 'No Movie Found'}
    ]
}