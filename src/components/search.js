import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { searchInput } from './actions'


const Search = ({ searchInput, todos, mySearch}) => {
  return (
    <div id="search">
      <ion-icon name="search"></ion-icon>
      <input type="text" placeholder="Search" onChange = { (e) => { e.preventDefault(); searchInput(e.target.value)}}/>
    </div>
  )
}


function mapStateToProps(state) {
    return {
        mySearch: state.searchReducer
    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({searchInput}, dispatch);
}

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)

export default SearchContainer;