export interface ISelectedSkillType {
    name: string;
    id: number;
    competencyLevel: number
}

export interface ISkillType {
    id: string,
    name: string,
    type: {
        id: string,
        name: string
    }
}