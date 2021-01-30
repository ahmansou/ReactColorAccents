import { menuItems } from '../../values/values';
import classes from './SideBar.module.scss';
import SideBarItem from './SideBarItem/SideBarItem';

const SideBar = (props) => {

	return (
		<div className={classes.SideBar}
			style={{
				backgroundColor: props.colors.primary,
				borderColor: props.colors.outlines
			}} >
			<div className={classes.SideBarMain}>
			{
				menuItems && menuItems.map((item, key) => (
					<SideBarItem item={item} colors={props.colors} />
				))
			}
			</div>
		</div>
	)
}

export default SideBar;
