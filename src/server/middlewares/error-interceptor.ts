import { MiddlewareFn } from 'type-graphql';

export const LoggerInterceptor: MiddlewareFn<any> = async (
	{ context },
	next,
) => {
	try {
		// eslint-disable-next-line no-console
		console.log('context', context.params);
		return await next();
	} catch (err) {
		// eslint-disable-next-line no-console
		console.log('err', JSON.stringify(err));
		throw err;
	}
};
