import React from 'react';
import { useTranslation } from 'react-i18next';
import '../stylesheets/Authorisation.css';

function Authorisation() {
	const { t } = useTranslation();
	return (
		<div className='Authorisation'>
			<div className='LeftPart'>
				<div className='SignIn'>
					<h2>{t('SignIn')}</h2>
					<div className='DownPart'>
						<div className='Form'>
							<input type='email' placeholder={t('Email')} />
							<input type='password' placeholder={t('Password')} />
							<button><span>{t('SignIn')}</span></button>
						</div>
						<div className='SocialIcons'>
							<i className="fab fa-google"></i>
							<i className="fab fa-apple"></i>
						</div>
					</div>

				</div>
			</div>

			<div className='RightPart'>
				<div className='Welcome'>
					<h2>{t('WelcomeBack')}</h2>
					<p>{t('KeepConnected')}</p>
					<a href='/registration'>{t('CreateAccount')}</a>
				</div>
			</div>
		</div>
	);
}

export default Authorisation;
