import React from 'react';
import FilterButton from './FilterButton';
import { filerData } from '../../mock/mockData';

const Filter = () => {
  const { filters } = filerData;

  return (
    <ul className="filters">
      {filters.map(({ path, className, text }, idx) => (
        <FilterButton {...{ path, className, text }} key={`filter-${idx}`} />
      ))}
    </ul>
  );
};

export default Filter;
