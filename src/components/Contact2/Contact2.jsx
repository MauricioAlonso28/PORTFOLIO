import Style from './contact2.module.css'
import Me from '../../resources/me-contact.jpeg'
import linkedin from '../../resources/linkedin.png'
import github from '../../resources/github.png'
import gmail from '../../resources/gmail.png'
import instagram from '../../resources/instagram.png'
import { NavLink } from 'react-router-dom'

function Contact2 (){
    return <>
    <div className={Style.bg}>
        <div className={Style.line}>
            &nbsp;&nbsp;&nbsp;&nbsp;Contact
            <NavLink to={'/'} className={Style.linkBtn}>
                <button className={Style.btnBack}>X</button>
            </NavLink>
        </div>
        <div className={Style.main}>
            <div className={Style.divMain}>
                <div className={Style.divMainAbs}>
                    {/* SOCIALS */}
                    <div className={Style.socials}>
                        <img className={Style.me} src={Me} alt="me" />
                        <div className={Style.socialsList}>
                            <a className={Style.circleLogo} href='https://www.linkedin.com/in/mauricio-ayll%C3%B3n-varela-0260b3250/'><img className={Style.logo} src={linkedin} alt="linkedin" /></a>
                            <a className={Style.circleLogo} href='https://github.com/MauricioAlonso28'><img className={Style.logo} src={github} alt="github" /></a>
                            <a className={Style.circleLogo} href='mailto:mauri051928@gmail.com'><img className={Style.logo} src={gmail} alt="gmail" /></a>
                            <a className={Style.circleLogo} href='https://www.instagram.com/mauricio_alonso_28/?hl=en'><img className={Style.logo} src={instagram} alt="instagram" /></a>
                        </div>
                    </div>
                    {/* FORM */}
                    <div className={Style.contactMe}>
                        <h2 className={Style.title}>Contact Me</h2>
                        <form className={Style.form} action="https://formspree.io/f/xoqzqlnl"
                          method="POST">
                            <input className={Style.inputs} type="text" name="name" placeholder='Your name:'/>
                            <input className={Style.inputs} type="email" name="email" placeholder='Your email:'/>
                            <textarea className={Style.inputText} name="message" placeholder='Your message:'></textarea>
                            <button className={Style.inputBtn} type="submit">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
}

export default Contact2