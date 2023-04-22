import { IFeedItem } from './types/IFeedItem';
import feed1 from '../../assets/images/feed1.png';
import feed2 from '../../assets/images/feed2.png';
import feed2_1 from '../../assets/images/feed2_1.png';
import feed1_1 from '../../assets/images/feed1_1.png';
import feed1_2 from '../../assets/images/feed1_2.png';

export const feeds: IFeedItem[] = [
    {
        profileImage: feed1,
        fullName: 'Mary Johnson',
        jobTitle: 'Digital Marketer',
        description: `Having a healthy work-life balance as a Digital Marketer \nMaintaining a healthy work-life balance is important for all professionals, including digital marketers. Decide on the hours that you will be working, and stick to them as much as you ... see more`,
        views: 2456,
        likes: 500,
        comments: 156,
        shares: 75,
        images: [feed1_1, feed1_2],
        isAccountVerified: true
    },
    {
        profileImage: feed2,
        fullName: 'Jacob Jones',
        jobTitle: 'Brand Strategist',
        description:
            'Hello everyone,If you wan to get started in brand design you can send me a private message so I can put you through all you will need to get started. #startyourtechjourneynow',
        views: 2456,
        likes: 500,
        comments: 156,
        shares: 75,
        images: [feed2_1],
        isAccountVerified: true
    }
];
