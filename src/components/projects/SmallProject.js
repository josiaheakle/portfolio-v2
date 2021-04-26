import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import ghIcon from "../../media/github.svg"


const SmallProject = (props) => {

    // props -  {title}
    //          {iconName}
    //          {descr}
    //          {link}
    //          {ghLink}

    const [isHovering, setIsHovering] = useState(false)

    return (
        <div tabIndex="0" className={`SmallProject align-center ${(props.last)?`last-small-project`:null}`} onMouseOver={() => {setIsHovering(true)}} onMouseLeave={() => {setIsHovering(false)}} onFocus={() => {setIsHovering(true)}} onBlur={() => {setIsHovering(false)}} >
            
            <AnimatePresence>
            {(isHovering === true) ? 
                <motion.div className={`small-project-description-container ${props.title} `} key={`project-description-container ${props.title}`} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration: .4}}  >
                    <h3 className='project-title'>{props.title}</h3>
                    <p className='project-description' >{props.descr}</p>
                    <motion.span className='project-link-container' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
                        <a href={props.ghLink} className='github-link p-link'> <img className='github-icon' src={ghIcon}/> </a>
                        <a href={props.link} className='project-link p-link'>Visit Website <i className='fi-rr-angle-small-right'/></a>
                    </motion.span>
                </motion.div>
                :
                <motion.div key={`project-preview-${props.title}`} initial={{scale:1.2}} animate={{scale:1}} exit={{scale:1.2}} className='project-preview'>
                    <i className={`project-icon ${props.iconName}`}></i>
                    <h2>{props.title}</h2>
                </motion.div>
            }
            </AnimatePresence>

        </div>
    );
} 

export default SmallProject;