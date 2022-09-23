import React from 'react'
import PhotoChart from '../../components/PhotoChart/PhotoChart'
import images from '../../constants/images'
import '../../components/Amazingly/Amazingly.css'


const Hima = () => {
  return (
    <div className='app__amazingly' style={{backgroundImage: `url(${images.stars})`}}>
        <div className='app__amazingly-txt'>
            <h2 className='app__second-title'>Star fall in the Himalayas</h2>
            <p className='p__opensans'>Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula.</p>
        </div>
        <PhotoChart time="6'''" bright='f/11' iso='800' country='Nepal' />
    </div>
  )
}

export default Hima