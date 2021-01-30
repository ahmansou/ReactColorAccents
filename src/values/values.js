import { 
	AccountCircleOutlined, 
	GraphicEqOutlined, 
	HouseOutlined, 
	NotificationImportantOutlined, 
	PeopleOutline } from "@material-ui/icons"

export const accents = {
	light : {
		primary: '#FFFFFF',
		darker: '#f4f5f8',
		secondary: '#bdcadb',
		outlines: '#dbdbdb',
		textColor: 'black',
		textColorSecondary: '#6A737D',
		hoverInfo: '#000000',
		hoverInfoText: '#FFFFFF',
		// success: '',
	},
	dark : {
		primary: '#151E28',
		darker: '#000000',
		secondary: '#476385',
		outlines: '#000000',
		textColor: '#FFFFFF',
		textColorSecondary: '#6A737D',
		hoverInfo: '#4A5159',
		hoverInfoText: '#FFFFFF',
		// success: '',
	},
	accent1 : {
		primary: '#FFFFFF',
		darker: '#fbefef',
		secondary: '#B5838D',
		outlines: '#F3CECF',
		textColor: '#DE7C80',
		textColorSecondary: '#8B949E',
		hoverInfo: '#F3CECF',
		hoverInfoText: '#FFFFFF',
		// success: '',
	},
	accent2 : {
		primary: '#FFFFFF',
		darker: '#CAF0F8',
		secondary: '#0096C7',
		outlines: '#90E0EF',
		textColor: '#00B4D8',
		textColorSecondary: '#8B949E',
		hoverInfo: '#CAF0F8',
		hoverInfoText: '#0096C7',
		// success: '',
	},
}


export const menuItems = [
	{name: 'Home', icon: <HouseOutlined />},
	{name: 'Account', icon: <AccountCircleOutlined />},
	{name: 'Notification', icon: <NotificationImportantOutlined />},
	{name: 'another useless link', icon: <GraphicEqOutlined />},
	{name: 'Friends', icon: <PeopleOutline	 />},
]