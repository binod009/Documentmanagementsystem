import React from 'react';
import './loginsignup.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
export default function LoginSignup() {
	return (
		<div className='ls-container'>
			<div className='btncontainer'>
				<div className='l-btn-container'>
					<Link to='/Login' className='Link'>
						<Button color='info' fullWidth variant='contained'>
							Login
						</Button>
					</Link>
				</div>
				<div className='sup-btn-container'>
					<Link className='Link' to='/Signup'>
						<Button color='warning' fullWidth variant='contained'>
							SignUp
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}
