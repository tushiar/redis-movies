import React from 'react'
import './card.css'
const Card = ({ data, loading, hasData }) => {
  if (loading) {
    return <div className='card'>
      <div className="loader"></div>

    </div >
  }
  else if (!hasData) {
    return (
      <div className='no-data-found'>
        <h1>No Data Found</h1>
      </div>
    )
  }
  return (
    <div className="card">
      {data.Poster !== "N/A" ? <img src={data.Poster} alt="Avatar" style={{ width: "100%", maxHeight: "400px" }} /> : null}
      <div className="container">
        <p><b>Title:</b> {data.Title}</p>
        <p><b>Year:</b> {data.Year}</p>
        <p><b>Rated:</b>{data.Rated}</p>
        <p><b>Released:</b> {data.Released}</p>
        <p><b>Runtime:</b> {data.Runtime}</p>
        <p><b>Genre:</b> {data.Genre}</p>
        <p><b>Plot:</b> {data.Plot}</p>
      </div>


    </div>
  )
}

export default Card