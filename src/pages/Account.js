// Account.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import '../stylesheets/Account.css';
import { trips } from '../db/tickets';

function Account() {
  const { t } = useTranslation();
  const now = moment();

  const isTripActive = (trip) => {
    const tripArrivalDateTime = moment(`${trip.date_arrival} ${trip.arrival}`, 'DD.MM.YYYY HH:mm').add(2, 'hours');
    return now.isBefore(tripArrivalDateTime);
  };

  const activeTrips = trips.filter(isTripActive);
  const pastTrips = trips.filter(trip => !isTripActive(trip));

  const renderInfoText = () => {
    if (activeTrips.length === 0 && pastTrips.length === 0) {
      return t('TicketsMessage1');
    } else if (activeTrips.length === 0) {
      return t('TicketsMessage2');
    } else if (pastTrips.length === 0) {
      return t('TicketsMessage3');
    } else {
      return t('TicketsMessage4');
    }
  };

  return (
    <div className='Account'>
      <div className='MainContent'>
        <div className='WelcomePartAccount'>
          <div className='UserWelcome'>
            <h1>{t('HiUser')} <span className='UserName'>User</span>!</h1>
            <h2>{t('PastAndFutureTripsMessage')}</h2>
          </div>
        </div>
        <div className='FutureTravels'>
          <div className='InfoPartTravel'>
            <span className='NameTickets'>{t('Tickets')}</span> 
            <span className='InfoTravelsUser'>
              {renderInfoText()}
            </span>
          </div>
          <div className='Travels'>
            {activeTrips.map((trip, index) => (
              <div key={index} className='Trip'>
                <div className='MainInfo'>
                  <div className='Time'>
                    <div className='TimeDep'>
                      <span>{trip.departure}</span>
                    </div>
                    <div className='TimeArr'>
                      <span>{trip.arrival}</span>
                    </div>
                  </div>
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
                  <div className='Route'>
                    <div className='From'>
                      <div className='Place'>
                        <span>{trip.from}</span>
                      </div>
                    </div>
                    <div className='To'>
                      <div className='Place'>
                        <span>{trip.to}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='AdditionalInfo'>
                  <span>{t('Baggage')}: {trip.baggage === "yes" ? t('Yes') : t('No')}</span>
                  <span>{t('Passengers')}: {trip.passengers}</span>
                </div>
              </div>
            ))}
          </div>
          <div className='PastTravels'>
            {pastTrips.map((trip, index) => (
              <div key={index} className='Trip'>
                <div className='MainInfo'>
                  <div className='Time'>
                    <div className='TimeDep'>
                      <span>{trip.departure}</span>
                    </div>
                    <div className='TimeArr'>
                      <span>{trip.arrival}</span>
                    </div>
                  </div>
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
                  <div className='Route'>
                    <div className='From'>
                      <div className='Place'>
                        <span>{trip.from}</span>
                      </div>
                    </div>
                    <div className='To'>
                      <div className='Place'>
                        <span>{trip.to}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='AdditionalInfo'>
                  <span>{t('Baggage')}: {trip.baggage === "yes" ? t('Yes') : t('No')}</span>
                  <span>{t('Passengers')}: {trip.passengers}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account;
