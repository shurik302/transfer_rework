import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className='Home'>
      <div>{t('fuck')}</div>
      <p>{t('fuck2')}</p>
    </div>
    
  )
};

export default Home;
