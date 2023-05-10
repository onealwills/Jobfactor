import { FeedItem } from './FeedItem';
import { Grid } from '@mui/material';
import { IFeedItem } from '../types/IFeedItem';
import { useEffect, useState } from 'react';
import feed1 from '../../../assets/images/feed1.png';
import feed2_1 from '../../../assets/images/feed2_1.png';
import feed1_1 from '../../../assets/images/feed1_1.png';


function FeedList() {

    const [feeds, setFeeds] = useState<any>([
        {
            profileImage: feed1,
            fullName: 'Jacob Jones',
            jobTitle: 'Brand Strategist',
            description:
                'Hello everyone,If you wan to get started in brand design you can send me a private message so I can put you through all you will need to get started. #startyourtechjourneynow',
            views: 2456,
            likes: 500,
            comments: 156,
            shares: 75,
            images: [feed1_1, feed2_1],
            isAccountVerified: true
        }
    ])

    const updateFeeds = async () => {
        let feedlist = localStorage.getItem('feedsdata')
        feedlist = JSON.parse(feedlist as any)
        if (feedlist !== null && feedlist !== undefined) {
            setFeeds([feedlist, ...feeds])
        }
    }

    useEffect(() => {
        updateFeeds()
    }, [])


    return (
        <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item>
                {feeds?.map((feed: IFeedItem) => (
                    <FeedItem feed={feed} />
                ))}
            </Grid>
            <Grid item xs={3}></Grid>
        </Grid>
    );
}

export default FeedList;
