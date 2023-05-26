export interface IFeedItem {
    profileImage: string;
    fullName: string;
    jobTitle: string;
    description: string;
    views: number;
    likes: number;
    comments: number;
    shares: number;
    images: string[];
    activity?: string;
    isAccountVerified: boolean;
}
