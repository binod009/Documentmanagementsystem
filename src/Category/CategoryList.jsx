import React from 'react'
import './categorylist.css';
import { Visibility } from '@mui/icons-material';
export default function CategoryList() {
  return (
    <div className='category'>
   
           <span className="category-title">Category List</span>
          <ul className='categoryItem'>
          <li className="categorylistitem">Reports
          <button className='categorybtn-view'>View
          <Visibility className='btn-icon'/>
          </button>
          </li>
          <li className="categorylistitem">Registration
          <button className='categorybtn-view'>View
          <Visibility className='btn-icon'/>
          </button>
          </li>
          <li className="categorylistitem">Staff
          <button className='categorybtn-view'>View
          <Visibility className='btn-icon'/>
          </button>
          </li>
          </ul>
        </div>
  )
}
