import { menuItems, bottomMenuItems } from '../../values/values';
import classes from './SideBar.module.scss';
import SideBarItem, {ColorSetters} from './SideBarItem/SideBarItem';
import { accents } from '../../values/values';
import { ColorLensOutlined } from '@material-ui/icons';


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
			<div className={classes.SideBarBottom}>
			{
				bottomMenuItems && bottomMenuItems.map((item, key) => (
					<SideBarItem item={item} colors={props.colors} setColors={props.setColors}/>
				))
			}
			{/* <ColorSetters colors={accents.light} setColors={props.setColors}/> */}
			<ColorSetters colors={props.colors} accent={accents.accent1} setColors={props.setColors}>
				<ColorLensOutlined />
			</ColorSetters>
			<ColorSetters colors={props.colors} accent={accents.accent2} setColors={props.setColors}>
				<ColorLensOutlined />
			</ColorSetters>
			</div>
		</div>
	)
}

export default SideBar;
