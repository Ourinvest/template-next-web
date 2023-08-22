'use client';

import { useEffect } from 'react';

import { getExchangeList } from '@/app/redux/features/exchange/exchange-thunk';
import { useAsyncDispatch } from '@/app/redux/store';
const Preloader = (): undefined => {
	const dispatch = useAsyncDispatch();

	useEffect(() => {
		void dispatch(getExchangeList(''));
	}, []);

	return undefined;
};

export default Preloader;
