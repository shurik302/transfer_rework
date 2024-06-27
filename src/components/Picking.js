import React, { useState } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../stylesheets/Picking.css';
import cities from '../db/Cities.json';
import { useTranslation } from 'react-i18next';

const Picking = () => {
  const { t } = useTranslation();
  const [from, setFrom] = useState({ value: 'Kyiv', label: 'Kyiv' });
  const [to, setTo] = useState({ value: 'Warsaw', label: 'Warsaw' });
  const [startDate, setStartDate] = useState(new Date());
  const [passengers, setPassengers] = useState(1);

  const handlePassengersChange = (event) => {
    let value = parseInt(event.target.value, 10);
    if (isNaN(value) || value < 1) value = 1;
    if (value > 120) value = 120;
    setPassengers(value);
  };

  return (
    <div className="picking-container">
      <div className="picking-field">
        <label>{t('From')}</label>
        <Select
          className="picking-select"
          value={from}
          onChange={setFrom}
          options={cities}
        />
      </div>
      <div className="picking-field">
        <label>{t('To')}</label>
        <Select
          className="picking-select"
          value={to}
          onChange={setTo}
          options={cities}
        />
      </div>
      <div className="picking-field">
        <label>{t('Departure')}</label>
        <DatePicker
          className="picking-datepicker"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="dd MMM yyyy"
        />
      </div>
      <div className="picking-field">
        <label>{t('Passengers')}</label>
        <div className="picking-passengers">
          <button onClick={() => setPassengers(Math.max(passengers - 1, 1))}>-</button>
          <input
            type="number"
            value={passengers}
            onChange={handlePassengersChange}
            min="1"
            max="120"
          />
          <button onClick={() => setPassengers(Math.min(passengers + 1, 120))}>+</button>
        </div>
      </div>
      <button className="picking-search">{t('Search')}</button>
    </div>
  );
};

export default Picking;