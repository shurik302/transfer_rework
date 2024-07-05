// Travels.js
import React from 'react';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import '../stylesheets/Travels.css';
import SadSmile from '../images/sad_smile.png';
import { trips } from '../db/tickets';

function Travels() {
  const { t } = useTranslation();
  const now = moment();

  const isTripActive = (trip) => {
    const tripArrivalDateTime = moment(`${trip.date_arrival} ${trip.arrival}`, 'DD.MM.YYYY HH:mm').add(2, 'hours');
    return now.isBefore(tripArrivalDateTime);
  };

  const activeTrips = trips.filter(isTripActive).sort((a, b) => {
    return moment(`${a.date_departure} ${a.departure}`, 'DD.MM.YYYY HH:mm') - moment(`${b.date_departure} ${b.departure}`, 'DD.MM.YYYY HH:mm');
  });

  const groupTripsByDate = (trips) => {
    return trips.reduce((groupedTrips, trip) => {
      const date = trip.date_departure;
      if (!groupedTrips[date]) {
        groupedTrips[date] = [];
      }
      groupedTrips[date].push(trip);
      return groupedTrips;
    }, {});
  };

  const groupedTrips = groupTripsByDate(activeTrips);

  return (
    <div className='Travels'>
      <div className='Welcome'><span>{t('WelcomeTravel')}</span></div>
      <div className='FutureTravels'>
        <div className='Information'><span>{t('InformationTravels')}</span></div>
        <div className='UserTravels'>
          {Object.keys(groupedTrips).length > 0 ? (
            <div className='HaveTravels'>
              {Object.keys(groupedTrips).map((date, index) => (
                <div key={index}>
                  <div className='Date'><span className='DateInfo'>{t('DateInfo')}</span>{date}</div>
                  {groupedTrips[date].map((trip, tripIndex) => (
                    <div key={tripIndex} className='TripContainer'>
                      <div className='Trip'>
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
                    </div>
                  ))}
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
