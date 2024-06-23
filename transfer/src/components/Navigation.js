import React, { useState, useEffect, useRef } from 'react';
import '../stylesheets/Navigation.css';
import LanguageSwitcher from '../components/LanguageSwitcher';
import LogoBig from '../images/logo_big.png';
import { useTranslation } from 'react-i18next';

function Navigation() {
    const { t } = useTranslation();
    const [menuVisible, setMenuVisible] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setMenuVisible(false);
        }
    };

    useEffect(() => {
        if (menuVisible) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuVisible]);

    return (
        <div className="Navigation">
            <div className="Logo">
                <img src={LogoBig} alt="Logo" />
            </div>

            <div className={`links ${menuVisible ? 'visible' : ''}`} ref={menuRef}>
                <span>{t('F_Link')}</span>
                <span>{t('S_Link')}</span>
                <span>{t('T_Link')}</span>
                <span>{t('Th_Link')}</span>
            </div>

            <div className='UserAndLang'>
                <div className='User'>
                    <div className='NotLogged'>
                        <a href='#'>
                            <i className="fa-solid fa-user"></i>
                        </a>
                    </div>
                    <div className='Logged'>
                        {/* Залогиненный контент */}
                    </div>
                </div>
                <div className="LanguageSwitcher">
                    <LanguageSwitcher />
                </div>
                <div className='BurgerButton' onClick={toggleMenu}>
                    <i className="fa-solid fa-bars"></i>
                </div>
            </div>
        </div>
    );
}

export default Navigation;
