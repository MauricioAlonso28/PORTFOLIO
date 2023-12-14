import Style from './projects.module.css'
import img from '../../../resources/skills/nestleImg.PNG'


function Project5 (props) {
    return (
        <>
            <div className={Style.detail}>
            <div className={Style.top}>
                {props.name}
                <button className={Style.closeProject} onClick={props.onClose}>x</button>
            </div>
            <div className={Style.main}>
                <img className={Style.img} src={img} alt='Nestlé' />
                <div className={Style.h4Detail}>
                    <h4 className={Style.h4}>Description</h4>
                    <p className={Style.detailP}>
                    
                    En crafting my WordPress project, I drew inspiration from Nestlé and its extensive range of high-quality products and services. The resulting website encapsulates the dedication to nutrition, innovation, and sustainable practices synonymous with Nestlé, spotlighting a diverse array of food and beverage offerings. The intuitive design and engaging content convey a commitment to providing users with a seamless and enjoyable online experience, reflecting Nestlé's longstanding reputation for excellence and consumer trust.</p>
                    <p className={Style.stack}>
                        <strong>Stack: </strong>
                        WordPress
                        <br/>
                    </p>
                    <button className={Style.visit2}>
                        <a className={Style.link} href='https://gaotekdesign.com/'>Visit</a>
                    </button>
                </div>
                <button className={Style.visit}>
                    <a className={Style.link} href='https://gaotekdesign.com/'>Visit</a>
                </button>
            </div>
        </div>
        </>
        )
}

export default Project5