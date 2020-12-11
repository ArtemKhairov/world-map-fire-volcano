import React from 'react';
import spinner from './151.gif'

const Loader = () => {
  return (
    <div className='loader'>
      <div>
        <img src={spinner} alt='loader'/>
        <h1>Идёт загрузка</h1>
      </div>
    </div>
  )
}


export default Loader
