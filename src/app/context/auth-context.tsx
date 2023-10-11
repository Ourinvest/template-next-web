/* eslint-disable indent */
'use client';

import type { Dispatch } from 'react';
import React, { createContext, useReducer } from 'react';

type StateType = {
	loggedIn: boolean;
};

type ActionType = {
	type: string;
};

const initialState: StateType = {
	loggedIn: false,
};

const reducer = (state: StateType, action: ActionType): StateType => {
	switch (action.type) {
		case 'LOGIN': {
			return { ...state, loggedIn: true };
		}
		case 'LOGOUT': {
			return { ...state, loggedIn: false };
		}
		default: {
			return state;
		}
	}
};

export const CounterContext = createContext<{
	state: StateType;
	dispatch: Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => {} });

export const CounterContextProvider = ({
	children,
}: {
	children: React.ReactNode;
}): React.JSX.Element => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<CounterContext.Provider value={{ state, dispatch }}>
			{children}
		</CounterContext.Provider>
	);
};
