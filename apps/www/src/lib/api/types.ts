export type ApiUser = {
	id: string;
	email: string;
	name: string;
};

export type ApiRegistration = {
	id: string;
	email: string;
	track: string;
	dietary?: string | null;
};

export type ApiTeam = {
	id: string;
	name: string;
	member_count: number;
};

export type ApiSponsor = {
	id: string;
	name: string;
	tier: number;
	logo_url?: string | null;
};

export type ApiEnvelope<T> = {
	ok: boolean;
	data?: T;
	error?: string;
	code?: string;
};
