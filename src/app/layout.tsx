import { Inter } from 'next/font/google';

import Providers from '@/components/providers';

const inter = Inter({ subsets: ['latin'] });

const RootLayout: React.FC<{ children: React.ReactNode }> = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
};

export default RootLayout;
