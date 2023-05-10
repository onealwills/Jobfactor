import {
    Box,
    Button,
    FormHelperText,
    IconButton,
    TextField,
    Typography
} from '@mui/material';
import { ArrowLeftIcon } from '../../assets/icons/ArrowLeftIcon';
import SelectDropdown from '../../components/Selectdropdown';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from 'react-router-dom';
import ScoreCard from '../../components/ScoreCard.tsx';

const JobFactorScore = () => {
    const navigate = useNavigate();
    return (
        <Box
            sx={{
                background: '#FFFFFF',
                height: '100%',
                pl: '40px',
                pr: '40px',
                pb: '32px',
                ml: '35px'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        gap: '24px',
                        mt: '16px',
                        alignItems: 'flex-start'
                    }}
                >
                    <IconButton onClick={() => navigate('/')}>
                        <ArrowLeftIcon />
                    </IconButton>
                    <Typography
                        component={'h1'}
                        sx={{
                            fontSize: '24px',
                            fontWeight: '600',
                            fontFamily: 'Open Sans',
                            color: '#23282B',
                            mt: '5px'
                        }}
                    >
                        Jobfactor score metrics
                    </Typography>
                </Box>
                <ScoreCard value={550} divider={1000} />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    mt: '56px',
                    mb: '28px'
                }}
            >
                <Typography
                    component={'h1'}
                    sx={{
                        fontSize: '20px',
                        fontWeight: '600',
                        fontFamily: 'Open Sans',
                        color: '#494949'
                    }}
                >
                    Education
                </Typography>
                <Button
                    variant="contained"
                    sx={{
                        maxWidth: '110px',
                        fontSize: '14px',
                        background: '#E75541',
                        padding: '6px 16px',
                        fontWeight: '600',
                        fontFamily: 'Open Sans',
                        whiteSpace: 'noWrap',
                        borderRadius: '4px'
                    }}
                >
                    Low impact
                </Button>
            </Box>
            <Box
                component={'span'}
                sx={{
                    '& .Mui-disabled.MuiFilledInput-root': {
                        background: '#FCFBF8'
                    }
                }}
            >
                <SelectDropdown
                    label="Highest Degree"
                    defaultValue="Msc Control Systems Engineering"
                    style={{
                        width: '100%',
                        height: '70px',
                        borderColor: '#D9D9D9'
                    }}
                    disabled={true}
                    options={['Msc Control Systems Engineering']}
                />
                <FormHelperText
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        color: '#808080',
                        mt: '10px'
                    }}
                >
                    <InfoIcon sx={{ fontSize: '18px' }} /> Pending reviews and
                    ratings
                </FormHelperText>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    mt: '88px',
                    mb: '4px'
                }}
            >
                <Typography
                    component={'h1'}
                    sx={{
                        fontSize: '20px',
                        fontWeight: '600',
                        fontFamily: 'Open Sans',
                        color: '#494949'
                    }}
                >
                    Work History
                </Typography>
                <Button
                    variant="contained"
                    sx={{
                        maxWidth: '139px',
                        fontSize: '14px',
                        background: '#49B6FF',
                        padding: '6px 16px',
                        fontWeight: '600',
                        fontFamily: 'Open Sans',
                        whiteSpace: 'noWrap',
                        borderRadius: '4px'
                    }}
                >
                    Medium impact
                </Button>
            </Box>
            <InputField
                label="Total years of experience"
                defaultValue={'9 Years'}
            />
            <InputField
                label="Current level of responsibility"
                defaultValue={'Manager'}
            />
            <InputField
                label="Length of service at current employment (Consistency)"
                defaultValue={'3 years'}
            />
            <InputField label="Company size " defaultValue={'15 People'} />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    mt: '88px',
                    mb: '4px'
                }}
            >
                <Typography
                    component={'h1'}
                    sx={{
                        fontSize: '20px',
                        fontWeight: '600',
                        fontFamily: 'Open Sans',
                        color: '#494949'
                    }}
                >
                    Feedback Activities
                </Typography>
                <Button
                    variant="contained"
                    sx={{
                        maxWidth: '139px',
                        fontSize: '14px',
                        background: '#49B6FF',
                        padding: '6px 16px',
                        fontWeight: '600',
                        fontFamily: 'Open Sans',
                        whiteSpace: 'noWrap',
                        borderRadius: '4px'
                    }}
                >
                    Medium impact
                </Button>
            </Box>
            <InputField label="Feedback completed (90%)" defaultValue={'55'} />
            <InputField label="Invalid feedback (10%)" defaultValue={'45'} />
        </Box>
    );
};

export default JobFactorScore;

type inputProps = {
    label: String;
    defaultValue: String;
};
const InputField = (props: inputProps) => {
    return (
        <Box
            component={'span'}
            sx={{
                '& .Mui-disabled.MuiFilledInput-root': {
                    background: '#FCFBF8'
                },
                '& .MuiFilledInput-root': {
                    height: '70px'
                }
            }}
        >
            <TextField
                fullWidth
                disabled
                variant="filled"
                label={props.label}
                defaultValue={props.defaultValue}
                sx={{ mt: '24px' }}
            />
        </Box>
    );
};
