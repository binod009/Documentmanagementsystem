import React from 'react';
import './Featuredinfo.css';
import Featuredinfobox from './Featuredinfobox';
import Featuredinfologo from './Featuredinfologo';
import { Category, FileCopy, Person } from '@mui/icons-material';
export default function Featuredinfo(props) {
	return (
		<div className='featured'>
			{props.data.map((item, index) => {
				return (
					<div key={index} className='featuredItem'>
						<span className='featuredTitle'>
							{item.title}
							<Featuredinfologo img={item.icon} />
						</span>
						<div className='documentnumbercontainer'>
							<span className='featuredNumber'>{item.total}</span>
						</div>
					</div>
				);
			})}
		</div>
	);
}
