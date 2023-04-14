import { Typography, Box } from '@mui/material';
const ExperienceLevel = (props: any) => {
    return (
        <Box>
            <Typography
                sx={{
                    fontSize: '14px',
                    fontWeight: '600',
                    fontFamily: 'Open Sans',
                    color: '#FFFFFF',
                    background: props.background,
                    borderRadius: '6px',
                    padding: "4px 8px",
                    display: 'flex',
                    gap: '8px',
                    alignItems: 'center',
                }}
            >{props.title}<Typography
                sx={{
                    fontWeight: '700',
                    background: "rgba(5, 5, 5, 0.4)",
                    padding: '0px 4px',
                    lineHeight: '20px',
                    borderRadius: '4px'
                }}
            >{props.shortForm}</Typography>
            </Typography>
        </Box>
    )
}

export default ExperienceLevel;