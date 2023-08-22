export interface ExchangeResponse {
	getExchanges: IExchange[];
}

export interface IExchange {
	id: string;
	legacyId: string;
	additionalInformation: string;
	category: string;
	correspondentIdentity: string;
	createdAt: string;
	foreignAvailableValue: number;
	foreignCurrencyValue: number;
	foreignSettlementDate: string;
	isDeleted: boolean;
	realCurrencyValue: number;
	realSettlementDate: string;
	spot: number;
	spread: number;
	spotSpread: number;
	status: string;
	system: string;
}
