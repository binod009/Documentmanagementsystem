import React from 'react'

export default function Featuredinfobox(props) {
  return (
    <div className='featuredItem' key={props.unique}>
        {props.children}
    </div>
  )
}
