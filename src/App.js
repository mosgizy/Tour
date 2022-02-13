import React, { useState, useEffect } from 'react';
import Tours from './Tours';
import { location } from './location'
import './App.css';

function App() {
  const [places, setPlaces] = useState(location)
  const [isLoading, setIsLoading] = useState(false)
  const [tour, setTour] = useState(true)
  const [count, setCount] = useState(places.length)

  const removePlace = (id) => {
    let newPlaces = places.filter((place) => {
      return place.id !== id
    })

    setCount(newPlaces.length)
    setPlaces(newPlaces)
    if (count === 1) {
      setTour(!tour)
    }
  }

  const refresh = () => {
    setPlaces(location)
    setTour(!tour)
    timeOut()
  }

  const timeOut = () => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    setIsLoading(true)
  }
  
  useEffect(() => {
    timeOut()
  }, [])

  if (isLoading) {
    return <h1 className='loader title-head'> loading...</h1>
  } else if (tour) {
    return (
      <main className="App">
        <h1 className='title-header title-head'>our tours</h1>
        <section className="places-wrapper">
          {
            places.map((place) => {
              return <Tours key={place.id} {...place} removeLocation={() => removePlace(place.id)} />
            })
          }
        </section>
      </main>
    );
  } else {
    return <>
      <h1 className='title-head no-tours'>no tours left</h1>
      <div className="btn-wrapper">
        <button className="refresh" onClick={refresh}>refresh</button>
      </div>
    </>
  }
}

export default App;
