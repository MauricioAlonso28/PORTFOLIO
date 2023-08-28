import { Link, useNavigate } from 'react-router-dom'
import Style from './aside.module.css'

function Aside (){
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/')
    }

    return (
        <>
        <aside>
            <div className={Style.carpets}>
                <div className={Style.div1}>
                    <Link to={'/'}>
                        <div className={Style.img}/>
                    </Link>
                    <h2>About</h2>
                </div>
                <div className={Style.div2}>
                    <Link to={'/skills'}>
                        <div className={Style.img}/>
                    </Link>
                    <h2>Skills</h2>
                </div>
                <div className={Style.div3}>
                    <Link to={'/projects'}>
                        <div className={Style.img}/>
                    </Link>
                    <h2>Projects</h2>
                </div>
                <div className={Style.div4}>
                    <Link to={'/contact'}>
                        <div className={Style.img}/>
                    </Link>
                    <h2>Contact</h2>
                </div>
            </div>
            <button className={Style.btn} onClick={handleNavigate}></button>
        </aside>
        </>
    )
}

export default Aside