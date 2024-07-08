import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../stylesheets/SearchTickets.css';
import { travels } from '../db/Travels_DB.js';
import Ticket from '../components/Ticket'; // Упевніться, що ви маєте компонент для відображення квитка

function SearchTickets() {
  const { t } = useTranslation();
  const location = useLocation();
  const { from, to, startDate, passengers } = location.state || {};

  const [groupedTravels, setGroupedTravels] = useState({});

  useEffect(() => {
    console.log('Received search parameters:', {
      from,
      to,
      startDate,
      passengers
    });
  }, [from, to, startDate, passengers]);

  useEffect(() => {
    const filteredTravels = travels.filter(travel => {
      const travelDate = new Date(travel.date_departure.split('.').reverse().join('-'));
      const searchStartDate = new Date(startDate);
      searchStartDate.setHours(0, 0, 0, 0); // Встановлюємо час на 00:00

      return travel.from === from && travel.to === to && travelDate >= searchStartDate;
    });

    filteredTravels.sort((a, b) => {
      const dateA = new Date(a.date_departure.split('.').reverse().join('-') + 'T' + a.departure);
      const dateB = new Date(b.date_departure.split('.').reverse().join('-') + 'T' + b.departure);
      return dateA - dateB;
    });

    const grouped = filteredTravels.reduce((acc, travel) => {
      const dateKey = travel.date_departure;
      if (!acc[dateKey]) {
        acc[dateKey] = [];
      }
      acc[dateKey].push(travel);
      return acc;
    }, {});

    setGroupedTravels(grouped);
  }, [from, to, startDate]);

  useEffect(() => {
    console.log('Grouped travels:', groupedTravels);
  }, [groupedTravels]);

  return (
    <div className='SearchTickets'>
      {Object.keys(groupedTravels).length > 0 ? (
        Object.keys(groupedTravels).map(date => (
          <div key={date} className="date-section">
            <h2>{t('Travels_on')}: {date}</h2>
            {groupedTravels[date].map((travel, index) => (
              <Ticket key={index} travel={travel} passengers={passengers} />
            ))}
          </div>
        ))
      ) : (
        <div>{t('No tickets found')}</div>
      )}
    </div>
  )
}

export default SearchTickets;
