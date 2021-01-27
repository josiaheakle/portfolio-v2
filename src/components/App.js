
// react 
import { useState, useEffect } from 'react'

// css
import '../css/App.css';
import '../media/icons/css/uicons-regular-rounded.css';

// components
import Header from "./Header.js"
import Intro from "./Intro.js"
import About from "./about/About.js"

// animation
import AnimOnView from "./anim/AnimOnView.js"
import { AnimatePresence } from 'framer-motion';

const App = () => {

  const [ renderHeader, setRenderHeader ] = useState(false);

  const showHeader = ( bool ) => {
    setRenderHeader(bool);
  }

  return (
    <div className="App">
      <AnimatePresence>
        {(!!renderHeader)? <Header key='header' />:null}
      </AnimatePresence>
      <Intro renderHeader={showHeader} />
      <AnimOnView >
        <About />
      </AnimOnView>
    </div>
  );
}

export default App;
