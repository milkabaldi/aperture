import React from 'react'
import PhotoChart from '../PhotoChart/PhotoChart'
import images from '../../constants/images'
import './Amazingly.css'
function Amazingly(props) {
  return (
    <div className='app__amazingly' style={{backgroundImage: `url(${images.mount})`}}>
        <div className='app__amazingly-txt'>
            <h2 className='app__second-title'>{props.name}</h2>
            <p className='p__opensans'>{props.txt}</p>
        </div>
        <PhotoChart time="1'" bright='f/16' iso='400' country='Japan' />
    </div>
  )
}



export default Amazingly