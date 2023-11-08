import Style from './projects.module.css'
import img from '../../../resources/projects/CountriesApp.PNG'


function Project4 (props) {
    return (
        <>
            <div className={Style.detail}>
            <div className={Style.top}>
                {props.name}
                <button className={Style.closeProject} onClick={props.onClose}>x</button>
            </div>
            <div className={Style.main}>
                <img className={Style.img} src={img} alt='Countries-App' />
                <div className={Style.h4Detail}>
                    <h4 className={Style.h4}>Description</h4>
                    <p className={Style.detailP}>
                    This is an app that shows you all the countries, you can filter them by population, continent, those with a specific activity, and sort them alphabetically by name in ascending and descending order. It also includes a form to add activities to the desired countries.</p>
                    <p className={Style.stack}>
                        <strong>Stack: </strong>
                        ReactJs, NodeJs, ModuleCss, PostgreSql
                        <br/>
                    </p>
                    <button className={Style.visit2}>
                        <a className={Style.link} href='https://countries-app-frontend.onrender.com/'>Visit</a>
                    </button>
                </div>
                <button className={Style.visit}>
                    <a className={Style.link} href='https://countries-app-frontend.onrender.com/'>Visit</a>
                </button>
            </div>
        </div>
        </>
        )
}

export default Project4