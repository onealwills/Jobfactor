import { Box, SxProps, Theme, Typography } from '@mui/material'
import { getCompetencyColor, skillLevel } from '../../../../utils/Helper/helper';
interface IItemTypes {
    name: string;
    competencyLevel: number;
}
interface IPropTypes {
    item: IItemTypes,
    coloredBg?: boolean,
    titleStyle?: SxProps<Theme>,
    shortFormStyle?: SxProps<Theme>,
}
const ExperienceChip = ({ item, coloredBg = true, titleStyle, shortFormStyle}: IPropTypes) => {
    return (
        <Box>
            <Typography
                variant='titleSmallSemiBold'
                sx={{
                    color: '#FFFFFF',
                    background: coloredBg ? getCompetencyColor(item.competencyLevel) : '#808080',
                    borderRadius: '6px',
                    padding: '4px 8px',
                    display: 'flex',
                    gap: '8px',
                    alignItems: 'center',
                    ...titleStyle
                }}
            >
                {item.name}
                <Typography
                    variant='labelMediumSemiBold'
                    sx={{
                        background: coloredBg ? 'rgba(5, 5, 5, 0.4)' : getCompetencyColor(item.competencyLevel),
                        padding: '0px 4px',
                        borderRadius: '4px',
                        ...shortFormStyle
                    }}
                >
                    {skillLevel.filter(x => x.level === item.competencyLevel)[0].shortForm}
                </Typography>
            </Typography>
        </Box >
    )
}

export default ExperienceChip