import Style from '../Aside/aside.module.css'
import Style2 from './main.module.css'
import { Link } from 'react-router-dom'

function Main (){


    return <>
        <main className={Style2.lightMain}>
            <div className={Style.carpets}>
                <div className={Style.div1}>
                    <Link to={'/about'}>
                        <div className={Style2.img1}/>
                    </Link>
                    <h2>About</h2>
                </div>
                <div className={Style.div2}>
                    <Link to={'/skills'}>
                        <div className={Style2.img2}/>
                    </Link>
                    <h2>Skills</h2>
                </div>
                <div className={Style.div3}>
                    <Link to={'/projects'}>
                        <div className={Style2.img3}/>
                    </Link>
                    <h2>Projects</h2>
                </div>
                <div className={Style.div4}>
                    <Link to={'/contact'}>
                        <div className={Style2.img4}/>
                    </Link>
                    <h2>Contact</h2>
                </div>
            </div>
        </main>  
    </>
}

export default Main