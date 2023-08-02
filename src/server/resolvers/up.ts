import 'reflect-metadata';

import { Query, Resolver } from 'type-graphql';

import { Up } from '../entities/up';

@Resolver(Up)
export class UpResolver {
	@Query(() => String)
	up(): string {
		return 'Do not go gentle into that good night!';
	}
}
