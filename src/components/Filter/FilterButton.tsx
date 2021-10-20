import React from 'react';
import { IFilterData } from '../../types/filterTypes';
const FilterButton = ({ path, className, text }: IFilterData) => {
  return (
    <li>
      <a href={path} className={className}>
        {text}
      </a>
    </li>
  );
};

export default FilterButton;
