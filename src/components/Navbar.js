import '../index.css'

const Navbar = () => {
    return ( 
        <nav>
            <a href='/' className='main-logo'>Cat Library</a>
            <ul className='link-group'>
                <li className='link-item'> <a className='link-link' href='/'>About</a></li>
                <li  className='link-item'><a className='link-link' href='/gallery'>Gallery</a></li>
                <li  className='link-item'><a className='link-link' href='/'>Contact</a></li>

            </ul>
        </nav>
     );
}
 
export default Navbar;