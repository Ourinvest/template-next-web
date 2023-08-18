'use client';

import { Button } from 'goldends';

import type { ITodo } from '@/interfaces/todo';

const SimpleCard: React.FC<ITodo> = ({ title, completed, id }: ITodo) => {
	return (
		<article
			className={`flex w-3/4  items-center justify-between gap-3 rounded-md border-2 border-solid p-2 ${
				completed ? 'bg-neutral8' : ''
			}`}
		>
			<p className={`font-body font-bold ${completed ? 'text-neutral5' : ''}`}>
				{id}
			</p>
			<h4 className={`w-8/12 font-body ${completed ? 'text-neutral5' : ''}`}>
				{title}
			</h4>
			<Button
				size="small"
				text={completed ? 'Undo' : 'Done'}
				buttonType={completed ? 'secondary' : 'primary'}
			/>
		</article>
	);
};

export default SimpleCard;
