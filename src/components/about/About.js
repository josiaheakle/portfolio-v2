// react
import { useEffect, useState } from "react";
import AnimateHeight from "react-animate-height";

// components
import IconInfoBar from "../IconBar/IconInfoBar.js"

const About = ( props ) => {

    // props : beginAnim ( bool )

    const userHead = `Hello, I'm Josiah Eakle, `;
    const userBody = `I help small buisnesses and individuals design, develop, and deploy web applications. 
    Proficient in code, I am driven to create appealing, efficient, and secure software.`;

    const compHead = 'Front-End';
    const compBody = `With an understanding of HTML, CSS, JavaScript and React.js 
    I push to create beautiful and functional websites, designed to be sharp and streamlined for all.`

    const dataHead = 'Back-End';
    const dataBody = `Any user authenticaion or data managment will inevitably require a back-end. Experienced in 
    Node.js, Express.js, and PHP,
    I will deliver a secure back-end or REST API perfect for your use case.`

    const [ activeIcon, setActiveIcon ] = useState('user');
    const [ headText, setHeadText ] = useState(userHead);
    const [ aboutBody, setAboutBody ] = useState(<p className='about-body'>{userBody}</p>);

    const setIcon = (iconName) => {
        setActiveIcon(iconName)
    }

    useEffect(() => {
        switch(activeIcon) {
            case('user'):
                setHeadText(userHead);
                setAboutBody(<p className='about-body'>{userBody}</p>)
                break;
            case('computer'):
                setHeadText(compHead);
                setAboutBody(
                    <span className='about-body'>With an understanding of 
                        <ul className='horizontal-list'>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React.js</li>
                        </ul>
                        I push to create beautiful and functional websites, designed to be sharp and streamlined for all.
                    </span>
                );
                // setBodyText(compBody);
                break;
            case('database'):
                setHeadText(dataHead);
                // setBodyText(dataBody);
                break;
            case('smartphone'):
                break;
            case('lock'):
                break;
            case('upload'):
                break;
        }
    }, [activeIcon])

    return(
        <div className='About align-center full-screen'>
            <AnimateHeight>
                <div className={`about-container ${activeIcon}`} >

                    <h2> {headText} </h2>
                    {aboutBody}

                </div>
            </AnimateHeight>

            <IconInfoBar setActiveIcon={setIcon} />
        </div>
    );
}

export default About;