import { useContext, useState } from 'react';
import classes from './SideBarItem.module.scss';
import { accents } from '../../../values/values';
import { Context } from '../../../hooks/Store';

export const ColorSetters = (props) => {
	const [state, dispatch] = useContext(Context);
	const [backgroundColor, setBackgroundColor] = useState(undefined);
	const accent = props.accent;

	const accentHandler = () => {
		localStorage.setItem('colorAccent', JSON.stringify({
			accent: accent
		}));
		dispatch({type: 'SET_ACCENT', payload: accent});
	}

	return (
		<div className={[classes.SideBarItem, classes.ColorSetters].join(' ')} 
		onMouseEnter={() => setBackgroundColor(state.accent.darker)}
		onMouseLeave={() => setBackgroundColor(undefined)}
		style={{
			backgroundColor: backgroundColor, 
			color: props.accent.textColor}}
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
	
	const [backgroundColor, setBackgroundColor] = useState(undefined);
	const [state, dispatch] = useContext(Context);


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
			onMouseEnter={() => setBackgroundColor(state.accent.darker)}
			onMouseLeave={() => setBackgroundColor(undefined)}
			onClick={props.item.setDarkMode ? accentHandler : null}
			style={{
				backgroundColor: backgroundColor,
				color: state.accent.textColor}} >
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
