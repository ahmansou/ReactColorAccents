import { useState } from 'react';
import classes from './SideBarItem.module.scss';
import { accents } from '../../../values/values';

export const ColorSetters = (props) => {
	const [backgroundColor, setBackgroundColor] = useState(undefined);
	const accent = props.accent;

	const accentHandler = () => {
		localStorage.setItem('colorAccent', JSON.stringify({
			accent: accent
		}));
		props.setColors(accent);
	}

	return (
		<div className={[classes.SideBarItem, classes.ColorSetters].join(' ')} 
		onMouseEnter={() => setBackgroundColor(props.colors.darker)}
		onMouseLeave={() => setBackgroundColor(undefined)}
		style={{backgroundColor: backgroundColor, color: props.accent.textColor}}
		onClick={accentHandler} >
			<div className={classes.HoverInfo}
			style={{ backgroundColor: props.colors.hoverInfo, 
				color: props.colors.hoverInfoText }} >
				<div style={{borderRightColor: props.colors.hoverInfo}} ></div>
				{accent.name}
			</div>
			{props.children}
		</div>
	)
}

const SideBarItem = (props) => {
	
	const [backgroundColor, setBackgroundColor] = useState(undefined)


	const accentHandler = () => {
		let accent;
		if (props.colors.name === 'dark')
			accent = accents.light;
		else
			accent = accents.dark;
		localStorage.setItem('colorAccent', JSON.stringify({
			accent: accent
		}));
		props.setColors(accent);
	}

	return (
		
		<div className={classes.SideBarItem}
			onMouseEnter={() => setBackgroundColor( props.colors.darker)}
			onMouseLeave={() => setBackgroundColor(undefined)}
			onClick={props.item.setDarkMode ? accentHandler : null}
			style={{backgroundColor: backgroundColor}}
		>
			<div className={classes.HoverInfo}
			style={{ backgroundColor: props.colors.hoverInfo, 
				color: props.colors.hoverInfoText }} >
				<div style={{borderRightColor: props.colors.hoverInfo}} ></div>
				{props.item.name}
			</div>
			{props.item.icon}
		</div>
	)
}

export default SideBarItem;
