import React from 'react';
import {Icon} from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire-alert';

const Marker = ({lat,lng,onClick}) => {
  return (
    <div className='loc-mark' onClick={onClick}>
      <Icon icon={locationIcon} className='loc-icon'/>
    </div>
  )
}


export default Marker
