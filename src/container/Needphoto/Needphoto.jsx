import React from 'react'
import { MdCallMade } from "react-icons/md";
import './Needphoto.css'

const Needphoto = () => {
  return (
    <div className='app__needphoto'>
        <div className="app__needphoto-info">
        <h2 className="app__second-title">Need help with photography or videography?</h2>
        <h4 className="app__forth-title">We're here for you!</h4>
        <button className='app__btn'><MdCallMade /> Get in touch</button>
        </div>
        
    </div>
  )
}

export default Needphoto