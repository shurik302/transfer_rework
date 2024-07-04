import React from 'react'
import { useTranslation } from 'react-i18next';
import '../stylesheets/Account.css';

function Account() {
  const { t } = useTranslation();
  return (
    <div className='Account'>
      <div className='WelcomePartAccount'>
        <div className='UserWelcome'>
          <span>Привіт User!</span>
        </div>
      </div>
      <div className='FutureTravels'>
        <div className='InfoPartTravel'>

        </div>
        <div className='Travels'></div>
      </div>
    </div>
  )
}

export default Account