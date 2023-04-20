import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import ChipList from '../ChipList';
import shellLogo from '../../../../assets/images/shellLogo.png';
import { useNavigate } from 'react-router-dom';

const VerifiedIcon = () => {
    return <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
            d='M11.9987 0.332031C5.57036 0.332031 0.332031 5.57036 0.332031 11.9987C0.332031 18.427 5.57036 23.6654 11.9987 23.6654C18.427 23.6654 23.6654 18.427 23.6654 11.9987C23.6654 5.57036 18.427 0.332031 11.9987 0.332031ZM17.5754 9.31536L10.9604 15.9304C10.797 16.0937 10.5754 16.187 10.342 16.187C10.1087 16.187 9.88703 16.0937 9.7237 15.9304L6.42203 12.6287C6.0837 12.2904 6.0837 11.7304 6.42203 11.392C6.76036 11.0537 7.32036 11.0537 7.6587 11.392L10.342 14.0754L16.3387 8.0787C16.677 7.74036 17.237 7.74036 17.5754 8.0787C17.9137 8.41703 17.9137 8.96536 17.5754 9.31536Z'
            fill='#05668D' />
    </svg>;
};

const companyChipsData = [{ name: 'Office Environment', type: 'L' }, {
    name: 'Job security', type: 'B',
}, { name: 'Job security', type: 'E' }, { name: 'Job security', type: 'E' }, {
    name: 'Job security', type: 'A',
}, { name: 'Job security', type: 'L' }, { name: 'Job security', type: 'A' }, {
    name: 'Office Environment', type: 'L',
}, { name: 'Office Environment', type: 'B' }, { name: 'Office Environment', type: 'L' }, {
    name: 'Office Environment', type: 'L',
}];
const requirementsChipsData = [{
    name: 'Visual Design', type: 'B',
}, { name: 'Motion Design', type: 'A' }, { name: 'Prototyping', type: 'L' }, {
    name: 'Job security', type: 'A',
}, { name: 'Job security', type: 'L' }, { name: 'Job security', type: 'A' }, {
    name: 'Office Environment', type: 'L',
}, { name: 'Office Environment', type: 'B' }, { name: 'Office Environment', type: 'L' }, {
    name: 'Office Environment', type: 'L',
}];

