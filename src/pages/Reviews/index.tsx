import React from 'react';
import { Box } from '@mui/material';
import SentRequests from './SentRequests';
import SuggestedReviews from './SuggestedReviews';
import CompanyRatings from './CompanyRatings';
import ReceivedRequests from './ReceivedRequests';
import { useParams } from 'react-router-dom';
import { ReviewsSlug } from './types/ReviewsSlug';

const ReviewsView = () => {
    const { slug } = useParams();

    const getSelectedReviewsPage = () => {
        switch (slug) {
            case ReviewsSlug.SentRequests:
                return <SentRequests />;
            case ReviewsSlug.CompanyRatings:
                return <CompanyRatings />;
            case ReviewsSlug.ReceivedRequests:
                return <ReceivedRequests />;
            default:
                return <SuggestedReviews />;
        }
    };

    return <Box>{getSelectedReviewsPage()}</Box>;
};

const Reviews = () => {
    return (
        <Box sx={{ ml: '35px' }}>
            {/* content container - switch contents based on subroute */}
            <ReviewsView />
        </Box>
    );
};

export default Reviews;
