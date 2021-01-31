import { useContext, useState } from 'react';
import classes from './SideBarItem.module.scss';
import { accents } from '../../../values/values';
import { Context } from '../../../hooks/Store';

export const ColorSetters = (props) => {
	const [state, dispatch] = useContext(Context);
	const [hovered, setHovered] = useState(false);
	const accent = props.accent;


	let itemStyle = {
		color: props.accent.textColor,
		backgroundColor: hovered ? state.accent.darker : null
	}


	const accentHandler = () => {
		localStorage.setItem('colorAccent', JSON.stringify({
			accent: accent
		}));
		dispatch({type: 'SET_ACCENT', payload: accent});
	}

	return (
		<div className={[classes.SideBarItem, classes.ColorSetters].join(' ')} 
		onMouseEnter={() => setHovered(true)}
		onMouseLeave={() => setHovered(false)}
		style={itemStyle}
		onClick={accentHandler} >
			<div className={classes.HoverInfo}
			style={{ backgroundColor: state.accent.hoverInfo, 
				color: state.accent.hoverInfoText }} >
				<div style={{borderRightColor: state.accent.hoverInfo}} ></div>
				{accent.name}
			</div>
			{props.children}
		</div>
	)
}

const SideBarItem = (props) => {
	const [state, dispatch] = useContext(Context);
	const [hovered, setHovered] = useState(false);

	let itemStyle = {
		color: state.accent.textColor,
		backgroundColor: hovered ? state.accent.darker : null
	}


	const accentHandler = () => {
		let accent;
		if (state.accent.name === 'dark')
			accent = accents.light;
		else
			accent = accents.dark;
		localStorage.setItem('colorAccent', JSON.stringify({
			accent: accent
		}));
		dispatch({type: 'SET_ACCENT', payload: accent});
	}

	return (
		
		<div className={classes.SideBarItem}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			style={itemStyle}
			onClick={props.item.setDarkMode ? accentHandler : null} >
			<div className={classes.HoverInfo}
			style={{ backgroundColor: state.accent.hoverInfo, 
				color: state.accent.hoverInfoText }} >
				<div style={{borderRightColor: state.accent.hoverInfo}} ></div>
				{props.item.name}
			</div>
			{props.item.icon}
		</div>
	)
}

export default SideBarItem;
