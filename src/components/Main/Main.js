import { accents } from '../../values/values';
import classes from './Main.module.scss';

import { Context } from '../../hooks/Store';
import React, {useEffect, useContext} from 'react';

const Color = (props) => {
	const shade = props.accent;
	return (
			<div className={classes.Color} >
				<p>{props.text}</p>
				<div style={{backgroundColor: shade}} ></div>
			</div>
	)
}

const Accent = (props) => {
	const accent = props.accent;

	const accentHandler = () => {
		localStorage.setItem('colorAccent', JSON.stringify({
			accent: accent
		}));
		// props.setColors(accent);
		props.dispatch({type: 'SET_ACCENT', payload: accent});
	}

	return (
		<div className={classes.Accent} >
			{/* <button onClick={accentHandler} >Set color</button> */}
			<h3>{accent.name}</h3>
			<Color text='primary' accent={accent.primary} />
			<Color text='primary' accent={accent.primary} />
			<Color text='darker' accent={accent.darker} />
			<Color text='secondary' accent={accent.secondary} />
			<Color text='outlines' accent={accent.outlines} />
			<Color text='textColor' accent={accent.textColor} />
			<Color text='textColorSec' accent={accent.textColorSecondary} />
			<Color text='hoverInfo' accent={accent.hoverInfo} />
			<Color text='hoverInfoText' accent={accent.hoverInfoText} />
		</div>
	)
}

const Main = (props) => {

	const [state, dispatch] = useContext(Context);

	useEffect(() => {
		let token = JSON.parse(localStorage.getItem('colorAccent'));
		if (token)
			dispatch({type: 'SET_ACCENT', payload: token.accent});
		else
			dispatch({type: 'SET_ACCENT', payload: accents.light});
		
	}, []);

	return (
		<div className={classes.Main} 
			style={{
				backgroundColor: state.accent.primary,
				color: state.accent.textColor
			}}
		>
			{state.accent.primary}
			<Accent dispatch={dispatch}  accent={state.accent} />
			<Accent dispatch={dispatch}  accent={accents.light} />
			<Accent dispatch={dispatch}  accent={accents.dark} />
			<Accent dispatch={dispatch}  accent={accents.accent1} />
			<Accent dispatch={dispatch}  accent={accents.accent2	} />
		</div>
	)
}

export default Main;
