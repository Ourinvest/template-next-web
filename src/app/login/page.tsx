import type { ChangeEvent } from 'react';
import { useState } from 'react';

import { useAuth } from '../context/auth-context';

export const Login = (): JSX.Element => {
	const { login } = useAuth();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = (): void => {
		// Simulação de autenticação bem-sucedida com um token
		const fakeToken = 'fake.jwt.token';
		login(fakeToken);
	};

	return (
		<div>
			<h1>Login</h1>
			<input
				type="text"
				placeholder="Username"
				value={username}
				onChange={(event: ChangeEvent<HTMLInputElement>): void =>
					setUsername(event.target.value)
				}
			/>
			<input
				type="password"
				placeholder="Password"
				value={password}
				onChange={(event: ChangeEvent<HTMLInputElement>): void =>
					setPassword(event.target.value)
				}
			/>
			<button onClick={handleLogin}>Login</button>
		</div>
	);
};
