import './project-list.styles.scss';
import UIIcon from '../../assets/ui-project-icon.png';
import MovieIcon from '../../assets/movie-project-icon.png';
import EcommerceIcon from '../../assets/e-commerce-project-icon.png';
const ProjectList = () => {
    return (
        <div id='projects' className='project-list-container'>
            <h2>My <span className='accent'>Projects</span></h2>
            <div className='project-list-items-container'>
                <a href='#ui-mockup-project'>
                    <div className = 'project-item'>
                        <img src={UIIcon}  alt='mobile phone illustration'/>
                        <h3>App UI Mockup</h3>
                    </div>
                </a>
                <a href='#e-commerce-website-project'>
                    <div className = 'project-item'>
                        <img src={EcommerceIcon} alt='purple laptop with shopping bag icon'/>
                        <h3>E-commerce Website</h3>
                    </div>
                </a>
                <a href='#movie-tracker-project'>
                    <div className = 'project-item'>
                        <img src={MovieIcon} alt='purple cammera icon'/>
                        <h3>Movie Tracker</h3>
                    </div>
                </a>
            </div>



        </div>
    )
}

export default ProjectList;