import './contact.styles.scss';
import GmailIcon from '../../assets/gmail-icon.png';
import LinkedInIcon from '../../assets/linkedin-icon.png';
import GithubIcon from '../../assets/github-icon.png';
import bgImage from '../../assets/bg-img.png';
const Contact = () => {
    return (
        <div id='contact' className='contacts-container' style={{
            backgroundImage: `url(${bgImage})`
        }}>
            <h2>My <span className='accent'>Contacts</span></h2>
            <div className='contact-container-wrapper'>
                <a href='mailto: kristyyrath@gmail.com'>
                    <div className='contact-container'>
                        <img src={GmailIcon}/>
                        <span className='contact'>kristyrathh@gmail.com</span>
                    </div>
                </a>
                <a href='https://www.linkedin.com/in/kristy-rath/'>
                    <div className='contact-container'>
                        <img src={LinkedInIcon}/>
                        <span className='contact'>in/kristy-rath</span>
                    </div>
                </a>
                <a href='https://github.com/kristyrath'>
                    <div className='contact-container'>
                        <img src={GithubIcon}/>
                        <span className='contact'>github/kristyrath</span>
                    </div>
                </a>
            </div>

        </div>
    )
}

export default Contact;