const CompanyInfo = () => {
    return <Box sx={{ backgroundColor: '#DFEBF0', borderRadius: '8px 8px 25px 25px', py: 4, px: 2 }}>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', gap: 2 }}>
                <Box sx={{ mt: 1 }}>
                    <img height={80} width={80} src={shellLogo} alt={'company logo'} />
                </Box>
                <Box>
                    <Typography sx={{
                        fontFamily: 'Open Sans', fontWeight: 600, fontSize: '20px', color: '#23282B',
                    }}>
                        Product Designer
                    </Typography>
                    <Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 1 }}>
                            <Typography sx={{
                                fontFamily: 'Open Sans',
                                fontWeight: 400,
                                fontSize: '16px',
                                color: '#808080',
                                textTransform: 'uppercase',
                            }}>Shell Energy</Typography> <VerifiedIcon /></Box>
                    </Box>
                    <Box sx={{ mt: .75 }}>
                        <Typography sx={{
                            fontFamily: 'Open Sans', fontWeight: 400, fontSize: '16px', color: '#808080',
                        }}>
                            Lagos</Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={{
                mt: .75,
                borderRadius: '100px',
                color: 'white',
                height: 32,
                width: 32,
                backgroundColor: 'red',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                3
            </Box>
        </Box>

        <ChipList chipsData={companyChipsData} />

    </Box>;
};

const JobPostingRequirements = () => {
    return <Box sx={{ backgroundColor: '#FCFBF8', mt: '24px', pb: 10, px: '20px' }}>
        <Typography sx={{
            fontFamily: 'Open Sans',
            fontWeight: 600,
            fontSize: '14px',
            letterSpacing: '0.001em',
            color: '#23282B',
            textTransform: 'uppercase',
        }}>
            Requirements
        </Typography>
        <Box sx={{ mt: 2 }}>
            <ChipList chipsData={requirementsChipsData} />
        </Box>
        <Box sx={{ display: 'flex', gap: .75, mt: 2 }}>
            <Typography sx={{
                fontFamily: 'Open Sans', fontWeight: 400, fontSize: '14px', letterSpacing: '0.001em', color: '#808080',
            }}>
                Minimum JobFactor Score:
            </Typography>
            <Typography sx={{
                color: 'white',
                fontWeight: 600,
                fontSize: '14px',
                backgroundColor: '#FFC24C',
                border: '1px solid #055C7F',
                borderRadius: '4px',
                px: 1.5,
            }}>
                550</Typography>
        </Box>
        <Box sx={{ mt: 2 }}>
            <Typography sx={{
                fontFamily: 'Open Sans',
                fontWeight: 600,
                fontSize: '14px',
                letterSpacing: '0.001em',
                color: '#23282B',
                textTransform: 'uppercase',
            }}>
                More
            </Typography>

            <Box sx={{
                mt: 2,
                display: 'flex',
                gap: 1,
                fontFamily: 'Open Sans',
                fontWeight: 600,
                fontSize: '14px',
                color: '#808080',
            }}>
                <Box sx={{
                    display: 'flex',
                    gap: .5,
                    py: 1,
                    alignItems: 'center',
                    backgroundColor: '#FFF7E8',
                    borderRadius: '4px',
                    px: 1.5,
                }}>
                    <svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                            d='M16.5758 4.81823C15.8675 4.0349 14.6842 3.64323 12.9675 3.64323H12.7675V3.6099C12.7675 2.2099 12.7675 0.476562 9.63418 0.476562H8.36751C5.23418 0.476562 5.23418 2.21823 5.23418 3.6099V3.65156H5.03418C3.30918 3.65156 2.13418 4.04323 1.42585 4.82656C0.600845 5.74323 0.625845 6.97656 0.709178 7.81823L0.717512 7.87656L0.7783 8.51484C0.792565 8.66462 0.873317 8.8 0.999315 8.88222C1.20137 9.01407 1.51111 9.21282 1.70085 9.31823C1.81751 9.39323 1.94251 9.4599 2.06751 9.52656C3.49251 10.3099 5.05918 10.8349 6.65085 11.0932C6.72584 11.8766 7.06751 12.7932 8.89251 12.7932C10.7175 12.7932 11.0758 11.8849 11.1342 11.0766C12.8342 10.8016 14.4758 10.2099 15.9592 9.34323C16.0092 9.31823 16.0425 9.29323 16.0842 9.26823C16.4044 9.08724 16.7362 8.86556 17.0408 8.64689C17.154 8.56561 17.2263 8.43948 17.2417 8.30097L17.2508 8.21823L17.2925 7.82656C17.3008 7.77656 17.3008 7.7349 17.3092 7.67656C17.3758 6.8349 17.3592 5.6849 16.5758 4.81823ZM9.90918 10.5266C9.90918 11.4099 9.90918 11.5432 8.88418 11.5432C7.85918 11.5432 7.85918 11.3849 7.85918 10.5349V9.48489H9.90918V10.5266ZM6.42584 3.64323V3.6099C6.42584 2.19323 6.42584 1.66823 8.36751 1.66823H9.63418C11.5758 1.66823 11.5758 2.20156 11.5758 3.6099V3.65156H6.42584V3.64323Z'
                            fill='#494949' />
                        <path
                            d='M16.2589 10.511C16.613 10.3437 17.0202 10.6242 16.9848 11.0142L16.6992 14.1602C16.5242 15.8269 15.8409 17.5269 12.1742 17.5269H5.82422C2.15755 17.5269 1.47422 15.8269 1.29922 14.1686L1.02851 11.1907C0.993465 10.8053 1.39179 10.5252 1.74482 10.6839C2.70402 11.115 4.31603 11.8083 5.35201 12.0873C5.51602 12.1315 5.64917 12.2495 5.72357 12.4022C6.23777 13.4575 7.32696 14.0186 8.89088 14.0186C10.4394 14.0186 11.5419 13.4359 12.058 12.3774C12.1326 12.2246 12.2656 12.1067 12.4297 12.0622C13.5315 11.7637 15.2528 10.9865 16.2589 10.511Z'
                            fill='#494949' />
                    </svg>
                    Full-time
                </Box>
                <Box sx={{
                    display: 'flex',
                    gap: .5,
                    py: 1,
                    alignItems: 'center',
                    backgroundColor: '#FFF7E8',
                    borderRadius: '4px',
                    px: 1.5,
                }}>
                    <svg width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                            d='M14.9758 3.53359C14.6174 1.72526 13.2758 0.933594 11.4091 0.933594H4.09245C1.89245 0.933594 0.425781 2.03359 0.425781 4.60026V8.89193C0.425781 10.7419 1.18411 11.8253 2.43411 12.2919C2.61745 12.3586 2.81745 12.4169 3.02578 12.4503C3.35911 12.5253 3.71745 12.5586 4.09245 12.5586H11.4174C13.6174 12.5586 15.0841 11.4586 15.0841 8.89193V4.60026C15.0841 4.20859 15.0508 3.85859 14.9758 3.53359ZM3.60911 8.00026C3.60911 8.34193 3.32578 8.62526 2.98411 8.62526C2.64245 8.62526 2.35911 8.34193 2.35911 8.00026V5.50026C2.35911 5.15859 2.64245 4.87526 2.98411 4.87526C3.32578 4.87526 3.60911 5.15859 3.60911 5.50026V8.00026ZM7.75078 8.95026C6.53411 8.95026 5.55078 7.96693 5.55078 6.75026C5.55078 5.53359 6.53411 4.55026 7.75078 4.55026C8.96745 4.55026 9.95078 5.53359 9.95078 6.75026C9.95078 7.96693 8.96745 8.95026 7.75078 8.95026ZM13.1341 8.00026C13.1341 8.34193 12.8508 8.62526 12.5091 8.62526C12.1674 8.62526 11.8841 8.34193 11.8841 8.00026V5.50026C11.8841 5.15859 12.1674 4.87526 12.5091 4.87526C12.8508 4.87526 13.1341 5.15859 13.1341 5.50026V8.00026Z'
                            fill='#494949' />
                        <path
                            d='M17.5841 7.10056V11.3922C17.5841 13.9589 16.1175 15.0672 13.9091 15.0672H6.59245C5.96745 15.0672 5.40912 14.9756 4.92578 14.7922C4.53412 14.6506 4.19245 14.4422 3.91745 14.1756C3.76745 14.0339 3.88412 13.8089 4.09245 13.8089H11.4091C14.4925 13.8089 16.3258 11.9756 16.3258 8.90056V4.60056C16.3258 4.40056 16.5508 4.27556 16.6925 4.42556C17.2591 5.02556 17.5841 5.90056 17.5841 7.10056Z'
                            fill='#494949' />
                    </svg>

                    N250,000 a month
                </Box>
            </Box>

            <Box sx={{ display: 'flex', gap: 2, mt: 1.5 }}>
                <Box sx={{ mt: -.3 }}>
                    <svg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <circle cx='4' cy='4' r='3.5' stroke='#494949' />
                    </svg>
                </Box>
                <Typography sx={{
                    fontFamily: 'Open Sans', fontWeight: 400, fontSize: '16px', color: '#808080',
                }}>

                    Experience as a UI/UX designer or similar role for digital products and services
                </Typography>
            </Box>


            <Box sx={{ display: 'flex', gap: 2, mt: 1.5 }}>
                <Box sx={{ mt: -.3 }}>
                    <svg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <circle cx='4' cy='4' r='3.5' stroke='#494949' />
                    </svg>
                </Box>
                <Typography sx={{
                    fontFamily: 'Open Sans', fontWeight: 400, fontSize: '16px', color: '#808080',
                }}>
                    Coordinate with the UI design team on issues like navigation, page routing...
                </Typography>
            </Box>
            <Typography sx={{
                mt: 2,
                fontFamily: 'Open Sans',
                fontWeight: 400,
                fontSize: '12px',
                letterSpacing: '0.001em',
                color: '#23282B',
            }}>
                Posted 3 days ago
            </Typography>
        </Box>
    </Box>;

};

const JobPostingCTA = () => {
    const jobId = 1234;
    const navigate = useNavigate();
    return <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Button
            variant='contained'
            sx={{
                py: '12px', px: '150px',
            }}>Apply</Button>
        <Button
            variant='outlined'
            onClick={() => navigate(`/my-jobs/${jobId}`)}
            sx={{
                py: '12px', mt: 1,
            }}>
            View Details
        </Button>
    </Box>;
};
const JobItem = () => {
    return (<Box sx={{ minWidth: 500, width: '100%', backgroundColor: '#FCFBF8', borderRadius: '8px', mb: 4 }}>
        <CompanyInfo />
        <JobPostingRequirements />
        <JobPostingCTA />
    </Box>);
};

export default JobItem;