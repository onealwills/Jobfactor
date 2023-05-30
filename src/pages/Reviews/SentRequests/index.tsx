import React from 'react';
import UserActions from '../components/UserActions';
import UserDetails from '../components/UserDetails';
import TableWrapper from '../components/TableWrapper';
import SectionHeader from '../../common/SectionHeader';
import ExperienceLevel from '../components/ExperienceLevel';
import {
    Box,
    Button,
    Grid,
    Paper,
    TableCell,
    TableRow,
    Typography
} from '@mui/material';
import DialogBox from '../components/DialogBox';
import PageHeader from '../../common/PageHeader';
import { ISkillsType } from '../types';
import { data } from '../constants';

const SentRequests = () => {
    const [showModal, setShowModal] = React.useState(false);
    const [page, setPage] = React.useState(0);
    const rowsPerPage = 8;

    const handleChangePage = (page: number) => {
        setPage(page - 1);
    };

    return (
        <>
            <PageHeader pageTitle={'Reviews'} hideAction={true} />
            <Paper sx={{ mt: '36px' }}>
                <Box sx={{ minHeight: '559px' }}>
                    <SectionHeader
                        header={'People you requested reviews from'}
                        subHeader={
                            'See all those you requested to have them review your profile'
                        }
                    />
                    <Grid container>
                        <TableWrapper
                            handleChangePage={handleChangePage}
                            rowsPerPage={rowsPerPage}
                            data={data}
                        >
                            {data
                                .slice(
                                    page * rowsPerPage,
                                    page * rowsPerPage + rowsPerPage
                                )
                                .map((user: any, index: number) => (
                                    <TableRow key={`user_${index}`}>
                                        <TableCell
                                            sx={{
                                                padding: '40px 32px',
                                                paddingBottom: '25px'
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'inset',
                                                    gap: '20px'
                                                }}
                                            >
                                                <UserDetails
                                                    user={user}
                                                    showActive={true}
                                                />
                                                <UserActions>
                                                    <Typography
                                                        variant="titleSmallRegular"
                                                        sx={{
                                                            color: '#808080',
                                                            mb: '15px'
                                                        }}
                                                    >
                                                        Sent {user.days} days
                                                        ago
                                                    </Typography>
                                                    <Button
                                                        sx={{
                                                            borderRadius: '8px',
                                                            padding:
                                                                '12px 16px',
                                                            border: '1px solid #05668D',
                                                            background:
                                                                '#05668D',
                                                            fontSize: '14px',
                                                            fontWeight: '600',
                                                            textTransform:
                                                                'capitalize',
                                                            boxShadow: 'none',
                                                            width: 'auto',
                                                            whiteSpace:
                                                                'nowrap',
                                                            color: '#FFFFFF',
                                                            textDecoration:
                                                                'none',
                                                            ':hover': {
                                                                color: '#FFFFFF',
                                                                textDecoration:
                                                                    'none',
                                                                background:
                                                                    '#05668D'
                                                            }
                                                        }}
                                                        onClick={() =>
                                                            setShowModal(true)
                                                        }
                                                    >
                                                        Resend request
                                                    </Button>
                                                    <Button
                                                        variant="outlined"
                                                        sx={{
                                                            borderRadius: '8px',
                                                            padding:
                                                                '12px 16px',
                                                            fontSize: '14px',
                                                            fontWeight: '600',
                                                            textTransform:
                                                                'capitalize',
                                                            boxShadow: 'none',
                                                            color: '#05668D',
                                                            width: 'auto',
                                                            ml: '35px'
                                                        }}
                                                    >
                                                        Withdraw request
                                                    </Button>
                                                </UserActions>
                                            </Box>
                                            {user?.skills.length > 0 ? (
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '8px',
                                                        ml: '77px',
                                                        mt: '12px'
                                                    }}
                                                >
                                                    {user?.skills?.map(
                                                        (
                                                            item: ISkillsType,
                                                            index: number
                                                        ) => (
                                                            <ExperienceLevel
                                                                background={
                                                                    item.background
                                                                }
                                                                shortForm={
                                                                    item.shortForm
                                                                }
                                                                title={
                                                                    item.title
                                                                }
                                                                key={`skill_${index}`}
                                                            />
                                                        )
                                                    )}
                                                    <Typography
                                                        component={'div'}
                                                        sx={{
                                                            ml: '4px',
                                                            width: '7px',
                                                            height: '7px',
                                                            borderRadius:
                                                                '100px',
                                                            background:
                                                                '#494949',
                                                            border: '2px solid #494949'
                                                        }}
                                                    />{' '}
                                                    <Typography
                                                        component={'div'}
                                                        sx={{
                                                            ml: '4px',
                                                            width: '7px',
                                                            height: '7px',
                                                            borderRadius:
                                                                '100px',
                                                            background:
                                                                '#494949',
                                                            border: '2px solid #494949'
                                                        }}
                                                    />
                                                </Box>
                                            ) : null}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            <TableRow>
                                <TableCell
                                    sx={{
                                        padding: '50px'
                                    }}
                                ></TableCell>
                            </TableRow>
                        </TableWrapper>
                    </Grid>
                </Box>
            </Paper>
            <DialogBox
                open={showModal}
                handleClose={() => setShowModal(false)}
            />
        </>
    );
};

export default SentRequests;
