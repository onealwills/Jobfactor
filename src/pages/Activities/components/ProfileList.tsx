import React from 'react'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

interface propTypes {
    profileImage: string,
    fullName: string,
    jobTitle: string,
    score: number
}
const ProfileList = ({ data }: { data: propTypes }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                mb: '18px'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: "15px"
                }}
            >
                <Avatar
                    sx={{
                        width: '56px',
                        height: '56px'
                    }}
                    src={data.profileImage}
                />
                <Box>
                    <Typography
                        sx={{
                            fontFamily: 'Open Sans',
                            fontWeight: '600',
                            letterSpacing: '0.005em',
                            color: '#494949'
                        }}
                    >
                        {data.fullName}
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: "15px"
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: 'Open Sans',
                                fontWeight: '400',
                                fontSize: '14px',
                                letterSpacing: '0.001em',
                                lineHeight: '20px',
                                color: '#808080'
                            }}
                        >
                            {data.jobTitle}
                        </Typography>
                        <Box
                            sx={{
                                padding: '2px 8px',
                                background: '#49B6FF',
                                borderRadius: '4px',
                                fontFamily: 'Open Sans',
                                fontWeight: '600',
                                fontSize: '14px',
                                color: '#FFFFFF'
                            }}
                        >
                            {data.score}
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Button
                sx={{
                    padding: "11px 17px",
                    background: '#F2F2F2',
                    borderRadius: '8px',
                    fontFamily: 'Open Sans',
                    fontWeight: '600',
                    fontSize: '14px',
                    letterSpacing: '0.0035em',
                    lineHeight: '20px',
                    color: '#05668D',
                    textTransform: 'capitalize'
                }}
            >
                Connect
            </Button>
        </Box>
    )
}

export default ProfileList