import React from 'react';
import Picking from '../components/Picking';
import { useTranslation } from 'react-i18next';
import '../stylesheets/Home.css';
import ImageMap from '../background_images/ImageMap.png';

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
          <a href='' className='MapSegment'>
            <div className='ImageMap'>
              <img src={ImageMap} />
            </div>
            <div className='TextMapSeg'>
              <span className='MainNameMapSeg'>
                {t('MainNameMapSeg')}
                <i class="fa-solid fa-chevron-right"></i>
              </span>
              <span className='SecNameMapSeg'>
                {t('SecNameMapSeg')}
              </span>
            </div>
          </a>
          <div className='AdditionalDescriptions'>
            <div className='AdditionalDescr FirstAddDesc'>
              <i class="fa-solid fa-bus"></i>
              <div className='TextAddLink'>
                <span>{t('NameFirstAddDesc')}</span>
                <span>{t('FirstAddDesc')}</span>
              </div>
            </div>
            <div className='AdditionalDescr SecondAddDesc'>
              <i class="fa-solid fa-right-left"></i>
              <div className='TextAddLink'>
                <span>{t('NameSecondAddDesc')}</span>
                <span>{t('SecondAddDesc')}</span>
              </div>
            </div>
            <div className='AdditionalDescr ThirdAddDesc'>
              <i class="fa-solid fa-shield"></i>
              <div className='TextAddLink'>
                <span>{t('NameThirdAddDesc')}</span>
                <span>{t('ThirdAddDesc')}</span>
              </div>
            </div>
            <div className='AdditionalDescr FourthAddDesc'>
              <i class="fa-solid fa-money-check-dollar"></i>
              <div className='TextAddLink'>
                <span>{t('NameFourthAddDesc')}</span>
                <span>{t('FourthAddDesc')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
