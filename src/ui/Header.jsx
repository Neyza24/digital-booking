
import { useState } from 'react';
// import {users} from '../mocks/users';
import './header.css';
import burguer from '../assets/burger-mobile.svg';
import clear from '../assets/clear.svg';
import logoMobile from '../assets/logo-m.svg'




const Header = () => {

    const [showMobile, setShowMobile] = useState(false);
    // let avatarComponent = users && users.filter(user => user.email === 'fred@gmail.com');
    // const initialCharacters = avatarComponent[0].name.charAt(0).toUpperCase() + avatarComponent[0].lastName.charAt(0).toUpperCase();


    return (
        <header className='header border-b w-full'>

            <nav className='container nav'>
                <div className='box__logo'>
                    <a href='#' className='nav__logo'><img src={logoMobile} /></a>
                </div>

                <div className={showMobile ? 'nav__menu show-menu' : 'nav__menu'}>

                    <ul className='nav__list'>
                        <li className='nav__item'>
                            <a href="#" className='btn btn__outlined btn-md'>Crear cuenta</a>
                        </li>
                        <li className='nav__item'>
                            <a href="#" className='btn btn__contained btn-md'>Iniciar sesión</a>
                        </li>
                        {/* <li className='nav__item'>
                            <span className='nav__item nav__avatar'>{initialCharacters}</span>
                        </li> */}
                    </ul>
                    <div className='nav__close' onClick={() => setShowMobile(!showMobile)} >
                        <img src={clear} />
                    </div>

                </div>

                <div className='nav__toggle' onClick={() => setShowMobile(!showMobile)}>
                    <img src={burguer} />
                </div>
            </nav>
        </header>
    )
}

export default Header;
