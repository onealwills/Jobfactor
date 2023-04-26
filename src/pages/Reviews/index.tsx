import React from 'react';
import PageHeader from '../common/PageHeader';
import { Box, Paper } from '@mui/material';
import SentRequests from './SentRequests';
import SuggestedReviews from './SuggestedReviews';
import { useLocation } from 'react-router-dom';

const ReviewsView = () => {
  const location = useLocation();

  const getSelectedReviewsPage = () => {
    switch (location?.pathname) {
      case '/sent-requests':
        return <SentRequests />;
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
