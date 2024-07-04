import React, { useState, useEffect, useRef } from 'react';
import '../stylesheets/Header.css';
import LanguageSwitcher from './LanguageSwitcher';
import LogoBig from '../images/logo_big.png';
import { useTranslation } from 'react-i18next';

function Navigation() {
	const { t } = useTranslation();
	const [menuVisible, setMenuVisible] = useState(false);
	const menuRef = useRef(null);

	// Добавляем состояние для отслеживания логина
	const [isLoggedIn, setIsLoggedIn] = useState(false);

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

	// Функция для проверки логина пользователя (замените на реальную проверку)
	useEffect(() => {
		// Здесь должна быть проверка на логин пользователя
		// Например, проверка наличия токена в localStorage или запрос к API
		// setIsLoggedIn(true или false в зависимости от результата проверки);
		// Пример:
		const token = localStorage.getItem('token');
		if (token) {
			setIsLoggedIn(true);
		}
	}, []);

	return (
		<div className="Navigation">
			<div className="Logo">
				<a href="/">
					<img src={LogoBig} alt="Logo" />
				</a>
			</div>

			<div className={`links-container ${menuVisible ? 'visible' : ''}`} ref={menuRef}>
				<div className="close-button" onClick={() => setMenuVisible(false)}>
					<i className="fa-solid fa-times"></i>
				</div>
				<div className="links">
					<a href="/map">{t('F_Link')}</a>
					<a href="/travels">{t('S_Link')}</a>
					<a href="/routes">{t('T_Link')}</a>
					<a href="/help">{t('Th_Link')}</a>
				</div>
			</div>

			<div className='UserAndLang'>
				<div className='User'>
					{isLoggedIn ? (
						<a href='/account'>
							<i className="fa-solid fa-user"></i>
						</a>
					) : (
						<div className='NotLogged'>
							<a href='/Authorisation'>{t('ProposeLogin')}</a>
							<a href='/Authorisation'><i className="fa-solid fa-user"></i></a>
						</div>
					)}
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
