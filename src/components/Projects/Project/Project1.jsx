import Style from './projects.module.css'
import img from '../../../resources/projects/digidex.png'

function Project1 (props){

    
    return (
    <>
        <div className={Style.detail}>
            <div className={Style.top}>
                {props.name}
                <button className={Style.closeProject} onClick={props.onClose}>x</button>
            </div>
            <div className={Style.main}>
                <img className={Style.img} src={img} alt='Digidex' />
                <div className={Style.h4Detail}>
                    <h4 className={Style.h4}>Description</h4>
                    <p className={Style.detailP}>
                        Welcome to our ultimate Digidéx! Explore over 1,400 Digimons at your fingertips. Dive into their captivating world, add your favorites to a favorites section, and uncover their unique details and evolution paths. Discover the Digimon universe like never before on our user-friendly website, your one-stop destination for all things Digimon! Start your adventure today and become a Digimon master.
                    </p>
                    <p className={Style.stack}>
                        <strong>Stack: </strong>
                        React.js, Tailwind, Redux Toolkit<br/>
                    </p>
                    <button className={Style.visit2}>
                        <a className={Style.link} href='https://digidex.onrender.com/'>Visit</a>
                    </button>
                </div>
                <button className={Style.visit}>
                    <a className={Style.link} href='https://digidex.onrender.com/'>Visit</a>
                </button>
            </div>
        </div>
    </>
    )
}

export default Project1