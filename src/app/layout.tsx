'use client';

import '@/styles/global.css';

import { ThemeSelectorProvider, ToastProvider } from 'goldends';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const RootLayout: React.FC<{ children: React.ReactNode }> = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ThemeSelectorProvider>
					<ToastProvider>
						<div>{children}</div>
					</ToastProvider>
				</ThemeSelectorProvider>
			</body>
		</html>
	);
};

export default RootLayout;
