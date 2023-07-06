import React from 'react';
import './login.css';
import logo from '../../src/logo11.png';
import { useState, useContext, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase';
import Alert from '@mui/material/Alert';
import { doc, getDoc } from 'firebase/firestore';
import { AuthContext } from '../context/AuthContext';

export default function Login() {
	const [UserLogin, setUserLogin] = useState({
		email: '',
		password: '',
	});

	const [isSubmit, setIsSubmit] = useState(false);
	const [error, setError] = useState(null);
	const [formErrors, setFormErrors] = useState({});
	const { dispatch } = useContext(AuthContext);
	const navigate = useNavigate();

	//checking inputfrom values for valiation

	const validate = (values) => {
		const errors = {};
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
		if (!values.email) {
			errors.email = 'Email is required';
		} else if (!regex.test(values.email)) {
			errors.email = 'Enter a valid Email';
		}
		if (!values.password) {
			errors.password = 'Password is required';
		}
		return errors;
	};

	const handleInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setUserLogin({ ...UserLogin, [name]: value });
	};
	//form submit
	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSubmit(true);
		setFormErrors(validate(UserLogin));
	};
	//As soon as FormErros changes this function fires
	useEffect(() => {
		if (Object.keys(formErrors).length === 0 && isSubmit) {
			signInWithEmailAndPassword(auth, UserLogin.email, UserLogin.password)
				.then((userCredential) => {
					// Signed in
					const user = userCredential.user;
					const docRef = doc(db, 'admin', user.uid);
					getDoc(docRef).then((doc) => {
						localStorage.setItem('currentuser', JSON.stringify(doc.data()));
					});
					dispatch({ type: 'LOGIN', payload: user });
					navigate('/');
				})
				.catch((error) => {
					setError(error);
					setInterval(() => {
						setError();
					}, 4000);
				});
		}
	}, [formErrors]);
	return (
		<>
			<div className='login-container'>
				{error && <Alert severity='error'>username & password didont matched !</Alert>}
				<form className='formcontainer' onSubmit={handleSubmit}>
					<div className='logocontainer'>
						<img className='logo' src={logo} alt='logo' />
					</div>
					<div className='inputfield'>
						<TextField fullWidth type='text' name='email' id='email' value={UserLogin.email} label='Username' variant='outlined' onChange={handleInput} autoComplete='false' />
					</div>
					<span style={{ color: 'red', fontSize: '0.7em' }}>{formErrors.email}</span>
					<div className='inputfield'>
						<TextField fullWidth type='password' name='password' id='password' value={UserLogin.password} label='Password' variant='outlined' onChange={handleInput} />
					</div>
					<span style={{ color: 'red', fontSize: '0.8em' }}>{formErrors.password}</span>
					<div className='rememberme'>
						<input type='checkbox' id='rememberpassword' />
						<label htmlFor='rememberpassword'>Remember Me</label>
					</div>

					<div className='btn-container'>
						<Button type='submit' fullWidth variant='contained'>
							Login
						</Button>
					</div>
					<div className='fp-container'>
						<p className='forget'>Forget Password......?</p>
					</div>
					<div className='Signup'>
						<Link to='/Signup' className='Link'>
							<p>
								Need an account?<span style={{ color: '#20629C', marginLeft: '3px' }}>Sign Up</span>
							</p>
						</Link>
					</div>
				</form>
			</div>
		</>
	);
}
