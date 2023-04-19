import { Chip, Grid, Typography } from "@mui/material"
import { Box } from "@mui/system";
import { Ranking } from "../types/Ranking";

interface Props {
    type: Ranking
}

const traitChipLabels: Record<Ranking, string> = {
    [Ranking.Leader]: 'Thought leader',
    [Ranking.Advanced]: 'Advanced',
    [Ranking.Experienced]: 'Experienced',
    [Ranking.Expert]: 'Expert',
    [Ranking.Beginner]: 'Beginner',
}

const traitChipColors: Record<Ranking, string> = {
    [Ranking.Leader]: '#07AF22',
    [Ranking.Advanced]: '#49B6FF',
    [Ranking.Experienced]: '#F6C70E',
    [Ranking.Expert]: '#95C97A',
    [Ranking.Beginner]: '#E75541',
}

const traitChipRankings: Record<Ranking, string> = {
    [Ranking.Leader]: 'L',
    [Ranking.Advanced]: 'A',
    [Ranking.Experienced]: 'E',
    [Ranking.Expert]: 'X',
    [Ranking.Beginner]: 'B',
}

const TraitChip = ({ type }: Props) => {

    const label = traitChipLabels[type];
    const color = traitChipColors[type];
    const ranking = traitChipRankings[type];

    return (<Chip
        size="small"
        label={<Grid container wrap="nowrap" alignItems="center" gap={1}>
            <Typography 
                component="span"
                color="#FFFFFF"
                fontFamily="open sans"
                fontSize={12}
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
            height: "24px",
            borderRadius: "4px",
            letterSpacing: "0.001em",
        }}
    />)
}

export default TraitChip