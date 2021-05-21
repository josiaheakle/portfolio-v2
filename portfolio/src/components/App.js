
// react 
import { useState, useEffect } from 'react'

// css
import '../css/App.css';
import '../media/icons/css/uicons-regular-rounded.css';

// components
import Header from "./Header.js"
import Intro from "./Intro.js"
import About from "./About.js"
import Projects from "./projects/Projects.js"
import Footer from "./Footer.js"

// animation
import { AnimatePresence } from 'framer-motion';
import Background from './Background';
import Contact from './Contact';

const App = () => {

  const [ renderHeader, setRenderHeader ] = useState(false);

  const showHeader = ( bool ) => {
    setRenderHeader(bool);
  }


  return (
    <div className="App">
      {/* <CanvasBackground /> */}

      <Background />

      <AnimatePresence>
        {(!!renderHeader)? <Header key='header' />:null}
      </AnimatePresence>
      <Intro renderHeader={showHeader} />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
