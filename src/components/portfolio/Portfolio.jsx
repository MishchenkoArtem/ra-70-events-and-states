import { useState } from 'react';
import Toolbar from '../Toolbar/Toolbar';

export default function Portfolio() {
    let [stateClassName, setStateClassName] = useState('');

    function setNewClassName (event) {
        // setStateClassName(stateClassName = `${event.target.className} active`);
        const target = event.target.className;
        target.classList.add('active');
        console.log(target);
    }

    return (
        <>
            <Toolbar
                filters={[
                    'All',
                    'Websites',
                    'Flayers',
                    'Business Cards'
                ]}
                selector={stateClassName}
                onSelectFilter={setNewClassName} />
        </>
    );
}
