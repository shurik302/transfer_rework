import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
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
          <div className='UserInfo StageDiv FirstStage'>
            <div className='NameTitle NameTitleUserInfo'>
              <span className='Stage'>1</span>
              <span className='NameTitleBuyTicket NameTitleBuyTicketNameUser'>{t('NameTitleBuyTicketNameUser')}</span>
            </div>
            <div className='MainInputs MainInputsNameUser'>
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
          </div>

          <div className='DataBaggage StageDiv SecondStage'>
            <div className='NameTitle NameTitleUserInfo'>
              <span className='Stage'>2</span>
              <span className='NameTitleBuyTicket NameTitleBuyTicketDataBaggage'>{t('NameTitleBuyTicketDataBaggage')}</span>
            </div>
            <div className='MainInputs MainInputsDataBaggage'>
              <div className='HandLuggage BaggageDiv'><span>{t('HandLuggage')}:</span><span>{t('Free')}</span></div>
              <div className='GorisontalLine'></div>
              <div className='SmallBaggage BaggageDiv'>
                <div className='InfoBaggageType'>
                  <span>{t('SmallBaggage')}:</span><span className='AddInfoBaggage'> 5kg, 55x40x20cm</span>
                </div>
                <div className='RightPartBaggage'>
                  <div className='picking-baggage'>
                    <button onClick={() => handleSmallBaggageChange(-1)}>-</button>
                    <input
                      type='number'
                      value={smallBaggage}
                      readOnly
                    />
                    <button onClick={() => handleSmallBaggageChange(1)}>+</button>
                  </div>
                  <div><span>{t('120грн'/* PriceSmallBaggage */)}</span></div>
                </div>
              </div>
              <div className='LargeBaggage BaggageDiv'>
                <div className='InfoBaggageType'>
                  <span>{t('LargeBaggage')}:</span><span className='AddInfoBaggage'> 20kg, 80x50x30cm</span>
                </div>

                <div className='RightPartBaggage'>
                  <div className='picking-baggage'>
                    <button onClick={() => handleLargeBaggageChange(-1)}>-</button>
                    <input
                      type='number'
                      value={largeBaggage}
                      readOnly
                    />
                    <button onClick={() => handleLargeBaggageChange(1)}>+</button>
                  </div>
                  <div><span>{t('130грн'/* PriceLargeBaggage */)}</span></div>
                </div>
              </div>
            </div>
          </div>

          <div className='DataContactUser StageDiv ThirdStage'>
            <div className='NameTitle NameTitleDataContactUser'>
              <span className='Stage'>3</span>
              <span className='NameTitleBuyTicket NameTitleBuyTicketDataDataContactUser'>{t('NameTitleBuyTicketDataDataContactUser')}</span>
            </div>
            <div className='DataContactUserMain'>
              <div className='EnterEmailBT'>
                <input
                  type='email'
                  placeholder={t('Email')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='phone-input'>
                <PhoneInput
                  country={'us'}
                  value={phone}
                  onChange={setPhone}
                />
              </div>
            </div>
          </div>
        </div>

        <div className='AddInfoTicketBuy'>
          <div className='ProgressTicketBuyVertical'>
            <div className='RouteSymbol'>
              <div className='Line'></div>
              <div className='Circle top'>
                <div className='InnerCircle'>
                  <div className='SmallCircle'></div>
                </div>
              </div>
              <div className='Circle bottom'>
                <div className='InnerCircle'>
                  <div className='SmallCircle'></div>
                </div>
              </div>
            </div>
            <div className='FromToTicketTicketBuyVertical'>
              <div className='FromTicket'><span>{getCityNameById(travel.from, language)}</span><span>{travel.departure}</span></div>
              <div className='ToTicket'><span>{getCityNameById(travel.to, language)}</span><span>{travel.arrival}</span></div>
            </div>
          </div>
          <div className='AddInfoTicketBT'>
            <div className='DurationTicket'><span>{t('DurationTicket')}</span><span>{travel.duration}{t('hours')}</span></div>

          </div>
          <div className='ButtonConfirmBuyTicket'>
            <button onClick={handleBuyTicket}>{t('ConfirmPurchase')}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyTicket;
