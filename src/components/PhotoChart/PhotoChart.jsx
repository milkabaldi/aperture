import React from 'react'


import images from '../../constants/images'
import './PhotoChart.css'



function PhotoChart(props) {
    return (
        <ul className="app__PhotoChart">
          <li className="p__opensans app__PhotoChart-txt">
            <img src={images.time} alt="Character" />
            <p>{props.time}</p>
          </li>
          <li className="p__opensans app__PhotoChart-txt">
          <img src={images.round} alt="Character" />
          <p>{props.bright}</p>
          </li>
          <li className="p__opensans app__PhotoChart-txt">
          <img src={images.iso} alt="Character" />
          <p>{props.iso}</p>
          </li>
          <li className="p__opensans app__PhotoChart-txt">
          <img src={images.geo} alt="Character" />
          <p>{props.country}</p>
          </li>
        </ul>
      )
}



export default PhotoChart
