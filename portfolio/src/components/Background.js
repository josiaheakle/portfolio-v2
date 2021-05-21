

import { useRef, useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"

const Background = () => {

    const [scroll, setScroll] = useState(0);

    const squareRef_1 = useRef(null);
    const squareRef_2 = useRef(null);
    const squareRef_3 = useRef(null);
    const underlineRef = useRef(null);

    const square2Controls = useAnimation();
    const underlineControls = useAnimation();



    const handleScroll = () => setScroll(window.pageYOffset);

    useEffect(() => {
        if(scroll > 0) {
            squareRef_1.current.style.position = 'relative';
            squareRef_1.current.style.top = scroll + 'px';

            if(scroll >= window.innerHeight) {
                squareRef_2.current.style.opacity = 0;
            } else {
                squareRef_2.current.style.opacity = 1 - (scroll / window.innerHeight);
            }

            squareRef_3.current.style.position = 'relative';
            squareRef_3.current.style.bottom = scroll + 'px';

            underlineRef.current.style.left =  (scroll - (16 * 16)) + 'px';


            // underlineRef.current.style.opacity = 1 - (scroll / window.innerHeight);
        }
    }, [scroll])

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        if(window.pageYOffset < window.innerHeight) {
            
            square2Controls.start({
                opacity: 1,
                transition: {delay: 1.5}
            })

        } else {

            squareRef_1.current.style.position = 'relative';
            squareRef_1.current.style.top = window.pageYOffset + 'px';

            squareRef_3.current.style.position = 'relative';
            squareRef_3.current.style.bottom = window.pageYOffset + 'px';

        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [])

    return(
        <div className='Background full-screen'> 
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.5}} ref={squareRef_1} className="background-square" />
            <motion.div initial={{opacity: 0}} animate={square2Controls} ref={squareRef_2} id='square2' className="background-square" />
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 2.5}} ref={squareRef_3} className="middle background-square" />
            <div className='underline-square-container'>
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 3.5}} ref={underlineRef} className="underline-square" />
            </div>
        </div>
    );
}

export default Background;