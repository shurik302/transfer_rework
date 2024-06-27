import React from 'react';
import Picking from '../components/Picking';
import { useTranslation } from 'react-i18next';
import '../stylesheets/Home.css'

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className='Home'>
      <div className='MainContent'>
        <div className='WelcomminPart'>
          <div className='TextWelcommingPart'>
            <h1 className='MainGreeting'>{t('MainGreeting')}</h1>
            <h2 className='SecondGreeting'>{t('SecondGreeting')}</h2>
          </div>
        </div>
        <div className='PickingPart'>
          <Picking />
        </div>
      </div>

    </div>
  )
};

export default Home;
