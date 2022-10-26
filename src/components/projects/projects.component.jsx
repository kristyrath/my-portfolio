import './projects.styles.scss';
import Button from '../button/button.component';
import UIProjectImg from '../../assets/ui-project-img.png';
import ECommerceLangIcons from '../../assets/e-commerce-proj-lang-icons.png';
import ECommerceImg from '../../assets/e-commerce-proj-img.png';
import MovieLangIcons from '../../assets/movie-project-lang-icons.png';
import MovieImg from '../../assets/movie-project-img.png';
import UILangIcons from '../../assets/ui-project-lang-icons.png'; 
import bgImage from '../../assets/bg-img.png';
import bgImageFlipped from '../../assets/bg-img-flipped.png';
export const Projects = () => {
    
    const Projects = [
        {
            id: 'ui-mockup-project',
            projectName: 'Restaurant Review App Mock Up',
            link: 'https://www.figma.com/file/6NmtZfri06sZUzOiitkILl/Foodr---Restaurant-Review-App-UI-Mockup?node-id=0%3A1',
            buttonText: 'See more',
            description: <p>A complex cross-platform mock of a restaurant review app produced on <span className='accent'>Figma</span>. Uses material design from <span className='accent'>iOS, Android </span>and<span className='accent'> Windows</span> platform across different devices. Adjusted for user comfort by <span className='accent'>gesture based designs </span>on mobile platforms.</p>,
            projectIcons: UILangIcons,
            projectImg: UIProjectImg,
            classes: '',
            bg: bgImageFlipped
        },
        {
            id: 'e-commerce-website-project',
            projectName: 'E-Commerce Website',
            link: 'https://twentyseconddecade.netlify.app/',
            buttonText: 'Go to website',
            description: <p>A scalable <span className='accent'>React</span> application built using Google's <span className='accent'>Firebase</span> authentication API for user sign-in and registration. Uses <span className='accent'>Redux</span> store for single-sourced state management and dynamic rendering. Transaction handling uses <span className='accent'>Stripe's</span> payment services.</p>,
            projectIcons: ECommerceLangIcons,
            projectImg: ECommerceImg,
            classes: 'reverse',
            bg: bgImage
        },
        {
            id: 'movie-tracker-project',
            projectName: 'Movie Tracker',
            link: 'https://loki.trentu.ca/~kristyrath/3420/assignments/assn3/login.php',
            buttonText: 'Go to website',
            description: <p>An interactive movie-tracking website using a <span className='accent'>SQL</span> backend database and <span className='accent'>PHP</span> server-side scripting for user authentication and data validation.</p>,
            projectIcons: MovieLangIcons,
            projectImg: MovieImg,
            classes:'',
            bg: bgImageFlipped,
        }
    ]
    return (
        <div className='projects-container'>
        {
            Projects.map((project) => {
                const {id, projectName, bg, link, buttonText, description, projectIcons, classes, projectImg} = project;
                return (
                    <div key={id} id={id} className='project-container' style={{
            backgroundImage: `url(${bg})`
        }}>
                        <div className='project-img-container'>
                            <img src={projectImg}/>
                        </div>
                        <div className='project-text-container'>
                            <h2>{projectName}</h2>
                            <Button text = {buttonText} link={link}/>
                            <div className='project-description-container'>
                                {description}
                            </div>
                            <div className='project-icons-container'>
                                <img src={projectIcons}/>
                            </div>
                        </div>
                    </div>
                )
            })
        }


        </div>
    )
}

export default Projects;