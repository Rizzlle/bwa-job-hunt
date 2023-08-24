export type categoryJobType = {
	id: string;
	name: string;
	totalJobs: number;
};

export type JobType = {
	id: string;
	image: string;
	jobType: string;
	name: string;
	type: string;
	location: string;
	desc: string;
	category: categoryJobType;
	needs: number;
	applicants: number;
	skills: string[];
};

export type categoryCompany = {
	id: string;
	name: string;
};

export type companySocmedType = {
	id: string;
	instagram: string;
	twitter: string;
	facebook: string;
	linkedin: string;
	youtube: string;
};

export type companyTeamType = {
	id: string;
	name: string;
	position: string;
	intagram: string;
	linkedin: string;
};

export type companyType = {
	id: string;
	image: string;
	name: string;
	totalJobs: number;
	website: string;
	location: string;
	employee: string;
	industry: string;
	dateFounded: Date;
	techStack: string[];
	description: string;
	sosmed: companySocmedType;
	teams: companyTeamType[];
};

export type optionType = {
	id: string;
	label: string;
};

export type filterFormType = {
	label: string;
	name: string;
	items: optionType[];
};
