import { useState } from 'react';
import DropdownItem from './DropdownItem.jsx';

export default function DropdownList() {
    const [state, setState] = useState({state: false});
    const btnName = [
        {title: 'Profile Information', id: '1'}, 
        {title: 'Change Password'},
        {title: 'Become PRO'},
        {title: 'Help'},
        {title: 'Log Out'},
    ];

    const handleClick = (event) => {
        setState({ state: state.state === false ? 'open' : false});
    };

    return (
        <div className="container">
            <div className={`dropdown-wrapper ${state.state}`} >
                <button onClick={handleClick} className="btn">
                    <span>Account Settings</span>
                    <i className="material-icons">public</i>
                </button>
                <ul className="dropdown">
                    <DropdownItem btnName={btnName} handleClick={handleClick} />
                </ul>
            </div>
        </div>
    );
}
