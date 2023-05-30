import { IEvidenceType, IUserType } from './types';
import image from '../../assets/images/feed2.png';

export enum expertLevel {
    begineer = 'begineer',
    mobile_int = 'mobile_int',
    customer_experience_design = 'customer_experience_design',
    expert = 'expert',
    thought_leader = 'thought_leader'
}

export const experienceLevels = [
    { color: '#E75541', title: 'Begineer', shortForm: 'B' },
    { color: '#F6C70E', title: 'Mobile Int', shortForm: 'E' },
    { color: '#49B6FF', title: 'Customer Experience Design', shortForm: 'A' },
    { color: '#95C97A', title: 'Expert', shortForm: 'X' },
    { color: '#07AF22', title: 'Thought Leader', shortForm: 'B' }
];

export const criticalData: IEvidenceType[] = [
    { title: 'Strategic thinking', evidence: '' },
    { title: 'Analytical skills', evidence: '' },
    { title: 'Quantitative analysis', evidence: '' },
    { title: 'Problem-solving skills', evidence: '' }
];

export const persuasiveData: IEvidenceType[] = [
    { title: 'Speaking', evidence: '' },
    { title: 'Listening', evidence: '' },
    { title: 'Writing', evidence: '' },
    { title: 'Fluency in digital communication', evidence: '' },
    { title: 'Presenting', evidence: '' },
    { title: 'Personal branding', evidence: '' },
    { title: 'Body language', evidence: '' },
    { title: 'Emotional intelligence', evidence: '' }
];

export const personalData: IEvidenceType[] = [
    { title: 'Time management', evidence: '' },
    { title: 'Prioritization and Organization', evidence: '' },
    { title: 'Multitasking', evidence: '' }
];

export const manageabilityData: IEvidenceType[] = [
    { title: 'Taking direction', evidence: '' },
    { title: 'Listening', evidence: '' },
    { title: 'Implementation', evidence: '' }
];

export const leadershipData: IEvidenceType[] = [
    { title: 'Leading by example', evidence: '' },
    { title: 'Applying other behaviours to job deliverables', evidence: '' }
];

export const creativityData: IEvidenceType[] = [
    { title: 'General creativity', evidence: '' }
];

export const data: IUserType[] = [
    {
        image,
        name: 'Devon Lane',
        designation: 'Sales Manager',
        organization: 'Xtera Solutions',
        connections: 500,
        points: '550',
        days: '3',
        address: 'North Carolina, U.S.A.',
        skills: [
            { background: '#95C97A', title: 'Wireframing', shortForm: 'X' },
            { background: '#49B6FF', title: 'Figma', shortForm: 'A' }
        ],
        id: 1
    },
    {
        image,
        name: 'Aevon Lane',
        designation: 'Sales Manager',
        organization: 'Xtera Solutions',
        connections: 300,
        points: '550',
        address: 'North Carolina, U.S.A.',
        id: 2,
        days: '3',
        skills: [
            { background: '#808080', title: 'Restful API', shortForm: 'B' },
            { background: '#07AF22', title: 'Django', shortForm: 'T' }
        ]
    },
    {
        image,
        name: 'Devon Lane',
        designation: 'Sales Manager',
        organization: 'Xtera Solutions',
        address: 'North Carolina, U.S.A.',
        id: 3,
        connections: 200,
        days: '3',
        skills: [
            { background: '#F6C70E', title: 'HTML', shortForm: 'E' },
            { background: '#E75541', title: 'Figma', shortForm: 'B' }
        ]
    }
];

export const myConnections: IUserType[] = [
    {
        image,
        name: 'Annette Black',
        designation: 'Sales Manager',
        organization: 'Xtera Solutions',
        points: '550',
        days: '3',
        skills: [
            { background: '#95C97A', title: 'Wireframing', shortForm: 'X' },
            { background: '#49B6FF', title: 'Figma', shortForm: 'A' }
        ]
    },
    {
        image,
        name: 'Arlene McCoy',
        designation: 'Sales Manager',
        organization: 'Utilitech',
        points: '550',
        days: '3',
        skills: [
            { background: '#808080', title: 'Restful API', shortForm: 'B' },
            { background: '#07AF22', title: 'Django', shortForm: 'T' }
        ]
    },
    {
        image,
        name: 'Bessie Cooper',
        designation: 'Sales Manager',
        organization: 'Xtera Solutions',
        days: '3',
        skills: [
            { background: '#F6C70E', title: 'HTML', shortForm: 'E' },
            { background: '#E75541', title: 'Figma', shortForm: 'B' }
        ]
    },
    {
        image,
        name: 'Cody Fisher',
        designation: 'Internet Security Assistant',
        organization: 'Bosch',
        points: '550',
        days: '3',
        skills: [
            { background: '#95C97A', title: 'Wireframing', shortForm: 'X' },
            { background: '#49B6FF', title: 'Figma', shortForm: 'A' }
        ]
    },
    {
        image,
        name: 'Darlene Robertson',
        designation: 'Sales Manager',
        organization: 'Utilitech',
        points: '550',
        days: '3',
        skills: [
            { background: '#808080', title: 'Restful API', shortForm: 'B' },
            { background: '#07AF22', title: 'Django', shortForm: 'T' }
        ]
    },
    {
        image,
        name: 'Esther Howard',
        designation: 'Sales Manager',
        organization: 'Xtera Solutions',
        days: '3',
        skills: [
            { background: '#F6C70E', title: 'HTML', shortForm: 'E' },
            { background: '#E75541', title: 'Figma', shortForm: 'B' }
        ]
    },
    {
        image,
        name: 'Annette Black',
        designation: 'Sales Manager',
        organization: 'Xtera Solutions',
        points: '550',
        days: '3',
        skills: [
            { background: '#95C97A', title: 'Wireframing', shortForm: 'X' },
            { background: '#49B6FF', title: 'Figma', shortForm: 'A' }
        ]
    },
    {
        image,
        name: 'Arlene McCoy',
        designation: 'Sales Manager',
        organization: 'Utilitech',
        points: '550',
        days: '3',
        skills: [
            { background: '#808080', title: 'Restful API', shortForm: 'B' },
            { background: '#07AF22', title: 'Django', shortForm: 'T' }
        ]
    },
    {
        image,
        name: 'Bessie Cooper',
        designation: 'Sales Manager',
        organization: 'Xtera Solutions',
        days: '3',
        skills: [
            { background: '#F6C70E', title: 'HTML', shortForm: 'E' },
            { background: '#E75541', title: 'Figma', shortForm: 'B' }
        ]
    },
    {
        image,
        name: 'Cody Fisher',
        designation: 'Internet Security Assistant',
        organization: 'Bosch',
        points: '550',
        days: '3',
        skills: [
            { background: '#95C97A', title: 'Wireframing', shortForm: 'X' },
            { background: '#49B6FF', title: 'Figma', shortForm: 'A' }
        ]
    },
    {
        image,
        name: 'Darlene Robertson',
        designation: 'Sales Manager',
        organization: 'Utilitech',
        points: '550',
        days: '3',
        skills: [
            { background: '#808080', title: 'Restful API', shortForm: 'B' },
            { background: '#07AF22', title: 'Django', shortForm: 'T' }
        ]
    },
    {
        image,
        name: 'Esther Howard',
        designation: 'Sales Manager',
        organization: 'Xtera Solutions',
        days: '3',
        skills: [
            { background: '#F6C70E', title: 'HTML', shortForm: 'E' },
            { background: '#E75541', title: 'Figma', shortForm: 'B' }
        ]
    }
];
