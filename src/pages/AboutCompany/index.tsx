import { useAuth } from '../../utils/context/AuthContext';
import AboutCompany from './About/AboutCompany';
import ProfileWizard from './ProfileWizard/ProfileWizard';

const CompanyDetails = () => {
    const { account } = useAuth();
    if (true) {
        return <ProfileWizard />;
    } else {
        return <AboutCompany />;
    }
};

export default CompanyDetails;
