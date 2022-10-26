import './button.styles.scss';
const Button = ({text, link}) => {
    return (
        <div className='button-container'>
            <a href={link}>
                <button type ='button'>{text}</button>
            </a>
        </div>
    )
}

export default Button;