import React from 'react';
import './sidebar.css';
import { useContext } from 'react';
import SidebarMenu from './SidebarMenu';
import { UploadFile, LineStyle, Add, PersonOutline, InsertDriveFile, Category, AdminPanelSettings, Logout } from '@mui/icons-material';
import SidebarListItem from './SidebarListItem';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
export default function SideBar() {
	const { dispatch } = useContext(AuthContext);
	const logout = () => {
		dispatch({ type: 'LOGOUT', payload: { currentUser: '', backdrop: true } });
		localStorage.clear();
	};
	return (
		<>
			<div className='sidebar'>
				<div className='top'>
					<span className='top-title'>Welcome</span>
				</div>
				<div className='sidebarwrapper'>
					<SidebarMenu title='DashBoard'>
						<Link className='Link' to='/'>
							<SidebarListItem listname='Home'>
								<LineStyle className='sidebarIcon' />
							</SidebarListItem>
						</Link>
					</SidebarMenu>
					<SidebarMenu title='Quick Menu'>
						<Link className='Link' to='/user'>
							<SidebarListItem listname='User'>
								<PersonOutline className='sidebarIcon' />
							</SidebarListItem>
						</Link>
						<Link className='Link' to='/documents'>
							<SidebarListItem listname='Document'>
								<InsertDriveFile className='sidebarIcon' />
							</SidebarListItem>
						</Link>

						<Link className='Link' to='/createcategory'>
							<SidebarListItem listname='Create Category'>
								<Category className='sidebarIcon' />
							</SidebarListItem>
						</Link>
					</SidebarMenu>

					<SidebarMenu title='User'>
						<Link className='Link' to='/Viewuser'>
							<SidebarListItem listname='View'>
								<PersonOutline className='sidebarIcon' />
							</SidebarListItem>
						</Link>
						<Link className='Link' to='/createuser'>
							<SidebarListItem listname='CreateUser'>
								<Add className='sidebarIcon' />
							</SidebarListItem>
						</Link>
					</SidebarMenu>

					<SidebarMenu title='Document'>
						<Link className='Link' to='/Viewdocuments'>
							<SidebarListItem listname='View'>
								<InsertDriveFile className='sidebarIcon' />
							</SidebarListItem>
						</Link>
						<Link className='Link' to='/uploaddoc'>
							<SidebarListItem listname='Upload'>
								<UploadFile className='sidebarIcon' />
							</SidebarListItem>
						</Link>
					</SidebarMenu>
					<SidebarMenu title='profile'>
						<Link className='Link' to='/profile'>
							<SidebarListItem listname='Admin'>
								<AdminPanelSettings className='sidebarIcon' />
							</SidebarListItem>
						</Link>
						<Link className='Link' to=''>
							<div className='logout-box'>
								<Logout className='sidebarIcon' />
								<span onClick={logout} className='logout'>
									Logout
								</span>
							</div>
						</Link>
					</SidebarMenu>
				</div>
			</div>
		</>
	);
}
