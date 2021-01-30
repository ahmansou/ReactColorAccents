import SideBar from '../SideBar/SideBar';
import classes from './Layout.module.scss';
import { accents } from '../../values/values';
import { useEffect, useState } from 'react';

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
		props.onClick(accent);
	}

	return (
		<div className={classes.Accent} >
			<button onClick={accentHandler} >Set color</button>
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

const Layout = (props) => {
	
	const [colors, setColors] = useState(accents.light);

	useEffect(() => {
		let token = JSON.parse(localStorage.getItem('colorAccent'));
		if (token)
			setColors(token.accent);
		else
			setColors(accents.light);
	}, []);

	return (
		<div className={classes.Layout}
			style={{
				backgroundColor: colors.primary,
				color: colors.textColor
			}} >
			<SideBar colors={colors} />
			<div className={classes.Main} >
				<Accent onClick={setColors} accent={accents.light} />
				<Accent onClick={setColors} accent={accents.dark} />
				<Accent onClick={setColors} accent={accents.accent1} />
				<Accent onClick={setColors} accent={accents.accent2	} />
			</div>
		</div>
	)
}

export default Layout;
