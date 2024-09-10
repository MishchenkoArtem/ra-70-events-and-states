import { useState } from 'react';
import { data, filters } from '../constans';
import Toolbar from '../Toolbar/Toolbar';
import ProjectList from '../ProjectList/ProjectList'

export default function Portfolio() {
    const [selected, setSelected] = useState('All');
    const photoCards = filterData();

    function onSelectFilter (filter) {
        setSelected({ selected: filter.target.textContent });
    }

    function filterData () {
        if (selected.selected === 'All') return data;
        return data.filter(current => current.category === selected.selected);
    }

    return (
        <>
            <Toolbar filters={filters} selected={selected} onSelectFilter={onSelectFilter} />
            <ProjectList data={photoCards} />
        </>
    );
}
