import React from 'react';
import { useTranslation } from 'react-i18next';
import '../stylesheets/Registration.css';

function Registration() {
	const { t } = useTranslation();
	return (
		<div className='Registration'>
			<div className='LeftPart'>
				<div className='SignIn'>
					<h2>{t('Registration')}</h2>
					<div className='DownPart'>
						<div className='Form'>
							<input type='email' placeholder={t('Email')} />
							<input type='password' placeholder={t('Password')} />
							<button><span>{t('RegistrationButton')}</span></button>
						</div>
						<div className='SocialIcons'>
							<i className="fab fa-google"></i>
							<i className="fab fa-apple"></i>
						</div>
					</div>

				</div>
			</div>

			<div className='RightPart'>
				<h2>{t('WelcomeReg')}</h2>
				<p>{t('RegText')}</p>
				<a href='authorisation'>{t('login')}</a>
			</div>
		</div>
	);
}

export default Registration;
