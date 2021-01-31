import { menuItems, bottomMenuItems } from '../../values/values';
import classes from './SideBar.module.scss';
import SideBarItem, {ColorSetters} from './SideBarItem/SideBarItem';
import { accents } from '../../values/values';
import { ColorLensOutlined } from '@material-ui/icons';
import { useContext } from 'react';
import { Context } from '../../hooks/Store';


const SideBar = (props) => {
	const [state, dispatch] = useContext(Context);

	return (
		<div className={classes.SideBar}
			style={{
				backgroundColor: state.accent.primary,
				borderColor: state.accent.outlines
			}} >
			<div className={classes.SideBarMain}>
			{menuItems && menuItems.map((item, key) => (
				<SideBarItem key={key} item={item} colors={state.accent} />
			))}
			</div>
			<div className={classes.SideBarBottom}>
			{bottomMenuItems && bottomMenuItems.map((item, key) => (
				<SideBarItem key={key} item={item} colors={state.accent} />
			))}
			<ColorSetters colors={state.accent} accent={accents.accent1} >
				<ColorLensOutlined />
			</ColorSetters>
			<ColorSetters colors={state.accent} accent={accents.accent2} >
				<ColorLensOutlined />
			</ColorSetters>
			</div>
		</div>
	)
}

export default SideBar;
