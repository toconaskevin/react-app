import React from 'react';
import '../App.css';

export const Header = () => (
    <header>
        <img src={process.env.PUBLIC_URL + 'MYtineraryLogo.png'} className="Logo-header" alt="logo" />
    </header>
);