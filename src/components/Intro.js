
import { motion } from "framer-motion"
import { useEffect } from "react";
import { useInView } from "react-intersection-observer"

const Intro = ( props ) => {

    // props { renderHeader(bool) - call true when user has scrolled past design develop deploy }

    const  [ ref, inView, entry ] = useInView();

    useEffect(() => {

        if( !inView && !(entry === undefined)) {
            props.renderHeader(true);
        } else {
            props.renderHeader(false);
        }

    }, [inView])

    return(
        <div className='Intro align-center full-screen'>
            <h1 > 
                <motion.span initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.5}} >Design. </motion.span>
                <motion.span initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 1.5}}  >Develop. </motion.span>
                <motion.span initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 2.5}} className='to-color'>Deploy.</motion.span> 
            
            </h1>
            <h2 ref={ref} className='josiah-eakle-header'> 
                <motion.span initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 3.5}} className='to-color'>Josiah Eakle </motion.span>
                <motion.span initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 3.5}} >: Full-Stack Developer</motion.span>
            </h2>

        </div>
    ); 
}

export default Intro;