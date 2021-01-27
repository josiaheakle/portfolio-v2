
// components
import BarIcon from "./BarIcon.js"

import {useState} from 'react'

const IconInfoBar = ( props ) => {

    // props : { setActiveIcon (['user', 'computer', 'database', 'smartphone', 'lock', 'upload']) }
    //              switches text on about page

    const [activeIcon, setActiveIcon] = useState('user')

    /*

    Front-End
        With an understanding of
        HTML
        CSS
        JavaScript
        React.js
        I push to create beautiful and functional websites, designed to be sharp and streamlined for all.
    Back-End
        Any user authenticaion or data managment will inevitably require a back-end. Experienced in 
        Node.js, Express.js, and PHP,
        I will deliver a secure back-end or REST API perfect for your use case.  
    Mobile Responsive
        Everyone owns a smartphone, my designs keep this in mind to provide clean experiences for both mobile and desktop users. 

    
    Secure

    Hosting and Management

    */

    const handleClick = (iconName) => {
        setActiveIcon(iconName)
        props.setActiveIcon(iconName)
    }

    return(
        <div className={`IconInfoBar`}>
            <BarIcon click={handleClick} iconName='user' iconActive={(activeIcon === 'user')?true:false} />
            <BarIcon click={handleClick} iconName='computer' iconActive={(activeIcon === 'computer')?true:false} />
            <BarIcon click={handleClick} iconName='database' iconActive={(activeIcon === 'database')?true:false} />
            <BarIcon click={handleClick} iconName='smartphone' iconActive={(activeIcon === 'smartphone')?true:false} />
            <BarIcon click={handleClick} iconName='lock' iconActive={(activeIcon === 'lock')?true:false} />
            <BarIcon click={handleClick} iconName='upload' iconActive={(activeIcon === 'upload')?true:false} />
        </div>
    );
}

export default IconInfoBar;