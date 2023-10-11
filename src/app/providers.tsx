'use client';
import type { ReactNode } from 'react';

import { AuthProvider } from './context/auth-context';

export const Providers = ({
	children,
}: {
	children: ReactNode;
}): JSX.Element => {
	return <AuthProvider>{children}</AuthProvider>;
};