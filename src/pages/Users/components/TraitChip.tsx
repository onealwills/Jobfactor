import { Chip, Grid, Typography } from "@mui/material"
import { Box } from "@mui/system";

type Props = {
    type: 'leader' | 'expert' | 'beginner' | 'advanced' | 'experienced'
}

const traitChipLabels: Record<Props['type'], string> = {
    'leader': 'Thought leader',
    'advanced': 'Advanced',
    'experienced': 'Experienced',
    'expert': 'Expert',
    'beginner': 'Beginner',
}

const traitChipColors: Record<Props['type'], string> = {
    'leader': '#07AF22',
    'advanced': '#49B6FF',
    'experienced': '#F6C70E',
    'expert': '#95C97A',
    'beginner': '#E75541',
}

const traitChipRankings: Record<Props['type'], string> = {
    'leader': 'L',
    'advanced': 'A',
    'experienced': 'E',
    'expert': 'X',
    'beginner': 'B',
}

const TraitChip = ({ type }: Props) => {

    const label = traitChipLabels[type];
    const color = traitChipColors[type];
    const ranking = traitChipRankings[type];

    return (<Chip
        label={<Grid container wrap="nowrap" alignItems="center" gap={1}>
            <Typography 
                component="span"
                color="#FFFFFF"
                fontFamily="open sans"
                fontSize={14}
                fontWeight={600}
                lineHeight="1"
            >
                { label }
            </Typography>
            <Grid
                container
                bgcolor="#05050566"
                width="16px"
                height="17px"
                alignItems="center"
                justifyContent="center"
                borderRadius={1}
            >
                <Typography 
                    component="span"
                    color="#FFFFFF"
                    fontFamily="open sans"
                    fontSize={14}
                    fontWeight={700}
                    lineHeight="1"
                >
                    { ranking }
                </Typography>
            </Grid>
        </Grid>}
        sx={{
            backgroundColor: color,
            color: "#FFFFFF",
            fontFamily: "open sans",
            fontWeight: 500,
            fontSize: "14px",
            borderRadius: "4px",
            letterSpacing: "0.001em",
        }}
    />)
}

export default TraitChip