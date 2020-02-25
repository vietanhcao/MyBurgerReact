import React from 'react'
import './BuildControl.scss'

const BuildControl = (props) => {
  return (
    <div className='build-control'>
      <div className='label'>{props.label}</div>
      <button disabled={props.isDisabled} className='less' onClick={props.removed}>Less</button>
      <button className='more' onClick={props.added}>More</button>
    </div>
  )
}

export default BuildControl