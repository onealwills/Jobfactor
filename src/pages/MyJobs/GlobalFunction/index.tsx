export const getCompetencyColor = (competencyLevel: string) => {
    let color = '';
    switch (competencyLevel) {
        case 'Beginner': {
            color = '#F55536'
            break;
        }
        case 'Experience': {
            color = '#49B6FF'
            break;
        }
        case 'Advanced': {
            color = '#0D00A4'
            break;
        }
        case 'Expert': {
            color = '#00BD9D'
            break;
        }
        case 'Thought Leader': {
            color = '#15796E'
            break;
        }
        default:
            color = 'black'
            break;
    }
    return color;
}