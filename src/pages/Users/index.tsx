import React from 'react';
import PageHeader from '../common/PageHeader';
import { Box, Paper } from '@mui/material';
import { useParams } from 'react-router-dom';
import UsersPage from './UsersPage/UsersPage';
import UserQualifications from './UserQualifications/UserQualifications';
import { UsersSlug } from './types/UsersSlug';

const UsersView = () => {
    const { slug } = useParams();

    switch (slug) {
        case UsersSlug.Qualifications:
            return <UserQualifications />;
        case UsersSlug.Score:
            return <>Not yet implemented</>
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
