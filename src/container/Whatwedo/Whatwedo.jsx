import React from 'react'

import images from '../../constants/images'
import { MdCallMade } from "react-icons/md";

import './Whatwedo.css'

const Whatwedo = () => {
  return (
    <div className="app__whatwedo">
      <div className="app__whatwedo-title">
        <h2 className="app__second-title">What we do.</h2>
        <h3 className="app__third-title">
          The areas that we're specialized in.
        </h3>
      </div>
      <div className="app__whatwedo-blocks">
        <div className="app__whatwedo-blocks_info">
          <img src={images.telephone} alt="Telephone" />
          <div className="app__whatwedo-blocks_info-txt">
            <h4 className='app__title-section' >Product Photography</h4>
            <p className='p__opensans'>
              Cras commodo consequat orci, in convallis risus egestas non. Nulla
              efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero
              ac, cursus quam.
            </p>
            <button className='app__btn'><MdCallMade /> Read more</button>
          </div>
        </div>
        <div className="app__whatwedo-blocks_info">
          <img src={images.vectore} alt="Vector" />
          <div className="app__whatwedo-blocks_info-txt">
            <h4 className='app__title-section' >Architecture Photography</h4>
            <p className='p__opensans'>
              Aenean porta neque eget consequat fringilla. Vestibulum ultrices,
              orci nec egestas pharetra, ligula est semper enim, nec auctor
              sapien leo nec purus. Fusce tincidunt aliquet sapien, sit amet
              rhoncus leo imperdiet nec.
            </p>
            <button className='app__btn'><MdCallMade /> Read more</button>
          </div>
        </div>
        <div className="app__whatwedo-blocks_info">
          <img src={images.forest} alt="Forest" />
          <div className="app__whatwedo-blocks_info-txt">
            <h4 className='app__title-section' >Drone Photography</h4>
            <p className='p__opensans'>
              Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt.
              Duis tristique sed lorem a vestibulum. Cras commodo consequat
              orci, in convallis risus egestas non. Nulla efficitur auctor
              hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.
            </p>
            <button className='app__btn'><MdCallMade /> Read more</button>
          </div>
        </div>
        <div className="app__whatwedo-blocks_info">
          <img src={images.deer} alt="Deer" />
          <div className="app__whatwedo-blocks_info-txt">
            <h4 className='app__title-section' >Wildlife Photography</h4>
            <p className='p__opensans'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros
              quis consectetur. Morbi neque ex, condimentum dapibus congue et,
              vulputate ut ligula. Vestibulum sit amet urna turpis.
            </p>
            <button className='app__btn'><MdCallMade /> Read more</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Whatwedo
