// components
import AnimOnView from "../anim/AnimOnView.js"
import Project from "./Project.js"

import forAllTnIcon from "../../media/ForAllLogo.png"
import RemiBackground from "../../media/coffee-and-map.jpg"
import SmallProject from "./SmallProject.js"

const Projects = (props) => {

    const forAllTnList = [
        "Created an API to save, serve, and manage data of statewide legislators.",
        "Created an admin dashboard to securely update the data.",
        "Created a front end component to responsively display the information.",
        "Collaborated with a team to develop a wordpress site."]

    const remiList = [
        "React is used for the Front-End in addition to node and express for the Back-End.",
        "The vonage SMS API as well as nodemailer provided the communications APIs.",
        "Node-schedule was utilized to schedule the reminders."
    ]

    return (
        <div className='Projects full-screen align-center'>
            <AnimOnView>
                {/* <h1 className='align-center'> My Work </h1> */}
                <div className='align-center'>
                    <h2> Full Applications </h2>
                    <div className='main-projects projects-container'>

                        <Project 
                            icon={forAllTnIcon} 
                            onlyImage={true}
                            title='For All TN' 
                            myWork='For this project, I was soley responsible for the end-to-end development of a REST API, an admin dashboard, and a dynamic Javascript component.' 
                            descr='For All Tennessee is a nonprofit created to mobilize communities around policies that empower people and limit government intervention.' 
                            ghLink='https://github.com/josiaheakle/for-all-tn-api/' 
                            link='https://www.foralltn.org' 
                            list={forAllTnList} />
                        <Project 
                            iconName='fi-rr-alarm-clock'
                            icon={RemiBackground}
                            brightText={true}
                            onlyImage={false}
                            title='Remi Assistant' 
                            myWork='Created from scratch, this is one of my first full-stack applications.' 
                            descr='Remi is a simple full stack application designed to send text and email reminders.' 
                            ghLink='https://github.com/josiaheakle/remi-client' 
                            link='https://www.remiassistant.com/' 
                            list={remiList} />
                    </div>
                    <h2> Small Projects </h2>
                    <div className='side-projects'>
                        <SmallProject 
                            iconName='fi-rr-cloud'
                            title='My Climate' 
                            descr='This application shows the current weather using either a current location or a zipcode. Utilizing the OpenWeatherMap API, My Climate uses React for the front-end framework.' 
                            ghLink='https://github.com/josiaheakle/weather-app' 
                            link='https://josiaheakle.github.io/weather-app/' 
                            />
                        <SmallProject 
                            iconName='fi-rr-list-check'
                            title='Todo' 
                            descr='This straightforward checklist program was created with materialize, the css framework. The lists are saved to the local browser.' 
                            ghLink='https://github.com/josiaheakle/weather-app' 
                            link='https://josiaheakle.github.io/weather-app/' 
                            />
                        <SmallProject 
                            last={true}
                            iconName='fi-rr-home'
                            title='Woodland Cabins' 
                            descr='Another React application, this is a simple store-front mockup, styled with css.' 
                            ghLink='https://github.com/josiaheakle/shopping-cart/' 
                            link='https://josiaheakle.github.io/shopping-cart/' 
                            />
                    </div>

                </div>

            </AnimOnView>
        </div>
    );
} 

export default Projects;