import React from 'react'

const InfoBox = ({info}) => {
  return (
    <div className="location-info">
      <h2>Информация о явлении</h2>
      <ul>
        <li>ID : {info.id}</li>
        <li>Title: { info.title}</li>
      </ul>
    </div>
  )
}

export default InfoBox
