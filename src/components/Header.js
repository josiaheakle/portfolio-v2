
/*

    HEADER

        - Logo Image {input through props if wanted}
        - Site Name

        - Scroll down for the header to shrink
        - Header will animate 

*/

// react
import { useState, useEffect } from "react"

// anim
import { motion } from "framer-motion"

const Header = () => {

    useEffect(() => {
        console.log(`mounted`)
        return(() => {
            console.log('unmounted')
        })
    }, [])

    return (
        <motion.div initial={{opacity: 0}} exit={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.25}} className={`Header`} >
            <motion.h1 > Josiah Eakle Development </motion.h1>
        </motion.div>
    );
}

export default Header;