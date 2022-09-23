import React from 'react'
import images from '../../constants/images'

import './Pastclients.css'

const Pastclients = () => {
  return (
    <div className='app__pastclients'>
        <div className='app__pastclients-txt'>
            <h2 className='app__second-title'>Past clients</h2>
            <h4 className='app__forth-title'>Trusted by your favourite companies</h4>
        </div>
        <div className='app__pastclients-partners'>
            <img src={images.logo5} alt="Logo" />
            <img src={images.logo4} alt="Logo" />
            <img src={images.logo3} alt="Logo" />
            <img src={images.logo2} alt="Logo" />
            <img src={images.logo1} alt="Logo" />
        </div>
    </div>
  )
}

export default Pastclients