import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import '../stylesheets/Account.css';
import { trips } from '../db/tickets';
import cities from '../db/cities.json';

const getCityNameById = (id, language) => {
  const city = cities.find(city => city.id === id);
  return city ? (language === 'ua' ? city.ukrainian : city.value) : '';
};

function Account() {
  const { t, i18n } = useTranslation();
  const now = moment();
  const [showAllActiveTrips, setShowAllActiveTrips] = useState(false);
  const [showAllPastTrips, setShowAllPastTrips] = useState(false);

  const isTripActive = (trip) => {
    const tripArrivalDateTime = moment(`${trip.date_arrival} ${trip.arrival}`, 'DD.MM.YYYY HH:mm').add(2, 'hours');
    return now.isBefore(tripArrivalDateTime);
  };

  const activeTrips = trips.filter(isTripActive).sort((a, b) => {
    return moment(`${a.date_departure} ${a.departure}`, 'DD.MM.YYYY HH:mm') - moment(`${b.date_departure} ${b.departure}`, 'DD.MM.YYYY HH:mm');
  });

  const pastTrips = trips.filter(trip => !isTripActive(trip)).sort((a, b) => {
    return moment(`${b.date_departure} ${b.departure}`, 'DD.MM.YYYY HH:mm') - moment(`${a.date_departure} ${a.departure}`, 'DD.MM.YYYY HH:mm');
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

  const groupedActiveTrips = groupTripsByDate(activeTrips);
  const groupedPastTrips = groupTripsByDate(pastTrips);

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

  const handleShowAllActiveTrips = () => {
    setShowAllActiveTrips(true);
  };

  const handleShowAllPastTrips = () => {
    setShowAllPastTrips(true);
  };

  const renderTrips = (groupedTrips, showAll) => {
    const tripsArray = Object.keys(groupedTrips).reduce((acc, date) => [...acc, ...groupedTrips[date]], []);
    const tripsToShow = showAll ? tripsArray : tripsArray.slice(0, 5);

    return tripsToShow.map((trip, index) => (
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
                <span>{getCityNameById(trip.from, i18n.language)}</span>
              </div>
            </div>
            <div className='To'>
              <div className='Place'>
                <span>{getCityNameById(trip.to, i18n.language)}</span>
              </div>
            </div>
          </div>
        </div>
        <div className='AdditionalInfo'>
          <span>{t('Baggage')}: {trip.baggage === "yes" ? t('Yes') : t('No')}</span>
          <span>{t('Passengers')}: {trip.passengers}</span>
        </div>
      </div>
    ));
  };

  return (
    <div className='Account'>
      <div className='MainContentAccount'>
        <div className='WelcomePartAccount'>
          <div className='UserWelcome'>
            <h1>{t('HiUser')} <span className='UserName'>User</span>!</h1>
            <h2>{t('PastAndFutureTripsMessage')}</h2>
          </div>
          <div className='InfoPartTravel'>
            <span className='InfoTravelsUser'>
              {renderInfoText()}
            </span>
          </div>
        </div>
        <div className='FutureTravels'>
          <div className='AllTickets'>
            <div className='Travels TravelsAcc'>
              <div className='TravelsNowInfo TravelsInfo'>
                <span className='TravelsNowInfoText'>
                  {t("TravelsNowInfoText")}
                </span>
              </div>
              {activeTrips.length === 0 ? (
                <div className='ProposeBuyTicket ProposeBuyTicketAcc'>
                  <span>{t('ProposeBuyTicketAcc')}</span>
                  <a href='/map' className='ButtonBuyTickets ButtonBuyTicketsAcc'><span>{t('BuyTickets')}</span></a>
                </div>
              ) : (
                <>
                  {renderTrips(groupedActiveTrips, showAllActiveTrips)}
                  {!showAllActiveTrips && activeTrips.length > 5 && (
                    <div className='ShowAllButton' onClick={handleShowAllActiveTrips}>
                      <span>{t('ShowAllActiveTrips')}</span>
                    </div>
                  )}
                </>
              )}
            </div>
            <div className='Travels PastTravelsAcc'>
              <div className='TravelsPastInfo TravelsInfo'>
                <span className='TravelsPastInfoText'>
                  {t("TravelsPastInfoText")}
                </span>
              </div>
              {pastTrips.length === 0 ? (
                <span>{t('EmptyHistory')}</span>
              ) : (
                <>
                  {renderTrips(groupedPastTrips, showAllPastTrips)}
                  {!showAllPastTrips && pastTrips.length > 5 && (
                    <div className='ShowAllButton' onClick={handleShowAllPastTrips}>
                      <span>{t('ShowAllPastTrips')}</span>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
