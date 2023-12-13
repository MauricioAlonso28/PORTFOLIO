import Style from './projects.module.css'
import img from '../../../resources/skills/Capturagao.PNG'


function Project5 (props) {
    return (
        <>
            <div className={Style.detail}>
            <div className={Style.top}>
                {props.name}
                <button className={Style.closeProject} onClick={props.onClose}>x</button>
            </div>
            <div className={Style.main}>
                <img className={Style.img} src={img} alt='GAO Tek' />
                <div className={Style.h4Detail}>
                    <h4 className={Style.h4}>Description</h4>
                    <p className={Style.detailP}>
                    
In crafting my WordPress project, I drew inspiration from GAO Tek and its cutting-edge services. The resulting website encapsulates the innovation and quality synonymous with GAO Tek, spotlighting top-notch testing solutions and leading-edge products. The intuitive design and engaging content convey a commitment to technical excellence, delivering users a unique and memorable online experience.</p>
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