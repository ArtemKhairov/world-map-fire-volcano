import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import Volcano from './Volcano';
import InfoBox from './InfoBox';

const Map = ({ eventData, center, zoom }) => {

  const [info, setInfo] = useState(null);

  const markers = eventData.map((ev,index) => {
    if (ev.categories[0].id === 8 && ev.geometries[0].type==='Point') {
      return <Marker key={index} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setInfo({id:ev.id, title:ev.title}) }/>
    }
    if (ev.categories[0].id === 12 && ev.geometries[0].type==='Point') {
      return <Volcano key={index} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setInfo({id:ev.id, title:ev.title}) }/>
    }
    return null
  })
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {info && <InfoBox info={info} />}
    </div>
  )
}

Map.defaultProps = {
  center: {
      lat: 56.01839,
      lng: 92.86717
  },
  zoom: 6
}


export default Map
