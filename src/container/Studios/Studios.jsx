import React from 'react'
import { PhotoChart } from '../../components'
import images from '../../constants/images'
import './Studios.css'

const Studios = () => {
  return (
    <div className='app__header app__wrapper section__padding'  style={{ backgroundImage: `url(${images.ocean})` }}>
      <div
        className="app__header-info"
      >
        <h4 className="app__forth-title">Photographer & Filmmaker</h4>
        <h2 className="app__second-title">Aperture Studios</h2>
        <p className="p__opensans app__txt">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
          ut sem vitae risus tristique posuere.
        </p>
      </div>
      <PhotoChart time='1/2000s' bright='f/11' iso='100' country='Iceland' />
    </div>
  )
}

export default Studios
