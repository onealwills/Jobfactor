import React from 'react';
import PageHeader from '../common/PageHeader';
import { Box, Paper } from '@mui/material';
import { useParams } from 'react-router-dom';
import UsersPage from './UsersPage/UsersPage';
import UserQualifications from './UserQualifications/UserQualifications';

const UsersView = () => {
    const { slug } = useParams();

    switch (slug) {
        case 'qualifications':
            return <UserQualifications />;
        default:
            return <UsersPage />;
    }
};

const WrappedView = () => {
    const { slug } = useParams();

    const getSelectedPageTitle = () => {
        switch (slug) {
            case 'qualifications':
                return 'Qualifications';
            default:
                return '';
        }
    }

    return (
        <Box sx={{ ml: '35px', width: '50%'}}>
            <PageHeader
                pageTitle={getSelectedPageTitle()}
                actions={null}
                onBackNavigate={'/users'}
            />
            <UsersView />
        </Box>
    );
}

const Reviews = () => {
    const { slug } = useParams();
    
    if (slug) {
        return WrappedView();
    } else {
        return UsersView();
    }
};

export default Reviews;
