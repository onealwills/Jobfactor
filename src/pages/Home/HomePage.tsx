import { Box, Grid } from '@mui/material';
import AchievementsCard from './components/AchievementsCard';
import FeedbackCard from './components/FeedbackCard';
import CreateFeedCard from './components/CreateFeedCard';
import FeedList from './components/FeedList';
import CardWrapper from './components/CardWrapper';
import CardBox from './components/CardBox';
import chika from '../../assets/images/chika.png';
import philips from '../../assets/images/philips.png';
import TeamIcon from '../../assets/icons/TeamIcon';
import ConnectionsIcon from '../../assets/icons/ConnectionsIcon';
import HatIcon from '../../assets/icons/HatIcon';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop.tsx';
import ScoreCard from '../../components/ScoreCard.tsx';

function HomePage() {



    return (
        <>
            <Box sx={{ mt: -9, ml: 2 }}>
                <Grid container spacing={2} wrap="nowrap">
                    <Grid item xs={4.5}>
                        <AchievementsCard />
                    </Grid>
                    <Grid item xs={4.5}>
                        <FeedbackCard />
                    </Grid>
                    <Grid item sx={{ textAlign: 'center', minWidth: '370px' }}>
                        <ScoreCard value={340} divider={800} />
                    </Grid>
                </Grid>

                <Grid container spacing={2} wrap="nowrap" sx={{ mt: 1 }}>
                    <Grid item xs={9}>
                        <CreateFeedCard />
                        <FeedList />
                    </Grid>
                    <Grid item sx={{ minWidth: '370px' }}>
                        <CardWrapper
                            title="Suggestions"
                            tooltipText={
                                'We offer suggestions to you based on your preferences to help improve your profile.'
                            }
                        >
                            <>
                                <CardBox
                                    title="Rate your company"
                                    list={[
                                        { name: 'Rate Jobfactor' },
                                        { name: 'Rate Google' }
                                    ]}
                                    btnText="Review all"
                                    tooltipText="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea enim sit modi ipsa voluptatem sint aliquid explicabo!."
                                    icon={<TeamIcon />}
                                />
                                <CardBox
                                    title="Pending connections"
                                    list={[
                                        { name: 'Chika Okoto', img: chika },
                                        { name: 'Jobs Philips', img: philips }
                                    ]}
                                    btnText="View connections"
                                    icon={<ConnectionsIcon />}
                                />
                                <CardBox
                                    title="Improve your skills"
                                    list={[
                                        { name: 'UI/UX Design' },
                                        { name: 'Cloud Development ' }
                                    ]}
                                    btnText="View available courses"
                                    icon={<HatIcon />}
                                />
                            </>
                        </CardWrapper>
                    </Grid>
                </Grid>
                <Footer />
                <ScrollToTop />
            </Box>
        </>
    )
}

export default HomePage;
