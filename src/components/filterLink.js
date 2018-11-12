import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setVisibilityFilter } from './actions'


const FilterLabel = ({label, currentFilter, setVisibilityFilter}) => {
  return (
    <div 
    className= {currentFilter === label ? 'active filterLabel' : 'filterLabel'}
    onClick = { (e) => {
      e.preventDefault();
      setVisibilityFilter(label)
    }}
      >{label}</div>
  )
}


function mapStateToPropsFilter(state) {
    return {
        currentFilter: state.visibilityReducer,
    };
}
function mapDispatchToPropsFilter(dispatch) {
    return bindActionCreators({setVisibilityFilter}, dispatch);
}

const FilterLink = connect(
  mapStateToPropsFilter,
  mapDispatchToPropsFilter
)(FilterLabel)

export default FilterLink;