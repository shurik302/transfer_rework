import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import Select from 'react-select';
import cities from '../db/cities.json';
import '../stylesheets/BuyTicket.css';

const getCityNameById = (id, language) => {
  const city = cities.find(city => city.id === id);
  return city ? (language === 'ua' ? city.ukrainian : city.value) : '';
};

function BuyTicket() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const { travel, passengers, language } = location.state || {};

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [smallBaggage, setSmallBaggage] = useState(0);
  const [largeBaggage, setLargeBaggage] = useState(0);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('');

  const handleSmallBaggageChange = (amount) => {
    setSmallBaggage(Math.max(0, Math.min(40, smallBaggage + amount)));
  };

  const handleLargeBaggageChange = (amount) => {
    setLargeBaggage(Math.max(0, Math.min(20, largeBaggage + amount)));
  };

  const handleBuyTicket = () => {
    console.log('Ticket Purchase Data:', {
      firstName,
      lastName,
      smallBaggage,
      largeBaggage,
      email,
      phone,
      countryCode,
      travel,
      passengers
    });
  };

  return (
    <div className='BuyTicketUser'>
      <div className='InfoBuyTicketUser'>
        <h1>{t('BuyTicketTextUser')}</h1>
      </div>
      <div className='MainInfoBuyTicketUser'>
        <div className='TicketInfoBuy'>
          <div className='DataUser'>
            <input
              type='text'
              placeholder={t('FirstName')}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type='text'
              placeholder={t('LastName')}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className='DataBaggage'>
            <div>{t('HandLuggage')}: {t('Free')}</div>
            <div>
              {t('SmallBaggage')}: 5kg, 55x40x20cm
              <div className='picking-passengers'>
                <button onClick={() => handleSmallBaggageChange(-1)}>-</button>
                <input
                  type='number'
                  value={smallBaggage}
                  readOnly
                />
                <button onClick={() => handleSmallBaggageChange(1)}>+</button>
              </div>
              <div>{t('PriceSmallBaggage')}</div>
            </div>
            <div>
              {t('LargeBaggage')}: 20kg, 80x50x30cm
              <div className='picking-passengers'>
                <button onClick={() => handleLargeBaggageChange(-1)}>-</button>
                <input
                  type='number'
                  value={largeBaggage}
                  readOnly
                />
                <button onClick={() => handleLargeBaggageChange(1)}>+</button>
              </div>
              <div>{t('PriceLargeBaggage')}</div>
            </div>
          </div>
          <div className='DataContactUser'>
            <input
              type='email'
              placeholder={t('Email')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className='phone-input'>
              <Select
                className="country-code-select"
                value={{ value: countryCode, label: countryCode }}
                onChange={(selectedOption) => setCountryCode(selectedOption.value)}
                options={[
                  { value: '+380', label: '+380' },
                  { value: '+48', label: '+48' },
                  { value: '+1', label: '+1' }
                ]}
              />
              <input
                type='tel'
                placeholder={t('Phone')}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <div className='ButtonConfirmBuyTicket'>
            <button onClick={handleBuyTicket}>{t('ConfirmPurchase')}</button>
          </div>
        </div>
        <div className='AddInfoTicketBuy'>
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
      </div>
    </div>
  );
}

export default BuyTicket;
