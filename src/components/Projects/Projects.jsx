import Style from './projects.module.css'
import { useState } from 'react';
import Project1 from './Project/Project1'
import Project2 from './Project/Project2';
import Project3 from './Project/Project3';
import Project4 from './Project/Project4';
import img1 from '../../resources/skills/digimon.png'
import img2 from '../../resources/skills/r&m.png'
import img3 from '../../resources/skills/plant.png'
import img4 from '../../resources/skills/world.svg'
import selectImg from '../../resources/select.png'

function Projects (){
  const [projectDetailsIndex, setProjectDetailsIndex] = useState(null);
  const nameProjects = [
      'Digidéx',
      'Rick & Morty',
      'Potted Plants',
      'Countries-App',
  ]

  const projectComponents = [
    <Project4 name={nameProjects[3]} onClose={onClose}/>,
    <Project1 name={nameProjects[0]} onClose={onClose}/>,
    <Project2 name={nameProjects[1]} onClose={onClose}/>,
    <Project3 name={nameProjects[2]} onClose={onClose}/>,
  ];

  const imgProjects = [
    img4,
    img1,
    img2,
    img3,
  ]

  function onClose(){
    setProjectDetailsIndex(null)
  }

  return (
    <>
        <div className={Style.line}>&nbsp;&nbsp;&nbsp;&nbsp;Projects</div>
        <div className={Style.main}>
            <div className={Style.divMain}>
                {/* FILES PROJECTS */}
                <div className={Style.projects}>
                    <div className={Style.mainProjects}>
                        <h3 className={Style.titleProjects}>Personal Projects</h3>
                        <div className={Style.personalProjects}>
                        {projectComponents.map((project, index) => (
                            <div className={Style.divFiles} key={index}>
                                <button className={Style.files} onClick={() => setProjectDetailsIndex(index)}>
                                    <img className={Style.logos} src={imgProjects[index]} alt={`img${index}`} />
                                </button>
                                <h4 className={Style.subtitleProject}> 
                                {
                                    nameProjects[index]
                                }
                                </h4>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
                {/* PROJECT */}
                <div className={Style.project}>
                    {
                        projectDetailsIndex !== null 
                        ? projectComponents[projectDetailsIndex] 
                        : <div className={Style.selection}>
                            <div className={Style.card}>
                                <p className={Style.projectSelection}>Select a Project</p>
                            </div>
                            <img className={Style.selector} src={selectImg} alt="Select-Project" />
                        </div>
                    }
                </div>
            </div>
        </div>
    </>
  );
}

export default Projects