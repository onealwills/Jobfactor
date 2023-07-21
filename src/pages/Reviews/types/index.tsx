export interface IUserType {
    image: string;
    name: string;
    designation: string;
    organization: string;
    points?: string;
    days: string;
    address?: string;
    connections?: number;
    skills: any[];
    id?: number;
}

export interface ISkillsType {
    background: string;
    title: string;
    shortForm: string;
}

export interface IRoleType{
    background: string;
    title: string;
    shortForm: string;
}
export interface IEvidenceType {
    title: string;
    evidence: string;
}

export interface IExperienceLevelTypes {
    background: string;
    title: string;
    shortForm: string;
    color?: string;
}


export interface ICompanyType{
    id?:number;
    image: string;
    title: string;
    type: string;
    point: string;
    role: any[];
}
