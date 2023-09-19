import Style from './projects.module.css'
import img from '../../../resources/projects/plants.png'


function Project3 (props) {
    return (
        <>
            <div className={Style.detail}>
            <div className={Style.top}>
                {props.name}
                <button className={Style.closeProject} onClick={props.onClose}>x</button>
            </div>
            <div className={Style.main}>
                <img className={Style.img} src={img} alt='Potted Plants' />
                <div className={Style.h4Detail}>
                    <h4 className={Style.h4}>Description</h4>
                    <p className={Style.detailP}>
                        Explore fundamental plant care on our user-centric site. Unveil the benefits of indoor plants tailored to beginners. Engage with a selection of 10 delightful plant varieties, complemented by succinct descriptions and captivating imagery. Embrace the elegance of nature indoors, cultivating simplicity and beauty effortlessly.
                    </p>
                    <p className={Style.stack}>
                        <strong>Stack: </strong>
                        Html, Css, Javascript<br/>
                    </p>
                    <button className={Style.visit2}>
                        <a className={Style.link} href='https://mauricioalonso28.github.io/pottedplantsblog.github.io/'>Visit</a>
                    </button>
                </div>
                <button className={Style.visit}>
                    <a className={Style.link} href='https://mauricioalonso28.github.io/pottedplantsblog.github.io/'>Visit</a>
                </button>
            </div>
        </div>
        </>
        )
}

export default Project3