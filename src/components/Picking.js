import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../stylesheets/Picking.css';
import cities from '../db/Cities.json';
import { useTranslation } from 'react-i18next';
import uk from 'date-fns/locale/uk';
import enUS from 'date-fns/locale/en-US';

registerLocale('uk', uk);
registerLocale('en', enUS);

const Picking = () => {
  const { t, i18n } = useTranslation();
  const [from, setFrom] = useState({ value: 'Kyiv', label: t('Kyiv') });
  const [to, setTo] = useState({ value: 'Warsaw', label: t('Warsaw') });
  const [startDate, setStartDate] = useState(new Date());
  const [passengers, setPassengers] = useState(1);
  const [locale, setLocale] = useState('uk');

  useEffect(() => {
    if (i18n.language === 'ua') {
      setLocale('uk');
    } else {
      setLocale('en');
    }
  }, [i18n.language]);

  const handlePassengersChange = (event) => {
    let value = parseInt(event.target.value, 10);
    if (isNaN(value) || value < 1) value = 1;
    if (value > 120) value = 120;
    setPassengers(value);
  };

  const cityOptions = cities.map(city => ({
    value: city.value,
    label: t(city.value)
  }));

  return (
    <div className="picking-container">
      <div className="picking-field">
        <label>{t('From')}</label>
        <Select
          className="picking-select"
          value={from}
          onChange={setFrom}
          options={cityOptions}
        />
      </div>
      <div className="picking-field">
        <label>{t('To')}</label>
        <Select
          className="picking-select"
          value={to}
          onChange={setTo}
          options={cityOptions}
        />
      </div>
      <div className="picking-field">
        <label>{t('Departure')}</label>
        <DatePicker
          className="picking-datepicker"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="dd MMM yyyy"
          locale={locale}
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
