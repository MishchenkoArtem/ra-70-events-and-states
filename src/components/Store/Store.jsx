import { products } from '../constans';
import IconSwitch from '../IconSwitch/IconSwitch';
import CardsView from '../CardsView/CardsView';
import { useState } from 'react';

export default function Store () {
    const [icon, setIcon] = useState(false);
    const cards = '';
    const handleClick = (event) => {
        setIcon({ icon: event.target.textContent === 'view_list' ? 'view_module' : 'view_list' });
    }
    
    
    return (
        <>
            <IconSwitch icon={!icon ? {icon: 'view_list'} : icon } onSwitch={handleClick} />
            <CardsView cards={cards} />
        </>
    );
};
