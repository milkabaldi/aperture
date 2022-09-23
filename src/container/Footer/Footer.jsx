import React from 'react'
import images from '../../constants/images'
import Sub from '../../components/Sub/Sub'

import { AiFillInstagram } from 'react-icons/ai';
import { MdFacebook } from 'react-icons/md';
import { BsTwitter } from 'react-icons/bs';
import './Footer.css'
const Footer = () => {
  return (
    <div className='app__footer'>

        <div className='app__footer-info'>
            <div className="app__footer-info_links">
                <img src={images.logo} alt="Aperture" />
                <p className='app__txt'>Photographers & videographers capturing the world around us.</p>
            </div>
            <ul className="app__footer-info_links">
                <li className='app__txt up app__footer-info_links-item'>Business areas</li>
                <li className='app__footer-info_links-item p__opensans'><a href="#Product Photography">Product Photography</a></li>
                <li className='app__footer-info_links-item p__opensans'><a href="#ArchitecturePhotography">Architecture Photography</a></li>
                <li className='app__footer-info_links-item p__opensans'><a href="#DroneePhotography">Drone Photography</a></li>
                <li className='app__footer-info_links-item p__opensans'><a href="#WildlifePhotography">Wildlife Photography</a></li>
            </ul>
            <ul className="app__footer-info_links">
                <li className='app__txt up app__footer-info_links-item'>Pages</li>
                <li className='app__footer-info_links-item p__opensans'><a href="#GearCage">Gear cage</a></li>
                <li className='app__footer-info_links-item p__opensans'><a href="#Contact">Contact</a></li>
                <li className='app__footer-info_links-item p__opensans'><a href="#StyleGuide">Style guide</a></li>
                <li className='app__footer-info_links-item p__opensans'><a href="#Instructions">Instructions</a></li>
                <li className='app__footer-info_links-item p__opensans'><a href="#Changelog">Changelog</a></li>
            </ul>
        </div>
        <div className='app__footer-info_sub colwhite '>
            <div className="app__footer-info_sub-txt">
                <h3 className='app__third-title up'>Subscribe to our newsletter</h3>
                <p className='app__txt'>Read about all the things we do.</p>
            </div>
            
            <div className="app__footer-info_sub">
            <img src={images.email} alt="email" />
                <Sub />
            </div>

             </div>
             <div className='app__footer-copy '>
                <p className='app__txt'>© Aperture Photography, Inc. All rights reserved. MilkaBaldi Dev</p>
                <div className="app__footer-info_social">
                    <a href="#insta" className='app__footer-info_social-link'><AiFillInstagram color='#fff' font-size={27} /></a>
                    <a href="#facebook" className='app__footer-info_social-link'><MdFacebook color='#fff' font-size={27} /></a>
                    <a href="#twiter" className='app__footer-info_social-link'><BsTwitter color='#fff' font-size={27} /></a>
                    
                    
                    
                </div>
             </div>
             
    </div>
  )
}

export default Footer