import React from 'react';
import Picking from '../components/Picking';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className='Home'>
      <div className='MainContent'>
        <div className='WelcomminPart'>
          <div className='TextWelcommingPart'>
            <h1 className='MainGreeting'>{t('MainGreeting')}</h1>
            <div className='SecondGreeting'>{t('SecondGreeting')}</div>
          </div>
        </div>
      </div>
      <Picking />
    </div>
  )
};

export default Home;
