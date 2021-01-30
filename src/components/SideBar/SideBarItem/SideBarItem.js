import { useState } from 'react';
import classes from './SideBarItem.module.scss';

const SideBarItem = (props) => {
	
	const [backgroundColor, setBackgroundColor] = useState(undefined)

	return (
		<div className={classes.SideBarItem}
			onMouseEnter={() => setBackgroundColor( props.colors.darker)}
			onMouseLeave={() => setBackgroundColor(undefined)}
			style={{backgroundColor: backgroundColor}}
		>
			<div className={classes.HoverInfo}
			style={{
				backgroundColor: props.colors.hoverInfo, 
				color: props.colors.hoverInfoText
			}} >
				<div style={{borderRightColor: props.colors.hoverInfo}} ></div>
				{props.item.name}
				</div>
			{props.item.icon}
		</div>
	)
}

export default SideBarItem;
