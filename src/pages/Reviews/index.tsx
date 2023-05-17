import React from 'react';
import PageHeader from '../common/PageHeader';
import { Box, Paper } from '@mui/material';
import SentRequests from './SentRequests';
import SuggestedReviews from './SuggestedReviews';
import CompanyRatings from './CompanyRatings';
import ReceivedRequests from './ReceivedRequests';
import { useParams } from 'react-router-dom';

const ReviewsView = () => {
    const { slug } = useParams();

    const getSelectedReviewsPage = () => {
        switch (slug) {
            case 'sent-requests':
                return <SentRequests />;
            case 'company-ratings':
                return <CompanyRatings />;
            case 'received-requests':
                return <ReceivedRequests />;
            default:
                return <SuggestedReviews />;
        }
    };

    return (
        <Paper>
            <Box sx={{ ml: '35px' }}>{getSelectedReviewsPage()}</Box>
        </Paper>
    );
};

const Reviews = () => {
    return (
        <Box sx={{ ml: '35px' }}>
            <PageHeader pageTitle={'Reviews'} />
            {/* content container - switch contents based on subroute */}
            <ReviewsView />
        </Box>
    );
};

export default Reviews;
