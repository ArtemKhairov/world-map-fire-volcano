import React from 'react';
import { Icon } from '@iconify/react';
import volcanoIcon from '@iconify-icons/emojione/volcano';


const Volcano = ({lat,lng,onClick}) => {
  return (
    <div className='loc-mark' onClick={onClick}>
      <Icon icon={volcanoIcon} className='loc-icon'/>
    </div>
  )
}


export default Volcano
