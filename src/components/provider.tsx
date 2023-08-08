'use client';

import '@/styles/global.css';

import { ThemeSelectorProvider, ToastProvider } from 'goldends';

const Provider: React.FC<{ children: React.ReactNode }> = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return (
		<ThemeSelectorProvider>
			<ToastProvider>
				<div>{children}</div>
			</ToastProvider>
		</ThemeSelectorProvider>
	);
};

export default Provider;
