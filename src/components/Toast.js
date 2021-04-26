
import { motion, AnimatePresence, useAnimation } from "framer-motion"

const ToastContainer = ( props ) => {

    const controls = useAnimation();

    return (
        <motion.div className='ToastContainer'>
            {(props.string) ? props.string : null}
        </motion.div>
    );
}

export default ToastContainer;