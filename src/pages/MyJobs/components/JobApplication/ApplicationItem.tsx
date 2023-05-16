import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { JobApplicationItem } from '../../types/JobApplicationItem';
import ChipList from '../Chips/ChipList';
import JobBookmarkIcon from '../../../../assets/icons/JobBookmarkIcon';
import TurnedInIcon from '@mui/icons-material/TurnedIn';

const ApplicationItem = (props: { ApplcantInfo: JobApplicationItem }) => {
    const { ApplcantInfo } = props;

    return (
        <Box
            sx={{
                backgroundColor: '#FFFFFF'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    justifyContent: 'space-between',
                    borderBottom: '1px solid #CCC',
                    paddingBottom: '20px'
                }}
            >
                <Box sx={{ width: 70, textAlign: 'center' }}>
                    <img
                        src={ApplcantInfo?.Profile}
                        alt="userimage"
                        style={{
                            width: 70,
                            height: 70,
                            objectFit: 'cover',
                            borderRadius: 100,
                            overflow: 'hidden'
                        }}
                    />
                </Box>
                <Box sx={{ width: '66%' }}>
                    <Typography
                        sx={{
                            fontSize: '16px',
                            color: '#494949',
                            fontWeight: '600'
                        }}
                    >
                        {ApplcantInfo?.Applicantname}
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            gap: '15px',
                            alignItems: 'center'
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: '14px',
                                color: '#808080',
                                fontWeight: '400',
                                marginTop: '4px'
                            }}
                        >
                            {ApplcantInfo?.Jobtype}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: '30px',
                                color: '##494949',
                                fontWeight: '700',
                                lineHeight: '20px',
                                marginTop: '-10px'
                            }}
                        >
                            {'.'}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: '14px',
                                color: '#808080',
                                fontWeight: '400',
                                marginTop: '4px'
                            }}
                        >
                            {ApplcantInfo?.Companyname}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: '30px',
                                color: '##494949',
                                fontWeight: '700',
                                lineHeight: '20px',
                                marginTop: '-10px'
                            }}
                        >
                            {'.'}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: '14px',
                                color: '#fff',
                                fontWeight: '400',
                                marginTop: '4px',
                                backgroundColor: '#49B6FF',
                                padding: '5px 10px',
                                borderRadius: '5px'
                            }}
                        >
                            {ApplcantInfo?.ApplicationViews}
                        </Typography>
                    </Box>
                    <Box
                        sx={{ marginTop: '5px', display: 'flex', gap: '15px' }}
                    >
                        <ChipList
                            chipsData={ApplcantInfo?.keywords}
                            displayAll={true}
                        />
                        <Typography
                            sx={{
                                fontSize: '30px',
                                color: '##494949',
                                fontWeight: '700',
                                lineHeight: '30px'
                            }}
                        >
                            {'.'}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: '30px',
                                color: '##494949',
                                fontWeight: '700',
                                lineHeight: '30px'
                            }}
                        >
                            {'.'}
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        width: 400,
                        display: 'flex',
                        gap: '15px',
                        alignItems: 'center',
                        marginTop: '20px',
                        justifyContent: 'space-between'
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: '16px',
                            color: '#808080',
                            fontWeight: '600'
                        }}
                    >
                        {ApplcantInfo?.Postdate}
                    </Typography>
                    <Typography
                        sx={{
                            width: '30px',
                            height: '30px',
                            borderRadius: 100,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontSize: '15px',
                            color: '#fff',
                            fontWeight: '400',
                            backgroundColor: '#E75541'
                        }}
                    >
                        {ApplcantInfo?.jobfit}
                    </Typography>
                    <Button
                        variant="outlined"
                        onClick={() => {}}
                        sx={{
                            padding: '15px 20px',
                            width: 'fit-content',
                            minWidth: '200px'
                        }}
                    >
                        View application
                    </Button>
                    {!ApplcantInfo?.saved ? (
                        <JobBookmarkIcon />
                    ) : (
                        <Box
                            sx={{
                                backgroundColor: '#FCFBF8',
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '8px'
                            }}
                        >
                            <TurnedInIcon style={{ color: '#F6C70E' }} />
                        </Box>
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default ApplicationItem;
