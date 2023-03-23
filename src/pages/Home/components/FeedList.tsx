import { feeds } from '../feedSeedData';
import { FeedItem } from './FeedItem';
import { Grid } from '@mui/material';
import { IFeedItem } from '../types/IFeedItem';

function FeedList() {
    return (
        <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={9}>
                {feeds.map((feed: IFeedItem) => (
                    <FeedItem feed={feed} />
                ))}
            </Grid>
            <Grid item xs={3}></Grid>
        </Grid>
    );
}

export default FeedList;
