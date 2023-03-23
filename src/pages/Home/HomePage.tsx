import { Box, Grid } from '@mui/material';
import AchievementsCard from './components/AchievementsCard';
import FeedbackCard from './components/FeedbackCard';
import CreateFeedCard from './components/CreateFeedCard';
import FeedList from './components/FeedList';

function HomePage() {
    return (
        <Box sx={{ mt: -9, ml: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={4.5}>
                    <AchievementsCard />
                </Grid>
                <Grid item xs={4.5}>
                    <FeedbackCard />
                </Grid>
                <Grid item xs={3}>
                    {/* <Item>xs=3</Item> */}
                    {/* Todo in the Item above add the progress similar to the Figma */}
                </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid item xs={9}>
                    <CreateFeedCard />
                </Grid>
                <Grid item xs={3}>
                    {/* <Item>xs=3</Item> */}
                    {/* Todo in the Item similar to the Figma */}
                </Grid>
            </Grid>
            <FeedList />
        </Box>
    );
}

export default HomePage;
