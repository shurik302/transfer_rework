import React from 'react';
import { useTranslation } from 'react-i18next';
import '../stylesheets/Ticket.css';

const Ticket = ({ travel, passengers }) => {
  const { t, i18n } = useTranslation();
  
  return (
    <div className='ticket'>
      <div>{t('From')}: {i18n.language === 'ua' ? travel.fromUA : travel.fromEN}</div>
      <div>{t('To')}: {i18n.language === 'ua' ? travel.toUA : travel.toEN}</div>
      <div>{t('Departure')}: {travel.date_departure} {travel.departure}</div>
      <div>{t('Arrival')}: {travel.date_arrival} {travel.arrival}</div>
      <div>{t('Duration')}: {travel.duration} {t('hours')}</div>
      <div>{t('Passengers')}: {passengers}</div>
      <div>{t('Price')}: {i18n.language === 'ua' ? `${travel.priceUA} UAH` : `${travel.priceEN} EUR`}</div>
      <div>{t('Baggage')}: {travel.baggage}</div>
    </div>
  );
};

export default Ticket;
