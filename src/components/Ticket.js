import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import '../stylesheets/Ticket.css';
import cities from '../db/cities.json';

const getCityNameById = (id, language) => {
  const city = cities.find(city => city.id === id);
  return city ? (language === 'ua' ? city.ukrainian : city.value) : '';
};

const Ticket = ({ travel, passengers }) => {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const navigate = useNavigate();

  const handleBuyTicket = () => {
    navigate('/buy-ticket', {
      state: { travel, passengers, language }
    });
  };

  return (
    <div className='ticket'>
      <div className='MainInfoTicket'>
        <div className='FromToTicket'>
          <div className='FromTicket'><span>{getCityNameById(travel.from, language)}</span></div>
          <div className='ToTicket'><span>{getCityNameById(travel.to, language)}</span></div>
        </div>
        <div className='ProgressSymbol'>
          <div className='Line'></div>
          <div className='Circle left'>
            <div className='InnerCircle'>
              <div className='SmallCircle'></div>
            </div>
          </div>
          <div className='Circle right'>
            <div className='InnerCircle'>
              <div className='SmallCircle'></div>
            </div>
          </div>
        </div>
        <div className='TimeTicket'>
          <div className='DepartureTicket'><span>{travel.departure}</span></div>
          <div className='ArrivalTicket'><span>{travel.arrival}</span></div>
        </div>
        <div className='AddInfoTicket'>
          <div className='DurationTicket'><span>{travel.duration} {t('hours')}</span></div>
          <div className='PassengersTicket'><span>{t('Passengers')}: {travel.passengers}</span></div>
          <div className='BaggageTicket'><span>{t('Baggage')}: {travel.baggage}</span></div>
        </div>
      </div>
      <div className='PriceInfoTicket'>
        <div className='PriceTicket'><span>{i18n.language === 'ua' ? `${travel.priceUA} UAH` : `${travel.priceEN} EUR`}</span></div>
        <button onClick={handleBuyTicket} className='BuyTicket'>
          <span className='BuyTicketText'>{t('BuyTicketText')}</span>
        </button>
      </div>
    </div>
  );
};

export default Ticket;
