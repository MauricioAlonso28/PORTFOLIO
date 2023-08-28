import { Routes, Route} from 'react-router-dom';
import Style from './components/App/app.module.css';
import Aside from './components/Aside/Aside';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import { useState, useEffect } from 'react';
import bgLight from './resources/background-main.jpg';
import bgDark from './resources/background-dark.jpg';
import Main from './components/Main/Main';
import Style2 from './components/Main/main.module.css';
import About2 from './components/About2/About2';
import Skills2 from './components/Skills2/Skills2';
import Projects2 from './components/Projects2/Projects2';
import Contact2 from './components/Contact2/Contact2';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleContextMenu = (event) => {
    event.preventDefault();
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const bodyBackground = isDarkMode ? `url(${bgDark})` : `url(${bgLight})`;
    const bgBody = document.querySelector('#root')
    bgBody.style.backgroundImage = bodyBackground;
  }, [isDarkMode]);

  const [isDarkTablet, setIsDarkTablet] = useState(false);

  const handleTabletMenu = (event) => {
      event.preventDefault();
      setIsDarkTablet(!isDarkTablet);
  }

  return (
    <>
        <div className={Style.computer}>
            <Aside/>
            <main className={Style.main}>
                {
                  isDarkMode 
                  ?  <div className={Style.btn} onClick={handleContextMenu}>☀️</div>
                  :  <div className={Style.btn} onClick={handleContextMenu}>🌙</div>
                }
                <div className={Style.bg}>
                    <Routes>
                        <Route
                            path='/'
                            element={<About/>}
                        />
                        <Route
                            path='/about'
                            element={<About/>}
                        />
                        <Route
                            path='/skills'
                            element={<Skills/>}
                        />
                        <Route
                            path='/projects/*'
                            element={<Projects/>}
                        />
                        <Route
                            path='/contact'
                            element={<Contact/>}
                        />
                    </Routes>
                </div>
            </main>
        </div>
        <div className={isDarkTablet ? Style.darkTablet : Style.lightTablet}>
            {
                isDarkTablet 
                ?  <div className={Style2.btn} onClick={handleTabletMenu}>☀️</div>
                :  <div className={Style2.btn} onClick={handleTabletMenu}>🌙</div>
            }
            <Routes>
                <Route
                path='/'
                element={<Main/>}
                />
                <Route
                    path='/about'
                    element={<About2/>}
                />
                <Route
                    path='/skills'
                    element={<Skills2/>}
                />
                <Route
                    path='/projects/*'
                    element={<Projects2/>}
                />
                <Route
                    path='/contact'
                    element={<Contact2/>}
                />
            </Routes>
        </div>
    </>
  );
}

export default App;
