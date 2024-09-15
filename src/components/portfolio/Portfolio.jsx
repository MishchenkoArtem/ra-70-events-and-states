import { useState } from 'react';
import { data, filters } from '../constans';
import Toolbar from '../Toolbar/Toolbar';
import ProjectList from '../ProjectList/ProjectList';

export default function Portfolio () {
    const [selected, setSelected] = useState('All');

    const onSelectFilter = (event) => {
        setSelected({ selected : event.target.textContent });
    };

    const filtersElements = (data) => {
        if ( selected === 'All' ||  selected.selected === 'All') {
            return data;
        } else {
            return data.filter(current => current.category === selected.selected);
        }
    }

    const dataElements = filtersElements(data);
    console.log(selected);

    return (
        <>
            <Toolbar selected={ selected } filters={ filters } onSelectFilter={ onSelectFilter } />
            <ProjectList dataElements={ dataElements } />
        </>
    );
};
