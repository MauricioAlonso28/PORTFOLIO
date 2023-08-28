import Style from './skills2.module.css'
import img from '../../resources/skills.png'
import HTML from '../../resources/skills/html.png'
import CSS from '../../resources/skills/css.png'
import JS from '../../resources/skills/javascript.png'
import BTP from '../../resources/skills/bootstrap.png'
import REACT from '../../resources/skills/react.jpg'
import NODE from '../../resources/skills/node.jpg'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

function Skills (){
    const [showSkills, setShowSkills] = useState(false)
    const [subtitles, setSubtitles] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSkills(true);
            setSubtitles(true);
        }, 500); 
  
        return () => clearTimeout(timer);
    }, []);

    return <>
    <div className={Style.bg}>
        <div className={Style.line}>
            &nbsp;&nbsp;&nbsp;&nbsp;Skills
            <NavLink to={'/'} className={Style.linkBtn}>
                <button className={Style.btnBack}>X</button>
            </NavLink>
        </div>
        <div className={Style.main}>
            <div className={`${Style.divMain} ${showSkills ? Style.show : ''}`}>
                <div className={Style.subtitles} style={{ width: subtitles ? '85%' : '30%' }}>
                    <h3>Current</h3>
                    <h3>Stack</h3>
                </div>
                <div className={ Style.divNotMain}>
                    <img className={Style.html} src={HTML} alt='Html' />
                    <img className={Style.css} src={CSS} alt='Css' />
                    <img className={Style.javascript} src={JS} alt='JavaScript' />
                    <img className={Style.bootstrap} src={BTP} alt='Bootstrap' />
                    <img className={Style.react} src={REACT} alt='ReactJs' />
                    <img className={Style.nodeJs} src={NODE} alt='NodeJs' />
                    <img src={img} className={Style.img} alt="skills-selector" />
                </div>
                <div className={ Style.divMainPhone}>
                    <div className={Style.htmlx}></div>
                    <div className={Style.cssx}></div>
                    <div className={Style.javascriptx}></div>
                    <div className={Style.bootstrapx}></div>
                    <div className={Style.reactx}></div>
                    <div className={Style.nodeJsx}></div>
                    <img src={img} className={Style.img} alt="skills-selector" />
                </div>
            </div>
        </div>
    </div>
    </>
}

export default Skills