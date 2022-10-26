import './header.styles.scss';
import HeaderImg from '../../assets/header-img.png';
import bgImage from '../../assets/bg-img.png';
import ProjectList from '../project-list/project-list.component';
const Header = () => {
    return (
        <div id='home' className='header-container' style={{
            backgroundImage: `url(${bgImage})`
        }}>
            <div className='header-text-container'>
                <h1>hi, i'm <span className='accent'>kristy</span></h1>
                <h2>i design and develop <span className='bold-emphasis'>web apps</span></h2>
                <div className='header-description'>
                    <span>I'm currently a third year Computer Science undergraduate at Trent University.</span>
                </div>
            </div>

            <div className='header-img-container'>
                <img src = {HeaderImg} alt = 'header image, girl sitting on laptop' />
            </div>

            <div className='project-list-parent-container'>
                <ProjectList/>
            </div>

        </div>
    )
}

export default Header;