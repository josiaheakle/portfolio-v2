// react
import { useEffect, useState } from "react";

// components
import IconInfoBar from "./IconBar/IconInfoBar.js"
import AnimOnView from "./anim/AnimOnView.js"

const About = ( props ) => {

    // props : beginAnim ( bool )

    const userHead = `Hello, I'm Josiah Eakle, `;
    const userBody = `I help small businesses and individuals design, develop, and deploy web applications. 
    Proficient in code, I am driven to create appealing, efficient, and secure software.`;

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
                setHeadText('Front-End');
                setAboutBody(
                    <span className='about-body'>With an understanding of 
                        <ul className='horizontal-list bold'>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>React.js</li>
                        </ul>
                        I push to create beautiful and functional websites, designed to be sharp and streamlined for all.
                    </span>
                );
                break;
            case('database'):
                setHeadText('Back-End');
                setAboutBody(
                    <span className='about-body'>Any user authenticaion or data managment will inevitably require a back-end. Experienced in 
                        <ul className='horizontal-list bold'>
                            <li>Node</li>
                            <li>Express</li>
                            <li>Deno</li>
                            <li>PHP</li>
                        </ul>
                        I will deliver a secure back-end or REST API perfect for any use case.
                    </span>
                );
                break;
            case('smartphone'):
                setHeadText('Mobile Friendly');
                setAboutBody(<span className='about-body'>
                    Everyone owns a smartphone, my designs emit
                    <ul className='horizontal-list bold'>
                        <li>Responsiveness </li>
                        <li>Easy-to-use UI </li>
                        <li>Straightforward UX </li> 
                    </ul>
                    to provide clean experiences for both mobile and desktop users. 
                </span>)
                break;
            case('lock'):
                setHeadText('Security');
                setAboutBody(<span className='about-body'>
                    Managing data can be dangerous. When producing applications, my understanding of
                    <ul className='horizontal-list bold'>
                        <li>Token-Based Authenticaion</li>
                        <li>Session-Based Authenticaion</li>
                        <li>Password Encryption</li>
                    </ul>
                    will prove to be crucial.
                </span>)
                break;
            case('upload'):
                setHeadText('Hosting and Management');
                setAboutBody(<span className='about-body'>
                    Building the project is only useful if you have the know-how to host your application. Understanding
                    <ul className='horizontal-list bold'>
                        <li>DNS Management</li>
                        <li>Hosting Platforms</li>
                        <li>Version Control</li>
                    </ul>
                    brings crucial skills to the table and can sheild you from confusing domain name management procedures. 
                </span>)
                break;
        }
    }, [activeIcon])

    return(
        <div className='About align-center full-screen'>
            <AnimOnView>
                <h1> About Me </h1>
                <div className={`about-container ${activeIcon}`} >
                    <h2> {headText} </h2>
                    {aboutBody}
                </div>
                <IconInfoBar setActiveIcon={setIcon} />
            </AnimOnView>
        </div>
    );
}

export default About;