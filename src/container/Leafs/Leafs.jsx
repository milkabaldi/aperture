import React from 'react'
import PhotoChart from '../../components/PhotoChart/PhotoChart'
import images from '../../constants/images'
import '../../components/Amazingly/Amazingly.css'


const Leafs = () => {
  return (
    <div className='app__amazingly' style={{backgroundImage: `url(${images.palm})`}}>
        <div className='app__amazingly-txt'>
            <h2 className='app__second-title'>Monstera Leafs</h2>
            <p className='p__opensans'>Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt.</p>
        </div>
        <PhotoChart time="1/400s'" bright='f/3,5' iso='100' country='Costa Rica' />
    </div>
  )
}

export default Leafs