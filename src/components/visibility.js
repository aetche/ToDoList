import React from 'react';
import FilterLink from './filterLink';
import CheckUnCheckAll from './check';
import SearchContainer from './search';


const Filters = () => {
  return (
    <div id="containerSearch">
      < SearchContainer />
      <div id="filter">
        < FilterLink label = 'all' />
        < FilterLink label = 'completed' />
        < FilterLink label = 'active' />
        < CheckUnCheckAll />
      </div>
    </div>
  )
}

export default Filters;
