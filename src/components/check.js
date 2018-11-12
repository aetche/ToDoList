import React from 'react';
import { connect } from 'react-redux';
import { check_uncheck_all } from './actions'


let CheckAll = ({dispatch}) => {
  return (
      <div 
        className='check'
        onClick={(e) => {e.preventDefault(); dispatch(check_uncheck_all('check'))}}
        ><ion-icon name="checkbox-outline"></ion-icon>
      </div>)
}

let UnCheckAll = ({dispatch}) => {
  return (
    <div 
        className='check'
        onClick={(e) => {e.preventDefault(); dispatch(check_uncheck_all('uncheck'))}}
        ><ion-icon name="square-outline"></ion-icon>
      </div>
    )
}

const CheckUnCheckAll = () => {
  return(
    <div className='checkContainer'>
      <CheckAll />
      <UnCheckAll />
    </div>
  )
}
CheckAll = connect()(CheckAll)
UnCheckAll = connect()(UnCheckAll)

export default CheckUnCheckAll;
