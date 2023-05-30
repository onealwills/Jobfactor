import { Backdrop } from '@mui/material';
import JobfactorAppBar from '../../../components/JobfactorAppBar';
import Typography from '@mui/material/Typography';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import image from '../../../assets/images/feed2.png';
import UserActions from '../components/UserActions';
import UserDetails from '../components/UserDetails';
import TableWrapper from '../components/TableWrapper';
import ExperienceLevel from '../components/ExperienceLevel';
import React from 'react';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { ISkillsType, IUserType } from '../types';

interface IPropTypes {
    handleClose: () => void;
    open: boolean;
    handleOnAddClick: (user: IUserType) => void;
}

const SearchBox = ({ open, handleClose, handleOnAddClick }: IPropTypes) => {
    const [filteredUsers, setFilteredUsers] = React.useState<Array<Object>>([]);
    const [users, setUsers] = React.useState<Array<Object>>([]);
    const [search, setSearch] = React.useState<string>('');

    const filterData = (value: string) => {
        let temp = JSON.parse(JSON.stringify(users));
        temp = temp.filter(
            (x: IUserType) =>
                x?.name?.toLowerCase()?.indexOf(value?.toLowerCase()) !== -1
        );
        if (value) {
            setFilteredUsers(temp);
        } else {
            setFilteredUsers([]);
        }
    };
    React.useEffect(() => {
        setUsers(data);
    }, []);

    return (
        <Backdrop
            open={open}
            // onClick={handleClose}
            sx={{ zIndex: '9999' }}
        >
            <JobfactorAppBar
                handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    filterData(e.target.value);
                    setSearch(e.target.value);
                }}
                value={search}
            />
            <Paper
                sx={{
                    position: 'absolute',
                    top: '82px',
                    width: '75%',
                    maxHeight: '700px',
                    overflow: 'auto',
                    borderRadius: '0px 0px 5px 5px'
                }}
            >
                <Box>
                    <Grid container>
                        <TableWrapper data={data} hidePagination={true}>
                            {filteredUsers.map((user: any, index: number) => (
                                <TableRow key={`user_${index}`}>
                                    <TableCell sx={{ p: '12px 40px 24px' }}>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'inset',
                                                gap: '20px'
                                            }}
                                        >
                                            <UserDetails user={user} />
                                            <UserActions>
                                                <Button
                                                    sx={{
                                                        borderRadius: '8px',
                                                        padding: '12px 16px',
                                                        border: '1px solid #05668D',
                                                        background: '#05668D',
                                                        fontSize: '14px',
                                                        fontWeight: '600',
                                                        textTransform:
                                                            'capitalize',
                                                        boxShadow: 'none',
                                                        width: 'auto',
                                                        whiteSpace: 'nowrap',
                                                        color: '#FFFFFF',
                                                        textDecoration: 'none',
                                                        ':hover': {
                                                            color: '#FFFFFF',
                                                            textDecoration:
                                                                'none',
                                                            background:
                                                                '#05668D'
                                                        }
                                                    }}
                                                    onClick={() => {
                                                        handleOnAddClick(user);
                                                        handleClose();
                                                        setSearch('');
                                                        filterData('');
                                                    }}
                                                >
                                                    Add
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
                                                            title={item.title}
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
                                                        borderRadius: '100px',
                                                        background: '#494949',
                                                        border: '2px solid #494949'
                                                    }}
                                                />{' '}
                                                <Typography
                                                    component={'div'}
                                                    sx={{
                                                        ml: '4px',
                                                        width: '7px',
                                                        height: '7px',
                                                        borderRadius: '100px',
                                                        background: '#494949',
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
        </Backdrop>
    );
};

export default SearchBox;

const data = [
    {
        image,
        name: 'Floyd Miles',
        designation: 'Internet Security Assistant',
        organization: 'Bosch',
        points: '550',
        days: '3',
        skills: [
            { background: '#95C97A', title: 'Wireframing', shortForm: 'X' },
            { background: '#49B6FF', title: 'Figma', shortForm: 'A' }
        ]
    },
    {
        image,
        name: 'Cody Fisher',
        designation: 'Sales Manager',
        organization: 'Utilitech',
        points: '550',
        days: '3',
        skills: [
            { background: '#808080', title: 'Restful API', shortForm: 'B' },
            { background: '#07AF22', title: 'Django', shortForm: 'T' }
        ]
    },
    {
        image,
        name: 'Bessie Cooper',
        designation: 'Sales Manager',
        organization: 'Xtera Solutions',
        days: '3',
        skills: [
            { background: '#F6C70E', title: 'HTML', shortForm: 'E' },
            { background: '#E75541', title: 'Figma', shortForm: 'B' }
        ]
    },
    {
        image,
        name: 'Cameron Williamson',
        designation: 'Internet Security Assistant',
        organization: 'Bosch',
        points: '550',
        days: '3',
        skills: [
            { background: '#95C97A', title: 'Wireframing', shortForm: 'X' },
            { background: '#49B6FF', title: 'Figma', shortForm: 'A' }
        ]
    },
    {
        image,
        name: 'Guy Hawkins',
        designation: 'Sales Manager',
        organization: 'Utilitech',
        points: '550',
        days: '3',
        skills: [
            { background: '#808080', title: 'Restful API', shortForm: 'B' },
            { background: '#07AF22', title: 'Django', shortForm: 'T' }
        ]
    },
    {
        image,
        name: 'Jerome Bell',
        designation: 'Sales Manager',
        organization: 'Xtera Solutions',
        days: '3',
        skills: [
            { background: '#F6C70E', title: 'HTML', shortForm: 'E' },
            { background: '#E75541', title: 'Figma', shortForm: 'B' }
        ]
    }
];
