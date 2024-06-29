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
        <div className='InfoAndLinks'>
          <div className='AdditionalLinks'>
            <a href='' className='FirstAddLink AddLink'>
              <i class="fa-solid fa-ticket"></i>
              <span>{t('FirstAddLink')}</span>
            </a>
            <a href='' className='SecondAddLink AddLink'>
              <i class="fa-solid fa-route"></i>
              <span>{t('SecondAddLink')}</span>
            </a>
            <a href='' className='ThirdAddLink AddLink'>
              <i class="fa-solid fa-question"></i>
              <span>{t('ThirdAddLink')}</span>
            </a>
            <a href='' className='ForthAddLink AddLink'>
              <i class="fa-solid fa-handshake-angle"></i>
              <span>{t('FourthAddLink')}</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  )
};

export default Home;
