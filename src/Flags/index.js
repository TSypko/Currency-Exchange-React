import React from 'react';
import plnFlagImage from '../flags/Flag_of_Poland_2.svg'
import euroFlagImage from '../flags/Flag_of_euro.svg'
import usdFlagImage from '../flags/US_44_Star_Flag.svg'
import gbpFlagImage from '../flags/Flag_of_the_United_Kingdom.svg'
import chfFlagImage from '../flags/Flag_of_Switzerland.svg'
import "./style.css";

export const plnFlag = () => (
    <img
        src={plnFlagImage}
        alt="Flag of Poland"
        className="flag"
    />
)
export const euroFlag = () => (
    <img
        src={euroFlagImage}
        alt="Flag of UE"
        className="flag"
    />
)
export const usdFlag = () => (
    <img
        src={usdFlagImage}
        alt="Flag of USA"
        className="flag"
    />
)
export const gbpFlag = () => (
    <img
        src={gbpFlagImage}
        alt="Flag of Great Britain"
        className="flag"
    />
)
export const chfFlag = () => (
    <img
        src={chfFlagImage}
        alt="Flag of Switzerland"
        className="flag"
    />
)
