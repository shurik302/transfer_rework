import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../stylesheets/SearchTickets.css';
import { travels } from '../db/Travels_DB.js';
import Ticket from '../components/Ticket'; // Упевніться, що ви маєте компонент для відображення квитка

function SearchTickets() {
  const { t } = useTranslation();
  const location = useLocation();
  const { from, to, startDate, passengers } = location.state || {};

  useEffect(() => {
    console.log('Received search parameters:', {
      from,
      to,
      startDate,
      passengers
    });
  }, [from, to, startDate, passengers]);

  const filteredTravels = travels.filter(travel => {
    const travelDate = new Date(travel.date_departure.split('.').reverse().join('-'));
    const searchStartDate = new Date(startDate);
    searchStartDate.setHours(0, 0, 0, 0); // Встановлюємо час на 00:00

    const passesFilter = travel.fromEN === from && travel.toEN === to && travelDate >= searchStartDate;

    console.log('Checking travel:', {
      from: travel.fromEN,
      to: travel.toEN,
      date: travel.date_departure,
      travelDate: travelDate.toISOString(),
      searchStartDate: searchStartDate.toISOString(),
      passesFilter: passesFilter
    });

    return passesFilter;
  });

  useEffect(() => {
    console.log('Filtered travels:', filteredTravels);
  }, [filteredTravels]);

  return (
    <div className='SearchTickets'>
      {filteredTravels.length > 0 ? (
        filteredTravels.map((travel, index) => (
          <Ticket key={index} travel={travel} passengers={passengers} />
        ))
      ) : (
        <div>{t('No tickets found')}</div>
      )}
    </div>
  )
}

export default SearchTickets;
