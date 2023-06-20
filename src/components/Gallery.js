import '../index.css'
import callicon from '../images/call-icon.svg'
import mailicon from '../images/mail-icon.svg'


function Gallery(props) {
    return (
        <div className='contact-card'>
            <img src = {`./catimages/${ props.catImage }`} alt = { props.title } className='cats' />
            <h3 className='cat-title'>{ props.title }</h3>

            <div className ='info-group'>
                <img src = { callicon } alt='call icon' className = 'call-icon'/>
                <p className = 'phone-text'>{ props.phone }</p>
            </div>
            <div className = 'info-group'>
                <img src = { mailicon } alt='mail icon' className='mail-icon' />
                <p className = 'mail-text'> { props.email }</p>
            </div>
        </div>
    )
}

export default Gallery