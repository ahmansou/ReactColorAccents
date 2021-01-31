import React, {createContext, useReducer} from "react";
import Reducer from './Reducer'
import { accents } from '../values/values';


const initialState = {
	accent: accents.light,
	error: null
};

const Store = ({children}) => {
	const [state, dispatch] = useReducer(Reducer, initialState);
	return (
		<Context.Provider value={[state, dispatch]}>
			{children}
		</Context.Provider>
	)
};

export const Context = createContext(initialState);
export default Store;