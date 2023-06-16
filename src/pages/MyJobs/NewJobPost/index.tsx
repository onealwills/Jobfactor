import {
    Box,
    Typography,
    Button,
    InputBase,
    IconButton,
    Select,
    MenuItem,
    Paper,
    CircularProgress
} from '@mui/material';
import { ArrowLeftIcon } from '../../../assets/icons/ArrowLeftIcon';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import DialogBox from '../components/DialogBox';
import { getCompetencyColor } from '../GlobalFunction';
import { useCreateJobPost } from '../../../utils/hooks/api/jobs/useCreateJob';
import { useAuth } from '../../../utils/context/AuthContext';
import { useQueryClient } from 'react-query';
import SnackAlert from '../../../components/Snackbar';

const NewJobPost = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState<boolean>(false);
    const [selectedSkills, setSelectedSkills] = useState<
        { title: string; id: number; competency?: string }[]
    >([]);
    const [overview, setOverview] = useState<string>('');
    const [qualifications, setQualifications] = useState<string>('');
    const [responsibilities, setResponsibilities] = useState<string>('');
    const [deadLine, setDeadLine] = useState<string>('');
    const [additional1, setAdditional1] = useState<string>('');
    const [additional2, setAdditional2] = useState<string>('');
    const [jobTitle, setJobTitle] = useState<string>('');
    const [workPlaceType, setWorkPlaceType] = useState<string>('Please select');
    const [currency, setCurrency] = useState<string>('NGN');
    const [jobType, setJobType] = useState<string>('Full time');
    const [location, setLocation] = useState<string>('');
    const [yearsOfExp, setYearsOfExp] = useState<string>('');
    const [minimumScore, setMinimumScore] = useState<string>('');
    const [minSalary, setMinSalary] = useState<string>('');
    const [maxSalary, setMaxSalary] = useState<string>('');
    const [edit, setEdit] = useState<boolean>(false);
    const [step, setStep] = useState<number>(1);
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const { user } = useAuth();
    const queryClient = useQueryClient();
    const SkillsData = [
        { title: 'HTML', id: 1 },
        { title: 'CSS', id: 2 },
        { title: 'Figma', id: 3 }
    ];
    const createJobPost = useCreateJobPost();

    const handleSubmit = () => {
        if (user?.id) {
            setLoading(true);
            let data = {
                title: jobTitle,
                description: `${overview} ${qualifications} ${responsibilities} ${additional1} ${additional2}`,
                isActive: true,
                companyId: user.primaryCompanyProfile.companyId
            };
            console.log('data', data);
            createJobPost.mutate(data, {
                onSuccess: (res) => {
                    console.log('object', res);
                    queryClient.invalidateQueries({
                        queryKey: ['retrieve-jobs']
                    });
                    setShowPopup(true);
                    setLoading(false);
                },
                onError: (error) => {
                    setShow(true);
                    setLoading(false);
                }
            });
        }
    };

    const handleSkillsChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        id: number
    ) => {
        selectedSkills?.forEach((item) => {
            if (item?.id === id) {
                item['competency'] = (event.target as HTMLInputElement).value;
            }
        });
    };

    const onChangeDeadLine = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDeadLine(e.target.value);
    };

    const Header = () => {
        return (
            <Box>
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        gap: '15px',
                        backgroundColor: '#fff',
                        padding: '20px'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '28px'
                        }}
                    >
                        <IconButton onClick={() => navigate(-1)}>
                            <ArrowLeftIcon />
                        </IconButton>
                        <Typography
                            variant="headlineMediumSemiBold"
                            color="#494949"
                        >
                            Job Posting
                        </Typography>
                    </Box>
                </Box>
            </Box>
        );
    };

    const RequiredSkills = (
        <Box sx={{ marginTop: '30px' }}>
            <Typography
                fontSize={'16px'}
                color={'#494949'}
                marginBottom={'10px'}
            >
                Required skills
            </Typography>
            {step === 2 ? (
                <>
                    <Stack spacing={3} sx={{ width: '100%' }}>
                        <Autocomplete
                            multiple
                            id="tags-outlined"
                            options={SkillsData}
                            getOptionLabel={(option) => option?.title}
                            filterSelectedOptions
                            isOptionEqualToValue={(option, value) =>
                                option.title === value.title
                            }
                            value={selectedSkills}
                            onChange={(event, value) =>
                                setSelectedSkills(value)
                            }
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Required skills"
                                    placeholder="Add Skills"
                                    name="skills"
                                />
                            )}
                        />
                    </Stack>
                    <Box>
                        {selectedSkills?.length > 0 ? (
                            <Box sx={{ marginTop: '30px' }}>
                                <Typography
                                    fontSize={'16px'}
                                    color={'#494949'}
                                    marginBottom={'10px'}
                                >
                                    Select the competency level for skills
                                    expected from the applicants
                                </Typography>
                                {selectedSkills?.map((item, index) => {
                                    return (
                                        <Box
                                            key={index + 2}
                                            sx={{
                                                border: '1px solid #CCC',
                                                padding: '8px 15px',
                                                backgroundColor: '#fff',
                                                borderRadius: '5px',
                                                marginTop: '15px'
                                            }}
                                        >
                                            <FormControl
                                                sx={{
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    gap: '20px'
                                                }}
                                            >
                                                <FormLabel
                                                    id="demo-controlled-radio-buttons-group"
                                                    sx={{ minWidth: '50px' }}
                                                >
                                                    {item?.title}
                                                </FormLabel>
                                                <RadioGroup
                                                    aria-labelledby="demo-controlled-radio-buttons-group"
                                                    name="controlled-radio-buttons-group"
                                                    value={item?.competency}
                                                    onChange={(e) => {
                                                        handleSkillsChange(
                                                            e,
                                                            item?.id
                                                        );
                                                    }}
                                                    sx={{
                                                        flexDirection: 'row'
                                                    }}
                                                >
                                                    <FormControlLabel
                                                        sx={{
                                                            color: '#F55536'
                                                        }}
                                                        value="Beginner"
                                                        control={
                                                            <Radio
                                                                sx={{
                                                                    color: '#808080'
                                                                }}
                                                            />
                                                        }
                                                        label="Beginner"
                                                    />
                                                    <FormControlLabel
                                                        sx={{
                                                            color: '#49B6FF'
                                                        }}
                                                        value="Experience"
                                                        control={
                                                            <Radio
                                                                sx={{
                                                                    color: '#808080'
                                                                }}
                                                            />
                                                        }
                                                        label="Experience"
                                                    />
                                                    <FormControlLabel
                                                        sx={{
                                                            color: '#0D00A4'
                                                        }}
                                                        value="Advanced"
                                                        control={
                                                            <Radio
                                                                sx={{
                                                                    color: '#808080'
                                                                }}
                                                            />
                                                        }
                                                        label="Advanced"
                                                    />
                                                    <FormControlLabel
                                                        sx={{
                                                            color: '#00BD9D'
                                                        }}
                                                        value="Expert"
                                                        control={
                                                            <Radio
                                                                sx={{
                                                                    color: '#808080'
                                                                }}
                                                            />
                                                        }
                                                        label="Expert"
                                                    />
                                                    <FormControlLabel
                                                        sx={{
                                                            color: '#15796E'
                                                        }}
                                                        value="Thought Leader"
                                                        control={
                                                            <Radio
                                                                sx={{
                                                                    color: '#808080'
                                                                }}
                                                            />
                                                        }
                                                        label="Thought Leader"
                                                    />
                                                </RadioGroup>
                                            </FormControl>
                                        </Box>
                                    );
                                })}
                            </Box>
                        ) : null}
                    </Box>
                </>
            ) : (
                <Box>
                    <Box sx={{ border: '1px solid #CCC' }}>
                        <ul style={{ color: '#808080', fontSize: '16px' }}>
                            {selectedSkills?.map((item) => {
                                return (
                                    <li>
                                        {item?.title} {' - '}{' '}
                                        <span
                                            style={{
                                                color: getCompetencyColor(
                                                    item?.competency ?? ''
                                                )
                                            }}
                                        >
                                            {item?.competency}
                                        </span>
                                    </li>
                                );
                            })}
                        </ul>
                    </Box>
                </Box>
            )}
        </Box>
    );

    const AboutRole = (
        <Box sx={{ marginTop: '30px' }}>
            <Typography fontSize={'16px'} color="#494949">
                Overview
            </Typography>
            <Box sx={{ marginTop: '10px' }}>
                {step === 2 ? (
                    <InputBase
                        rows={5}
                        placeholder="Overview"
                        value={overview}
                        sx={{
                            backgroundColor: '#fff',
                            width: '100%',
                            overflowY: 'auto',
                            borderRadius: '5px',
                            padding: 0,
                            paddingTop: '15px',
                            paddingLeft: '15px',
                            fontFamily: 'open sans',
                            color: '#23282B',
                            border: '1px solid #CCC'
                        }}
                        onChange={(e) => {
                            setOverview(e.target.value);
                        }}
                        multiline
                    />
                ) : (
                    <Box
                        sx={{
                            padding: '20px',
                            border: '1px solid #CCC',
                            color: '#808080'
                        }}
                    >
                        {overview}
                    </Box>
                )}
            </Box>
        </Box>
    );

    const Summary = (
        <Box sx={{ marginTop: '30px' }}>
            <Typography fontSize={'16px'} color="#494949">
                Qualifications
            </Typography>
            <Box sx={{ marginTop: '10px' }}>
                {step === 2 ? (
                    <InputBase
                        value={qualifications}
                        rows={5}
                        placeholder="Qualifications"
                        sx={{
                            backgroundColor: '#fff',
                            width: '100%',
                            overflowY: 'auto',
                            borderRadius: '5px',
                            padding: 0,
                            paddingTop: '15px',
                            paddingLeft: '15px',
                            fontFamily: 'open sans',
                            color: '#23282B',
                            border: '1px solid #CCC'
                        }}
                        onChange={(e) => {
                            setQualifications(e.target.value);
                        }}
                        multiline
                    />
                ) : (
                    <Box
                        sx={{
                            padding: '20px',
                            border: '1px solid #CCC',
                            color: '#808080'
                        }}
                    >
                        {qualifications.split('\n').map((item) => {
                            if (item !== '') {
                                return <li key={`item_${item}`}>{item}</li>;
                            }
                            return null;
                        })}
                    </Box>
                )}
            </Box>
        </Box>
    );

    const Responsibilities = (
        <Box sx={{ marginTop: '30px' }}>
            <Typography fontSize={'16px'} color="#494949">
                Responsibilities
            </Typography>
            <Box sx={{ marginTop: '10px' }}>
                {step === 2 ? (
                    <InputBase
                        rows={5}
                        value={responsibilities}
                        placeholder="Applicants responsibilities...."
                        sx={{
                            backgroundColor: '#fff',
                            width: '100%',
                            overflowY: 'auto',
                            borderRadius: '5px',
                            padding: 0,
                            paddingTop: '15px',
                            paddingLeft: '15px',
                            fontFamily: 'open sans',
                            color: '#23282B',
                            border: '1px solid #CCC'
                        }}
                        onChange={(e) => {
                            setResponsibilities(e.target.value);
                        }}
                        multiline
                    />
                ) : (
                    <Box
                        sx={{
                            padding: '20px',
                            border: '1px solid #CCC',
                            color: '#808080'
                        }}
                    >
                        {responsibilities.split('\n').map((item) => {
                            if (item !== '') {
                                return <li key={`items_${item}`}>{item}</li>;
                            }
                            return null;
                        })}
                    </Box>
                )}
            </Box>
        </Box>
    );

    const DeadLine = (
        <Box sx={{ marginTop: '30px' }}>
            <Typography fontSize={'16px'} color="#494949">
                Application Deadline
            </Typography>
            <input
                type="date"
                readOnly={edit}
                value={deadLine}
                onChange={(e) => {
                    onChangeDeadLine(e);
                }}
                style={{
                    width: '80%',
                    height: '50px',
                    padding: '15px',
                    border: '1px solid #CCC',
                    borderRadius: '5px',
                    color: '#808080',
                    fontSize: '16px',
                    marginTop: '10px'
                }}
            />
        </Box>
    );

    const Additional1 = (
        <Box sx={{ marginTop: '30px' }}>
            <Typography fontSize={'16px'} color="#494949">
                Anything else you would like to add 1
            </Typography>
            <Box sx={{ marginTop: '10px' }}>
                {step === 2 ? (
                    <InputBase
                        value={additional1}
                        rows={5}
                        placeholder="Anything else...."
                        sx={{
                            backgroundColor: '#fff',
                            width: '100%',
                            overflowY: 'auto',
                            borderRadius: '5px',
                            padding: 0,
                            paddingTop: '15px',
                            paddingLeft: '15px',
                            fontFamily: 'open sans',
                            color: '#23282B',
                            border: '1px solid #CCC'
                        }}
                        onChange={(e) => {
                            setAdditional1(e.target.value);
                        }}
                        multiline
                    />
                ) : (
                    <Box
                        sx={{
                            padding: '20px',
                            border: '1px solid #CCC',
                            color: '#808080'
                        }}
                    >
                        {additional1.split('\n').map((item) => {
                            if (item !== '') {
                                return <li key={`items_${item}`}>{item}</li>;
                            }
                            return null;
                        })}
                    </Box>
                )}
            </Box>
        </Box>
    );
    const Additional2 = (
        <Box sx={{ marginTop: '30px' }}>
            <Typography fontSize={'16px'} color="#494949">
                Anything else you would like to add 2
            </Typography>
            <Box sx={{ marginTop: '10px' }}>
                {step === 2 ? (
                    <InputBase
                        value={additional2}
                        rows={5}
                        placeholder="Anything else...."
                        sx={{
                            backgroundColor: '#fff',
                            width: '100%',
                            overflowY: 'auto',
                            borderRadius: '5px',
                            padding: 0,
                            paddingTop: '15px',
                            paddingLeft: '15px',
                            fontFamily: 'open sans',
                            color: '#23282B',
                            border: '1px solid #CCC'
                        }}
                        onChange={(e) => {
                            setAdditional2(e.target.value);
                        }}
                        multiline
                    />
                ) : (
                    <Box
                        sx={{
                            padding: '20px',
                            border: '1px solid #CCC',
                            color: '#808080'
                        }}
                    >
                        {additional2.split('\n').map((item) => {
                            if (item !== '') {
                                return <li key={`items_${item}`}>{item}</li>;
                            }
                            return null;
                        })}
                    </Box>
                )}
            </Box>
        </Box>
    );
    return (
        <>
            <Box
                sx={{
                    mt: -6,
                    marginLeft: '30px'
                }}
            >
                <Header />
                <Box
                    sx={{
                        backgroundColor: '#fff',
                        padding: '30px',
                        marginTop: '20px'
                    }}
                >
                    <Box
                        sx={{
                            borderBottom: '1px solid #CCC',
                            paddingBottom: '10px',
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Typography
                            fontSize={'24px'}
                            variant="headlineMediumSemiBold"
                            color="#494949"
                        >
                            You are one step closer to finding Top Talent
                        </Typography>
                        {edit ? (
                            <Button
                                sx={{
                                    color: '#808080',
                                    borderRadius: '4px',
                                    background: '#fcfbf8',
                                    padding: '12px 16px',
                                    fontSize: '16px',
                                    border: '1px solid #494949',
                                    fontFamily: 'Open Sans',
                                    gap: '10px',
                                    fontWeight: '700',
                                    textTransform: 'capitalize'
                                }}
                                onClick={() => {
                                    setEdit(false);
                                    setStep(1);
                                }}
                                startIcon={<EditIcon />}
                            >
                                Edit
                            </Button>
                        ) : null}
                    </Box>
                    <Typography
                        sx={{
                            letterSpacing: '0.005em',
                            color: '#494949',
                            marginTop: '16px'
                        }}
                    >
                        * Indicates required
                    </Typography>
                    {step === 1 ? (
                        <>
                            <Box sx={{ marginTop: '30px' }}>
                                <Typography fontSize={'16px'} color="#494949">
                                    Job Title *
                                </Typography>
                                <Box sx={{ marginTop: '8px' }}>
                                    <TextField
                                        value={jobTitle}
                                        onChange={(e) =>
                                            setJobTitle(e.target.value)
                                        }
                                        placeholder="Ex: Product Designer"
                                        fullWidth
                                        sx={{
                                            fontFamily: 'Open Sans',
                                            color: '#23282B'
                                        }}
                                    />
                                </Box>
                            </Box>
                            <Box sx={{ marginTop: '30px' }}>
                                <Typography fontSize={'16px'} color="#494949">
                                    Workplace type
                                </Typography>
                                <Box sx={{ marginTop: '8px' }}>
                                    <Select
                                        fullWidth
                                        value={workPlaceType}
                                        onChange={(e) =>
                                            setWorkPlaceType(e.target.value)
                                        }
                                        sx={{
                                            fontFamily: 'Open Sans',
                                            color: '#23282B'
                                        }}
                                    >
                                        <MenuItem value={'Please select'}>
                                            Please select
                                        </MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </Box>
                            </Box>
                            <Box sx={{ marginTop: '30px' }}>
                                <Typography fontSize={'16px'} color="#494949">
                                    Job Type
                                </Typography>
                                <Box sx={{ marginTop: '8px' }}>
                                    <Select
                                        fullWidth
                                        value={jobType}
                                        onChange={(e) =>
                                            setJobType(e.target.value)
                                        }
                                        sx={{
                                            fontFamily: 'Open Sans',
                                            color: '#23282B'
                                        }}
                                    >
                                        <MenuItem value={'Full time'}>
                                            Full time
                                        </MenuItem>
                                        <MenuItem value={'Part time'}>
                                            Part time
                                        </MenuItem>
                                        <MenuItem value={'Contract'}>
                                            Contract
                                        </MenuItem>
                                    </Select>
                                </Box>
                            </Box>
                            <Box sx={{ marginTop: '30px' }}>
                                <Typography fontSize={'16px'} color="#494949">
                                    Location
                                </Typography>
                                <Box sx={{ marginTop: '8px' }}>
                                    <TextField
                                        value={location}
                                        onChange={(e) =>
                                            setLocation(e.target.value)
                                        }
                                        placeholder="Ex: Lagos, Nigeria"
                                        fullWidth
                                        sx={{
                                            fontFamily: 'Open Sans',
                                            color: '#23282B'
                                        }}
                                    />
                                </Box>
                            </Box>
                            <Box sx={{ marginTop: '30px' }}>
                                <Typography fontSize={'16px'} color="#494949">
                                    Years of Experience
                                </Typography>
                                <Box sx={{ marginTop: '8px' }}>
                                    <TextField
                                        value={yearsOfExp}
                                        onChange={(e) =>
                                            setYearsOfExp(e.target.value)
                                        }
                                        placeholder="Ex: 2 years"
                                        fullWidth
                                        sx={{
                                            fontFamily: 'Open Sans',
                                            color: '#23282B'
                                        }}
                                    />
                                </Box>
                            </Box>
                            <Box sx={{ marginTop: '30px' }}>
                                <Typography fontSize={'16px'} color="#494949">
                                    Minimum Jobfactor score
                                </Typography>
                                <Box sx={{ marginTop: '8px' }}>
                                    <TextField
                                        value={minimumScore}
                                        onChange={(e) =>
                                            setMinimumScore(e.target.value)
                                        }
                                        placeholder="Ex: 650"
                                        fullWidth
                                        sx={{
                                            fontFamily: 'Open Sans',
                                            color: '#23282B'
                                        }}
                                    />
                                </Box>
                            </Box>
                            <Box sx={{ marginTop: '30px' }}>
                                <Typography fontSize={'16px'} color="#494949">
                                    Salary range
                                </Typography>
                                <Box
                                    sx={{
                                        marginTop: '8px',
                                        border: '1px solid #ccc',
                                        padding: '20px 12px',
                                        borderRadius: '5px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '16px'
                                    }}
                                >
                                    <Select
                                        value={currency}
                                        onChange={(e) =>
                                            setCurrency(e.target.value)
                                        }
                                        sx={{
                                            fontFamily: 'Open Sans',
                                            color: '#23282B',
                                            height: '26px',
                                            background: '#D9D9D9',
                                            borderRadius: '4px',
                                            fontSize: '12px',
                                            fontWeight: '700'
                                        }}
                                    >
                                        <MenuItem value={'NGN'}>NGN</MenuItem>
                                        <MenuItem value={'Dollar'}>
                                            Dollar
                                        </MenuItem>
                                        <MenuItem value={'Rupees'}>
                                            Rupees
                                        </MenuItem>
                                    </Select>
                                    <Paper
                                        component="form"
                                        sx={{
                                            p: '8px 12px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            background: '#EDEDED',
                                            boxShadow: 'none',
                                            borderBottom: '1px solid #808080',
                                            maxWidth: '130px'
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontFamily: 'Open Sans',
                                                fontSize: '16px',
                                                letterSpacing: '0.005em',
                                                color: '#808080'
                                            }}
                                        >
                                            min.
                                        </Typography>
                                        <InputBase
                                            sx={{ ml: 1, flex: 1 }}
                                            value={minSalary}
                                            onChange={(e) =>
                                                setMinSalary(e.target.value)
                                            }
                                        />
                                    </Paper>
                                    <Typography
                                        sx={{
                                            fontFamily: 'Open Sans',
                                            fontSize: '16px',
                                            letterSpacing: '0.005em',
                                            color: '#808080'
                                        }}
                                    >
                                        to
                                    </Typography>
                                    <Paper
                                        component="form"
                                        sx={{
                                            p: '8px 12px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            background: '#EDEDED',
                                            boxShadow: 'none',
                                            borderBottom: '1px solid #808080',
                                            maxWidth: '130px'
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontFamily: 'Open Sans',
                                                fontSize: '16px',
                                                letterSpacing: '0.005em',
                                                color: '#808080'
                                            }}
                                        >
                                            max.
                                        </Typography>
                                        <InputBase
                                            sx={{ ml: 1, flex: 1 }}
                                            value={maxSalary}
                                            onChange={(e) =>
                                                setMaxSalary(e.target.value)
                                            }
                                        />
                                    </Paper>
                                </Box>
                            </Box>
                        </>
                    ) : step === 2 ? (
                        <>
                            {RequiredSkills}
                            {AboutRole}
                            {Summary}
                            {Responsibilities}
                            {DeadLine}
                            {Additional1}
                            {Additional2}
                        </>
                    ) : (
                        <>
                            <Box sx={{ marginTop: '30px' }}>
                                <Typography fontSize={'16px'} color="#494949">
                                    About the role
                                </Typography>
                                <Box sx={{ marginTop: '10px' }}>
                                    <Box
                                        sx={{
                                            padding: '20px',
                                            border: '1px solid #CCC',
                                            color: '#808080'
                                        }}
                                    >
                                        {overview}
                                    </Box>
                                </Box>
                            </Box>
                            {location ? (
                                <Box sx={{ marginTop: '30px' }}>
                                    <Typography
                                        fontSize={'16px'}
                                        color="#494949"
                                    >
                                        Location
                                    </Typography>
                                    <Box sx={{ marginTop: '10px' }}>
                                        <Box
                                            sx={{
                                                padding: '20px',
                                                border: '1px solid #CCC',
                                                color: '#808080'
                                            }}
                                        >
                                            {location}
                                        </Box>
                                    </Box>
                                </Box>
                            ) : null}
                            <Box sx={{ marginTop: '30px' }}>
                                <Typography fontSize={'16px'} color="#494949">
                                    Summary of the role
                                </Typography>
                                <Box sx={{ marginTop: '10px' }}>
                                    <Box
                                        sx={{
                                            padding: '20px',
                                            border: '1px solid #CCC',
                                            color: '#808080'
                                        }}
                                    >
                                        {yearsOfExp ? (
                                            <li>{yearsOfExp}</li>
                                        ) : null}
                                        {qualifications
                                            .split('\n')
                                            .map((item) => {
                                                if (item !== '') {
                                                    return (
                                                        <li
                                                            key={`item_${item}`}
                                                        >
                                                            {item}
                                                        </li>
                                                    );
                                                }
                                                return null;
                                            })}
                                    </Box>
                                </Box>
                            </Box>
                            {Responsibilities}
                            {DeadLine}
                            {RequiredSkills}
                            {step === 3 && additional1 ? Additional1 : null}
                            {step === 3 && additional2 ? Additional2 : null}
                        </>
                    )}

                    <Box sx={{ textAlign: 'center', marginTop: '30px' }}>
                        {loading ? (
                            <CircularProgress sx={{ color: '#05668D' }} />
                        ) : (
                            <Button
                                variant="contained"
                                sx={{
                                    width: 'fit-content',
                                    padding: '15px 20px',
                                    minWidth: '300px'
                                }}
                                disabled={
                                    (
                                        step === 1
                                            ? !jobTitle
                                            : selectedSkills?.length === 0 ||
                                              qualifications === '' ||
                                              overview === '' ||
                                              responsibilities === '' ||
                                              deadLine === ''
                                    )
                                        ? true
                                        : false
                                }
                                onClick={() => {
                                    if (step === 1) {
                                        setStep(2);
                                    }
                                    if (step === 2) {
                                        setEdit(true);
                                        setStep(3);
                                    }
                                    if (step === 3) {
                                        handleSubmit();
                                    }
                                }}
                            >
                                {step === 3
                                    ? 'Post Job Opening'
                                    : 'Save and Continue'}
                            </Button>
                        )}
                    </Box>
                </Box>
            </Box>
            <DialogBox
                open={showPopup}
                handleClose={() => setShowPopup(false)}
                handleOnPostAnother={() => {
                    setEdit(false);
                    setStep(1);
                    setJobTitle('');
                    setJobType('Full time');
                    setLocation('');
                    setYearsOfExp('');
                    setMinimumScore('');
                    setCurrency('NGN');
                    setMinSalary('');
                    setMaxSalary('');
                    setWorkPlaceType('Please select');
                    setOverview('');
                    setQualifications('');
                    setResponsibilities('');
                    setDeadLine('');
                    setAdditional1('');
                    setSelectedSkills([]);
                    setShowPopup(false);
                }}
            />
            <SnackAlert
                open={show}
                message={'Job post failed please try again!'}
                type={'error'}
                handleClose={() => setShow(false)}
            />
        </>
    );
};

export default NewJobPost;
