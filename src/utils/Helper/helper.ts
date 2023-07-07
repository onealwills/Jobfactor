export const getCompetencyColor = (competencyLevel: number) => {
    let color = '';
    switch (competencyLevel) {
        case 1: {
            color = '#F55536';
            break;
        }
        case 2: {
            color = '#49B6FF';
            break;
        }
        case 3: {
            color = '#0D00A4';
            break;
        }
        case 4: {
            color = '#00BD9D';
            break;
        }
        case 5: {
            color = '#15796E';
            break;
        }
        default:
            color = 'black';
            break;
    }
    return color;
};

export const getJobType = (value: string) => {
    let jobType = '';
    switch (value) {
        case 'FULL_TIME': {
            jobType = 'Full Time';
            break;
        }
        case 'TEMPORARY': {
            jobType = 'Temporary';
            break;
        }
        case 'PERMANENT': {
            jobType = 'Permanent';
            break;
        }
        case 'NEW_GRAD': {
            jobType = 'New Grad';
            break;
        }
        case 'PART_TIME': {
            jobType = 'Part Time';
            break;
        }
        case 'CONTRACT': {
            jobType = 'Contract';
            break;
        }
        case 'INTERNSHIP': {
            jobType = 'Internship';
            break;
        }
        default:
            jobType = 'Full Time';
    }
    return jobType;
};

export const getSalaryRange = (salaryCurrency?: string, salaryRangeFrom?: number, salaryRangeTo?: number) => {
    if (salaryCurrency === null || salaryRangeFrom === null || salaryRangeTo === null) {
        return 'N/A'
    }
    return `${salaryCurrency} ${salaryRangeFrom} - ${salaryRangeFrom}`;
};

export const getWorkPlace = (value: string) => {
    let workPlace = '';
    switch (value) {
        case 'ONSITE': {
            workPlace = 'On-site';
            break;
        }
        case 'HYBRID': {
            workPlace = 'Hybrid';
            break;
        }
        case 'REMOTE': {
            workPlace = 'Remote';
            break;
        }
        default:
            workPlace = 'On-site';
    }
    return workPlace;
};

export const convertDateStringToMilli = (dateString: string) => {
    return Date.parse(dateString);
}

export const convertMilliToDateString = (dateNumber: number) => {
    const date = new Date(dateNumber);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
}

export const BEGINNER = { name: 'Beginner', level: 1 };
export const EXPERIENCED = { name: 'Experienced', level: 2 };
export const ADVANCE = { name: 'Advance', level: 3 };
export const EXPERT = { name: 'Expert', level: 4 };
export const THOUGHT_LEADER = { name: 'Thought Leader', level: 5 };

export const skillLevel = [BEGINNER, EXPERIENCED, ADVANCE, EXPERT, THOUGHT_LEADER];
export const workPlaces = ['ONSITE', 'HYBRID', 'REMOTE'];
export const jobTypes = ['FULL_TIME', 'TEMPORARY', 'PERMANENT', 'NEW_GRAD', 'PART_TIME', 'CONTRACT', 'INTERNSHIP'];