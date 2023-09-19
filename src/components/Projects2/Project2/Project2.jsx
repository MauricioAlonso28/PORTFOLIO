import Style from './projects.module.css'
import img from '../../../resources/projects/r&m.png'

function Project2 (props){

    
    return (
    <>
        <div className={Style.detail}>
            <div className={Style.top}>
                {props.name}
                <button className={Style.closeProject} onClick={props.onClose}>x</button>
            </div>
            <div className={Style.main}>
                <img className={Style.img} src={img} alt='Rick&Morty' />
                <div className={Style.h4Detail}>
                    <h4 className={Style.h4}>Description</h4>
                    <p className={Style.detailP}>
                        Embark on a journey through our immersive "Rick & Morty" platform. Delve into characters' intricacies through comprehensive cards, offering exclusive insights. Seamlessly click to access hidden details, curate your favorites, and refine your exploration with genre filters. Elevate your connection with the show, embracing an unprecedented experience that brings you closer to the beloved characters and their multiverse escapades.
                    </p>
                    <p className={Style.stack}>
                        <strong>Stack: </strong>
                        React.js, Css, Node.js<br/>
                    </p>
                    <button className={Style.visit2}>
                        <a className={Style.link} href='https://rickandmortyfrontend.onrender.com/'>Visit</a>
                    </button>
                </div>
                <button className={Style.visit}>
                    <a className={Style.link} href='https://rickandmortyfrontend.onrender.com/'>Visit</a>
                </button>
            </div>
        </div>
    </>
    )
}

export default Project2