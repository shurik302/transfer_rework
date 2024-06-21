import React from 'react';
import '../stylesheets/Navigation.css';
import LanguageSwitcher from '../components/LanguageSwitcher'

function Navigation() {
    return (
        <div className="Navigation">
           <LanguageSwitcher />
        </div>
    );
}

export default Navigation;