import CircleIcon from '@mui/icons-material/Circle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import {
    Box,
    Typography,
    IconButton,
    Grid,
    Container,
    Divider,
    Button,
    List,
    ListItem
} from '@mui/material';

import cover from '../../assets/images/cover.jpg';
import profile from '../../assets/images/profile-sq.png';
import cambridge from '../../assets/images/cambridge.jpg';
import nasa from '../../assets/images/nasa.png';
import huawei from '../../assets/images/huawei.png';
import northface from '../../assets/images/northface.png';
import InfoChip from '../components/InfoChip';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
import Image from '../../../components/Image';
import MedalIcon from '../../../assets/icons/MedalIcon';
import EducationSummary from '../components/EducationSummary';
import WorkSummary from '../components/WorkSummary';
import AnalyticsProfile from '../../../assets/icons/AnalyticsProfile';
import AnalyticsSearch from '../../../assets/icons/AnalyticsSearch';
import AnalyticsGraph from '../../../assets/icons/AnalyticsGraph';
import { Ranking } from '../types/Ranking';
import EditContactInfoDialog from '../components/Modals/EditContactInfoDialog';
import ScoreCard from '../../../components/ScoreCard.tsx';
import { useState } from 'react';
import EditProfileAboutMeDialog from '../components/Modals/EditProfileAboutMeDialog';
import EditIcon from '../../../assets/icons/EditIcon';
import EditProfileInfoDialog from '../components/Modals/EditProfileInfoDialog';

function UserQualificationsPage() {
    const [openContactInfoModal, setOpenContactInfoModal] = useState(false);
    const [openAboutMeModal, setOpenAboutMeModal] = useState(false);
    const [openProfileInfoModal, setOpenProfileInfoModal] = useState(false);

    const handleOnEditAboutMe = () => {
        setOpenAboutMeModal(true);
    };

    const handleOnEditContactInfo = () => {
        setOpenContactInfoModal(true);
    };

    const handleOnEditProfileInfo = () => {
        setOpenProfileInfoModal(true);
    };

    return (
        <Container
            style={{
                paddingLeft: '35px',
                paddingRight: '0px',
                marginTop: '-48px',
                maxWidth: '100%'
            }}
        >

        </Container>
    );
}

export default UserQualificationsPage;
