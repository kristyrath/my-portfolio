import './skills.styles.scss';
import SkillLangIcons from '../../assets/skills-lang-icons.png';
import bgImage from '../../assets/bg-img.png';
const Skills = () => {
    return (
        <div id='skills' className='skills-container'  style={{
            backgroundImage: `url(${bgImage})`
        }}>
            <h2>My <span className='accent'>Skills</span></h2>
            <img className='skills-lang-icons-img' src ={SkillLangIcons}/>

        </div>
    )
}

export default Skills;