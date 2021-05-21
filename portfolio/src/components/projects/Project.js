import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import ghIcon from "../../media/github.svg"


const Project = (props) => {

    // props -  {icon - if no icon}
    //          {iconName}
    //          {title}
    //          {descr}
    //          {link}
    //          {ghLink}
    //          {onlyImage}
    //          {myWork}
    //          {list}

    const [isHovering, setIsHovering] = useState(false)
    const [showDescr, setShowDescr] = useState(false)

 

    useEffect(() => {
        if(isHovering === false) {
            setShowDescr(false)
        }
    }, [isHovering])

    return (
        <div tabIndex="0" className={`Project ${(showDescr === true)?'expand':null} align-center`} onMouseOver={() => {setIsHovering(true)}} onMouseLeave={() => {setIsHovering(false)}} onFocus={() => {setIsHovering(true)}} onBlur={() => {setIsHovering(false)}} >
            

            <AnimatePresence>
            {(isHovering === true) ? 
                <motion.div className={`project-description-container ${props.title} `} key={`project-description-container ${props.title}`} initial={{opacity:0, backgroundColor: 'transparent'}} animate={{opacity:1, backgroundColor: 'var(--second-color'}} exit={{opacity:0, backgroundColor: 'transparent'}} transition={{duration: .5}}  >
                    <h3 className='project-title'>{props.title}</h3>
                    <p className='project-description' >{(showDescr) ? props.myWork : props.descr}</p>
                    {(showDescr) ? 
                        <ul className='project-list'>
                            {(props.list)?(props.list.map((l, i) => <li key={i}>{l}</li>)):null}
                        </ul>
                    : null }
                    <motion.span className='project-link-container' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
                    {(showDescr && props.ghLink) ? 
                        <a href={props.ghLink} className='github-link p-link'> <img className='github-icon' src={ghIcon}/> </a>
                    : null}
                        <a href={props.link} className='project-link p-link'>Visit Website <i className='fi-rr-angle-small-right'/></a>
                    </motion.span>

                    <button tabIndex="0" className='read-more-button' onClick={() => {setShowDescr(!showDescr)}}> {(showDescr === false)?<i className='fi-rr-angle-small-down visit-website-icon'/>:<i className='fi-rr-angle-small-up visit-website-icon'/>}</button>
                </motion.div>
                :
                <>
                    {(props.icon && props.onlyImage === true) ? 
                    <motion.img key={`project-image-${props.title}`} initial={{scale:1.1}} animate={{scale:1}} exit={{scale:1.1}} transition={{duration: .6}} className='project-image' src={props.icon} alt={props.title} />
                    : 
                    <motion.div key={`project-preview-${props.title}`} initial={{scale:1.1}} animate={{scale:1}} exit={{scale:1.1}} className={`project-preview ${props.title} ${(props.brightText) ? 'light-text' : null}`} style={ (props.icon) ? { backgroundImage: `url(${props.icon})` } : null } >
                        <i className={`project-icon ${props.iconName}`}></i>
                        <h2>{props.title}</h2>
                    </motion.div>
                    }
                </>
            }
            </AnimatePresence>
            


        </div>
    );
} 

export default Project;