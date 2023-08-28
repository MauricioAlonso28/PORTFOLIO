import Style from './about2.module.css'
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import img1 from '../../resources/me-left.png'
import img2 from '../../resources/me-right.png'
import { NavLink } from 'react-router-dom'

function About2 (){
    const [showDescription, setShowDescription] = useState(false);
    const props = useSpring({
        opacity: showDescription ? 1 : 0,
        transform: showDescription ? 'translateY(0)' : 'translateY(-100%)',
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowDescription(true);
        }, 500); 
  
        return () => clearTimeout(timer);
    }, []);
    

    const img1Props = useSpring({
        opacity: showDescription ? 1 : 0,
        transform: showDescription ? 'translateX(0)' : 'translateX(-100%)',
    });

    const img2Props = useSpring({
        opacity: showDescription ? 1 : 0,
        transform: showDescription ? 'translateX(0)' : 'translateX(100%)',
    });

    return <>
    <div className={Style.bg}>
        <div className={Style.line}>
            &nbsp;&nbsp;&nbsp;&nbsp;About me
            <NavLink to={'/'} className={Style.linkBtn}>
                <button className={Style.btnBack}>X</button>
            </NavLink>
        </div>
        <div className={Style.main}>
            <div className={Style.divMain}>
                <h1 className={Style.name}>&lt; Mauricio Ayllón /&gt;</h1>
                <h3 className={Style.title}>Front-End Developer</h3>
                <animated.p style={props} className={`${Style.description} ${showDescription ? Style.showDescription : ''}`}>
                    I am a Front End developer from Perú. I have 1 year of experience in the field,
                    currently working as freelancer. <br />
                    My main focus is to create web applications that are accessible and easy
                    for everyone to use. <br/>
                    Continue to see my projects!
                </animated.p>
                <div className={Style.containImgs}>
                    <animated.img
                        style={img1Props}
                        className={Style.img1}
                        src={img1}
                        alt="me-left"
                    />
                    <animated.img
                        style={img2Props}
                        className={Style.img2}
                        src={img2}
                        alt="me-right"
                    />
                </div>
            </div>
        </div>
    </div>
    </>
}

export default About2