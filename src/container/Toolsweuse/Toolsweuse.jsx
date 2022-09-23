import React from 'react'
import images from '../../constants/images'
import PhotoChart from '../../components/PhotoChart/PhotoChart'
import { MdCallMade } from "react-icons/md";
import './Toolsweuse.css'
const Toolsweuse = () => {
  return (
    <div className='app__toolsweuse'>
        <div className='app__toolsweuse-info'>
            <h4 className='app__forth-title'>The Gear cage</h4>
            <h2 className='app__second-title'>The tools that we use.</h2>
            <p className='p__opensans'>The say that "no place is boring if you've had a good night's sleep and have a pocket full of unexposed film". While we don't shoot (a lot) of film these days — these are the tools that we actually use everyday to capture the amazing things around us.</p>
            <button className='app__btn'><MdCallMade /> Check it out</button>
        </div>
        <div className='app__toolsweuse-image'>
            <img src={images.photo} alt="Photos" />
        </div>
        <PhotoChart time="0,8'" bright='f/5,6' iso='100' country='Sweden' />
    </div>
  )
}

export default Toolsweuse