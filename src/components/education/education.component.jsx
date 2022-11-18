import './education.styles.scss';
import EducationIcon from '../../assets/education-icon.png';
import bgImageFlipped from '../../assets/bg-img-flipped.png';
const Education = () => {
    return (
        <div id='education' className='education-container'>
            <img src={EducationIcon}/>
            <h2>My <span className='accent'>Education</span></h2>
            <div className='main-education-section'>
                <p>Currently an undergrad at <span className='accent'>Trent University</span>, pursuing a Bachelors of Science in <span className='accent'>Computer Science.</span></p>   

            </div>
            <div className='education-sections'>
                <div className='education-subsection'>
                    <h3>Dean's Honour Roll</h3>
                    <ul>
                        <li>2020 - 2021</li>
                        <li>2021 - 2022</li>
                    </ul>
                </div>


                <div className='education-subsection'> 
                    <h3>Relevant Completed Courses</h3>
                    <ul>
                        <li>Data structures and algorithms</li>
                        <li>Web development</li>
                        <li>Database design and management</li>
                        <li>Systems Programming</li>
                        <li>Software specs and development</li>
                        <li>Multimedia and design</li>
                    </ul>
                </div>
                <div className='education-subsection'> 
                    <h3>External Courses</h3>
                    <ul>
                        <li>React development</li>
                        <li>Web development</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Education;


/*
        <div id='education' className='education-container'  style={{
            backgroundImage: `url(${bgImageFlipped})`
        }}>
*/