import Typography from '@mui/material/Typography';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Alert from '../../../assets/icons/Alert';
import UserActions from '../components/UserActions';
import UserDetails from '../components/UserDetails';
import TableWrapper from '../components/TableWrapper';
import SectionHeader from '../../common/SectionHeader';
import ExperienceLevel from '../components/ExperienceLevel';
import React from 'react';
import Button from '@mui/material/Button';
import Delete from '../../../assets/icons/Delete';
import DialogBox from '../components/DialogBox';
import PageHeader from '../../common/PageHeader';
import Paper from '@mui/material/Paper';
import SearchBox from '../components/SearchBox';
import { ISkillsType } from '../types';
import { data, myConnections } from '../constants';

const SuggestedReviews = () => {
    const [replaceAll, setReplaceAll] = React.useState<boolean>(false);
    const [users, setUsers] = React.useState<Array<Object>>([]);
    const [selectedConnections, setSelectedConnections] = React.useState<
        Array<Object>
    >([]);
    const [showSearch, setShowSearch] = React.useState(false);
    const [showModal, setShowModal] = React.useState(false);
    const [selected, setSelected] = React.useState(-1);
    const [page, setPage] = React.useState(0);
    const rowsPerPage = 8;

    const handleChangePage = (page: number) => {
        setPage(page - 1);
    };

    React.useEffect(() => {
        setUsers(data);
    }, []);
    return (
        <>
            <PageHeader
                pageTitle={'Reviews'}
                actions={
                    <>
                        <Button
                            variant="outlined"
                            sx={{
                                p: '14px 16px',
                                background: '#FAFAFA',
                                border: '1px solid #05668D',
                                borderRadius: '8px',
                                fontFamily: 'Open Sans',
                                fontWeight: 600,
                                fontSize: '14px',
                                lineHeight: '16px',
                                letterSpacing: '0.005em',
                                color: '#05668D',
                                width: 'auto',
                                minWidth: '100px'
                            }}
                            onClick={() => setReplaceAll(true)}
                        >
                            Replace All
                        </Button>
                        <Button
                            variant="contained"
                            sx={{
                                p: '14px 24px',
                                background: '#05668D',
                                border: '1px solid #05668D',
                                borderRadius: '8px',
                                fontFamily: 'Open Sans',
                                fontWeight: 600,
                                fontSize: '14px',
                                lineHeight: '16px',
                                letterSpacing: '0.005em',
                                color: '#FFFFFF',
                                width: 'auto',
                                minWidth: '157px'
                            }}
                            onClick={() => setShowModal(true)}
                        >
                            Request Review
                        </Button>
                    </>
                }
            />

            {replaceAll ? (
                <>
                    <Paper sx={{ mt: '36px' }}>
                        <Box>
                            <SectionHeader
                                header={'Selected connections'}
                                subHeader={
                                    'You have a maximum of five reviewers'
                                }
                            />
                            <Grid container>
                                <TableWrapper
                                    handleChangePage={handleChangePage}
                                    rowsPerPage={rowsPerPage}
                                    data={selectedConnections}
                                >
                                    {selectedConnections
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
                                                        />
                                                        <UserActions>
                                                            <Button
                                                                variant="outlined"
                                                                sx={{
                                                                    borderRadius:
                                                                        '8px',
                                                                    padding:
                                                                        '12px 16px',
                                                                    fontSize:
                                                                        '14px',
                                                                    fontWeight:
                                                                        '600',
                                                                    textTransform:
                                                                        'capitalize',
                                                                    boxShadow:
                                                                        'none',
                                                                    color: '#05668D',
                                                                    width: 'auto',
                                                                    ml: '35px'
                                                                }}
                                                                onClick={() => {
                                                                    setShowSearch(
                                                                        true
                                                                    );
                                                                    setSelected(
                                                                        index
                                                                    );
                                                                }}
                                                            >
                                                                Replace
                                                            </Button>
                                                            <Button
                                                                sx={{
                                                                    borderRadius:
                                                                        '8px',
                                                                    padding:
                                                                        '12px 16px',
                                                                    border: '1px solid #F2F2F2',
                                                                    background:
                                                                        '#F2F2F2',
                                                                    fontSize:
                                                                        '14px',
                                                                    fontWeight:
                                                                        '600',
                                                                    textTransform:
                                                                        'capitalize',
                                                                    boxShadow:
                                                                        'none',
                                                                    width: 'auto',
                                                                    whiteSpace:
                                                                        'nowrap',
                                                                    color: '#05668D',
                                                                    textDecoration:
                                                                        'none',
                                                                    ':hover': {
                                                                        color: '#05668D',
                                                                        textDecoration:
                                                                            'none',
                                                                        background:
                                                                            '#F2F2F2'
                                                                    }
                                                                }}
                                                                endIcon={
                                                                    <Delete color="#F68481" />
                                                                }
                                                                onClick={() => {
                                                                    setSelectedConnections(
                                                                        selectedConnections.filter(
                                                                            (
                                                                                x
                                                                            ) =>
                                                                                x !==
                                                                                user
                                                                        )
                                                                    );
                                                                }}
                                                            >
                                                                Remove
                                                            </Button>
                                                        </UserActions>
                                                    </Box>
                                                    {user?.skills.length > 0 ? (
                                                        <Box
                                                            sx={{
                                                                display: 'flex',
                                                                alignItems:
                                                                    'center',
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
                                                                component={
                                                                    'div'
                                                                }
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
                                                                component={
                                                                    'div'
                                                                }
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
                                </TableWrapper>
                            </Grid>
                        </Box>
                    </Paper>
                    <Paper sx={{ mt: '36px' }}>
                        <Box>
                            <SectionHeader
                                header={
                                    'Request a review from your connections'
                                }
                                subHeader={
                                    'Search to add 5 connections for reviews'
                                }
                            />
                            <Grid container>
                                <TableWrapper
                                    handleChangePage={handleChangePage}
                                    rowsPerPage={rowsPerPage}
                                    data={myConnections}
                                >
                                    {myConnections
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
                                                        />
                                                        <UserActions>
                                                            <Button
                                                                sx={{
                                                                    borderRadius:
                                                                        '8px',
                                                                    padding:
                                                                        '12px 16px',
                                                                    border: '1px solid #05668D',
                                                                    background:
                                                                        '#05668D',
                                                                    fontSize:
                                                                        '14px',
                                                                    fontWeight:
                                                                        '600',
                                                                    textTransform:
                                                                        'capitalize',
                                                                    boxShadow:
                                                                        'none',
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
                                                                    selectedConnections.length <
                                                                    5
                                                                        ? setSelectedConnections(
                                                                              [
                                                                                  ...selectedConnections,
                                                                                  user
                                                                              ]
                                                                          )
                                                                        : {}
                                                                }
                                                            >
                                                                Add
                                                            </Button>
                                                        </UserActions>
                                                    </Box>
                                                    {user?.skills.length > 0 ? (
                                                        <Box
                                                            sx={{
                                                                display: 'flex',
                                                                alignItems:
                                                                    'center',
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
                                                                component={
                                                                    'div'
                                                                }
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
                                                                component={
                                                                    'div'
                                                                }
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
                                </TableWrapper>
                            </Grid>
                        </Box>
                    </Paper>
                </>
            ) : (
                <Paper sx={{ mt: '36px' }}>
                    <Box sx={{ minHeight: '559px' }}>
                        {data.length > 0 ? (
                            <>
                                <SectionHeader
                                    header={
                                        'You can replace suggested connections with connections of your choice'
                                    }
                                    subHeader={
                                        'You have a maximum of five reviewers'
                                    }
                                />
                                <Grid container>
                                    <TableWrapper
                                        handleChangePage={handleChangePage}
                                        rowsPerPage={rowsPerPage}
                                        data={data}
                                    >
                                        {users
                                            .slice(
                                                page * rowsPerPage,
                                                page * rowsPerPage + rowsPerPage
                                            )
                                            .map((user: any, index: number) => (
                                                <TableRow key={`user_${index}`}>
                                                    <TableCell
                                                        sx={{
                                                            padding:
                                                                '40px 32px',
                                                            paddingBottom:
                                                                '25px'
                                                        }}
                                                    >
                                                        <Box
                                                            sx={{
                                                                display: 'flex',
                                                                alignItems:
                                                                    'inset',
                                                                gap: '20px'
                                                            }}
                                                        >
                                                            <UserDetails
                                                                user={user}
                                                            />
                                                            <UserActions>
                                                                <Button
                                                                    variant="outlined"
                                                                    sx={{
                                                                        borderRadius:
                                                                            '8px',
                                                                        padding:
                                                                            '12px 16px',
                                                                        fontSize:
                                                                            '14px',
                                                                        fontWeight:
                                                                            '600',
                                                                        textTransform:
                                                                            'capitalize',
                                                                        boxShadow:
                                                                            'none',
                                                                        color: '#05668D',
                                                                        width: 'auto',
                                                                        ml: '35px'
                                                                    }}
                                                                    onClick={() => {
                                                                        setShowSearch(
                                                                            true
                                                                        );
                                                                        setSelected(
                                                                            index
                                                                        );
                                                                    }}
                                                                >
                                                                    Replace
                                                                </Button>
                                                                <Button
                                                                    sx={{
                                                                        borderRadius:
                                                                            '8px',
                                                                        padding:
                                                                            '12px 16px',
                                                                        border: '1px solid #F2F2F2',
                                                                        background:
                                                                            '#F2F2F2',
                                                                        fontSize:
                                                                            '14px',
                                                                        fontWeight:
                                                                            '600',
                                                                        textTransform:
                                                                            'capitalize',
                                                                        boxShadow:
                                                                            'none',
                                                                        width: 'auto',
                                                                        whiteSpace:
                                                                            'nowrap',
                                                                        color: '#05668D',
                                                                        textDecoration:
                                                                            'none',
                                                                        ':hover':
                                                                            {
                                                                                color: '#05668D',
                                                                                textDecoration:
                                                                                    'none',
                                                                                background:
                                                                                    '#F2F2F2'
                                                                            }
                                                                    }}
                                                                    endIcon={
                                                                        <Delete color="#F68481" />
                                                                    }
                                                                >
                                                                    Remove
                                                                </Button>
                                                            </UserActions>
                                                        </Box>
                                                        {user?.skills.length >
                                                        0 ? (
                                                            <Box
                                                                sx={{
                                                                    display:
                                                                        'flex',
                                                                    alignItems:
                                                                        'center',
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
                                                                    component={
                                                                        'div'
                                                                    }
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
                                                                    component={
                                                                        'div'
                                                                    }
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
                            </>
                        ) : (
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    pt: '26px',
                                    pl: '42px'
                                }}
                            >
                                <Alert />
                                <Typography
                                    variant="titleSmallRegular"
                                    sx={{
                                        letterSpacing: '0.0035em',
                                        color: '#808080'
                                    }}
                                >
                                    You do not have any suggestion at the
                                    moment. You only get suggestions when you
                                    post an achievement.
                                </Typography>
                            </Box>
                        )}
                    </Box>
                </Paper>
            )}
            <SearchBox
                handleClose={() => setShowSearch(false)}
                handleOnAddClick={(user) => {
                    let temp = JSON.parse(
                        JSON.stringify(replaceAll ? selectedConnections : users)
                    );
                    temp[selected] = user;
                    if (replaceAll) {
                        setSelectedConnections(temp);
                    } else {
                        setUsers(temp);
                    }
                    setSelected(-1);
                    setShowSearch(false);
                }}
                open={showSearch}
            />
            <DialogBox
                open={showModal}
                handleClose={() => setShowModal(false)}
            />
        </>
    );
};

export default SuggestedReviews;
