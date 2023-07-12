import React, { useContext } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Login from './Login/Login';
import Signup from './Login/Signup';
import { AuthContext } from './context/AuthContext';
import Home from './Pages/Home';
import UserList from './Pages/userlist/UserList';
import UserRequest from './Pages/user/UserRequest';
import User from './Pages/user/User';
import Document from './Pages/Document/Document';
import Upload from './Pages/Upload/Upload';
import CreateCategory from './Pages/CreateCategory/CreateCategory';
import CreateUser from './Pages/user/CreateUser';

function App() {
	const { currentUser } = useContext(AuthContext);
	const RequireAuth = () => {
		return currentUser ? <Outlet /> : <Navigate to='/Login' replace={true} />;
	};

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={currentUser ? <Home /> : <Navigate to={'/login'} replace={true} />} />
				<Route path='/login' element={!currentUser ? <Login /> : <Navigate to={'/'} replace={true} />} />
				<Route path='/Signup' element={!currentUser ? <Signup /> : <Navigate to={'/'} replace={true} />} />

				<Route element={<RequireAuth />}>
					<Route path='/user' element={<UserList />} />
					<Route path='/user/Admin/userrequest' element={<UserRequest />} />
					<Route path='/user/:userid' element={<User />} />
					<Route path='/documents' element={<Document />} />
					<Route path='/documents/Admin/uploaddoc' element={<Upload />} />
					<Route path='/createcategory' element={<CreateCategory />} />
					<Route path='/createuser' element={<CreateUser />} />
					<Route path='/uploaddoc' element={<Upload />} />
					<Route path='/viewuser' element={<UserList />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
export default App;
