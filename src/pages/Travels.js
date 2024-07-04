import React from 'react';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import '../stylesheets/Travels.css';
import SadSmile from '../images/sad_smile.png';

const trips = [
  /* { from: "Kyiv", to: "Warsawa", passengers: "1", date_departure: "03.07.2024", departure: "15:00", duration: "10.5", date_arrival: "04.07.2024", arrival: "18:30", baggage: "no" },
  { from: "Warsawa", to: "Kyiv", passengers: "2", date_departure: "05.07.2024", departure: "13:00", duration: "10.5", date_arrival: "06.07.2024", arrival: "13:30", baggage: "yes" }, */
];

function Travels() {
  const { t } = useTranslation();

  const now = moment();

  const isTripActive = (trip) => {
    const tripArrivalDateTime = moment(`${trip.date_arrival} ${trip.arrival}`, 'DD.MM.YYYY HH:mm').add(2, 'hours');
    return now.isBefore(tripArrivalDateTime);
  };

  const activeTrips = trips.filter(isTripActive);

  return (
    <div className='Travels'>
      <div className='Welcome'><span>{t('WelcomeTravel')}</span></div>
      <div className='FutureTravels'>
        <div className='Information'><span>{t('InformationTravels')}</span></div>
        <div className='UserTravels'>
          {activeTrips.length > 0 ? (
            <div className='HaveTravels'>
              {activeTrips.map((trip, index) => (
                <div key={index} className='Trip'>
                  <div className='MainInfo'>
                    <div className='Time'>
                      <div className='TimeDep'>
                        <span>{trip.date_departure}</span>
                        <span>{trip.departure}</span>
                      </div>
                      <div className='TimeArr'>
                        <span>{trip.date_arrival}</span>
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
          ) : (
            <div className='DontHaveTravels'>
              <div className='SadSmile'><img src={SadSmile} alt='Sad smile' /></div>
              <div className='InfoHaveNotTravels'><span>{t('InfoHaveNotTravels')}</span></div>
              <div className='ProposeBuyTicket'><span>{t('ProposeBuyTicket')}</span></div>
              <a href='/map' className='ButtonBuyTickets'><span>{t('BuyTickets')}</span></a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Travels;