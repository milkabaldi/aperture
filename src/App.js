import React from 'react'

import { Studios, Whatwedo, Toolsweuse, Leafs, Pastclients, Hima, Needphoto, Footer } from './container'
import { Navbar, Amazingly, } from './components';
import './App.css';

const App = () => {
  return (
    <div>
        <Navbar />
        <Studios />
        <Whatwedo />
        <Amazingly  name='Sunset at Mount Fuji' txt='Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non.' />
        <Toolsweuse />
        <Leafs />
        <Pastclients />
        <Hima />
        <Needphoto />
        <Footer />
    </div>
  )
}

export default App
