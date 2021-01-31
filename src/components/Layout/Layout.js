import SideBar from '../SideBar/SideBar';
import classes from './Layout.module.scss';
import { accents } from '../../values/values';
import { useContext, useEffect, useState } from 'react';
import Store, { Context } from '../../hooks/Store';
import Main from '../Main/Main';



const Layout = (props) => {
	

	return (
		<Store>
			<div className={classes.Layout}>
				<SideBar />
				<Main />
			</div>
		</Store>
	)
}

export default Layout;
