import {
    Box,
    Typography,
    Button,
    InputBase,
    IconButton,
    Select,
    MenuItem,
    Paper,
    CircularProgress,
    InputLabel,
    Chip,
    InputAdornment
} from '@mui/material';
import { ArrowLeftIcon } from '../../../assets/icons/ArrowLeftIcon';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useLocation, useNavigate } from 'react-router-dom';
import DialogBox from '../components/DialogBox';
import { ADVANCE, BEGINNER, EXPERIENCED, EXPERT, THOUGHT_LEADER, convertDateStringToMilli, getJobType, getWorkPlace, jobTypes, workPlaces } from '../../../utils/Helper/helper';
import { useCreateJobPost } from '../../../utils/hooks/api/jobs/useCreateJob';
import { useAuth } from '../../../utils/context/AuthContext';
import { useQueryClient } from 'react-query';
import SnackAlert from '../../../components/Snackbar';
import { useUpdateJobPost } from '../../../utils/hooks/api/jobs/useUpdateJob';
import { useGetJobById } from '../../../utils/hooks/api/jobs/useGetJobById';
import Dropdown from '../../../assets/icons/Dropdown';
import EditBtn from '../../../assets/icons/EditBtn';
import SearchIcon from '../../../assets/icons/SearchIcon';
import { QueryKeys } from '../../../utils/hooks/api/QueryKey';
import moment from 'moment';
import { ISelectedSkillType, ISkillType } from '../types/ISkillType';
import { useGetSkills } from '../../../utils/hooks/api/skills/useGetSkills';

const NewJobPost = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState<boolean>(false);
    const [selectedSkills, setSelectedSkills] = useState<ISelectedSkillType[]>([]);
    const [overview, setOverview] = useState<string>('');
    const [qualifications, setQualifications] = useState<string>('');
    const [responsibilities, setResponsibilities] = useState<string>('');
    const [deadLine, setDeadLine] = useState<string>('');
    const [additional1, setAdditional1] = useState<string>('');
    const [jobTitle, setJobTitle] = useState<string>('');
    const [workPlaceType, setWorkPlaceType] = useState<string>('');
    const [currency, setCurrency] = useState<string>('NGN');
    const [jobType, setJobType] = useState<string>('');
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
    const createJobPost = useCreateJobPost();
    const updateJobPost = useUpdateJobPost();
    const state = useLocation()?.state;
    const jobId = state ? state?.id : '';
    const { data: job } = useGetJobById(jobId, '');
    const [search, setSearch] = useState('');
    const { data: skills = [], refetch } = useGetSkills(search, 20);

    const handleSubmit = () => {
        if (user?.id && user?.primaryCompanyProfile?.companyId) {
            setLoading(true);
            let temp = {
                title: jobTitle,
                workplaceType: workPlaceType,
                jobType: jobType,
                location: location,
                yearsOfExperience: yearsOfExp,
                minimumScore: minimumScore,
                salaryRangeFrom: Number(minSalary),
                additionalNote: additional1,
                salaryRangeTo: Number(maxSalary),
                salaryCurrency: currency,
                overview: overview,
                qualifications: qualifications,
                responsibilities: responsibilities,
                expiredAt: convertDateStringToMilli(deadLine),
                skills: selectedSkills,
                description: 'description',
                companyId: user?.primaryCompanyProfile?.companyId,
            };

            if (state?.id) {
                let data = {
                    ...temp,
                    createdAt: job?.createdAt,
                    id: state.id,
                    isActive: job?.isActive
                };
                updateJobPost.mutate(data, {
                    onSuccess: (res) => {
                        console.log('updateJobPost', res);
                        queryClient.invalidateQueries({
                            queryKey: [QueryKeys.RetrieveJobs]
                        });
                        setShowPopup(true);
                        setLoading(false);
                    },
                    onError: (error) => {
                        setShow(true);
                        setLoading(false);
                    }
                })
            } else {
                let data = {
                    ...temp,
                    isActive: true,
                };
                createJobPost.mutate(data, {
                    onSuccess: (res) => {
                        console.log('createJobPost', res);
                        queryClient.invalidateQueries({
                            queryKey: [QueryKeys.RetrieveJobs]
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
        }
    };

    const handleSkillsChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        id: number
    ) => {
        if (step !== 3) {
            let temp = JSON.parse(JSON.stringify(selectedSkills))
            temp?.filter((item: ISelectedSkillType) => {
                if (item?.id === id) {
                    item['competencyLevel'] = Number((event.target as HTMLInputElement).value);
                }
                return null;
            });
            setSelectedSkills(temp);
        }
    };

    const onChangeDeadLine = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDeadLine(e.target.value);
    };

    useEffect(() => {
        if (state?.id && job) {
            setJobTitle(job?.title)
            setJobType(job?.jobType);
            setLocation(job?.location);
            setYearsOfExp(job.yearsOfExperience);
            setMinimumScore(job?.minimumScore);
            setCurrency(job?.salaryCurrency);
            setMinSalary(job?.salaryRangeFrom);
            setMaxSalary(job?.salaryRangeTo);
            setWorkPlaceType(job?.workplaceType);
            setOverview(job?.overview);
            setQualifications(job?.qualifications);
            setResponsibilities(job?.responsibilities);
            setDeadLine(moment(job?.expiredAt).format('YYYY-MM-DD')); //todo: convert date number to string
            setAdditional1(job?.additionalNote ? job?.additionalNote?.split('\n')[0] : '');
            setSelectedSkills(job?.skills ?? []);
        }
    }, [job, state])

    useEffect(() => {
        if (search.length > 2) {
            refetch();
        }
    }, [search])

    const Header = () => {
        return (
            <Box
                sx={{
                    display: 'flex',
                    gap: '15px',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                    borderBottom: '1px solid #D9D9D9',
                    padding: '20px'

                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        gap: '15px',

                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '28px'
                        }}
                    >
                        <IconButton onClick={() => step === 1 ? navigate(-1) : setStep((prev) => prev - 1)}>
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
                {edit ? (
                    <Button
                        sx={{
                            color: '#05668D',
                            borderRadius: '8px',
                            background: '#fcfbf8',
                            padding: '12px 16px',
                            fontSize: '14px',
                            border: '1px solid #05668D',
                            fontFamily: 'Open Sans',
                            gap: '10px',
                            width: 'auto',
                            height: '44px',
                            fontWeight: '600',
                            textDecoration: 'none',
                            textTransform: 'capitalize'
                        }}
                        onClick={() => {
                            setEdit(false);
                            setStep(1);
                        }}
                        endIcon={<EditBtn />}
                    >
                        Edit
                    </Button>
                ) : null}
            </Box >
        );
    };
    const RequiredSkills = (
        <Box sx={{ marginTop: step === 3 ? '30px' : 0 }}>
            <Typography
                variant={'titleLargeSemiBold'}
                color={'#494949'}
            >
                Required skills
            </Typography>
            <Stack spacing={3} sx={{ width: '100%', mt: '20px' }}>
                <Autocomplete
                    disabled={step === 3}
                    multiple
                    options={skills.map((option: ISkillType) => option.name)}
                    freeSolo
                    filterSelectedOptions
                    defaultValue={selectedSkills.map(x => x.name)}
                    renderTags={(value: readonly string[], getTagProps) => selectedSkills.map((option: ISelectedSkillType, index: number) => <Chip variant="outlined" label={option.name} {...getTagProps({ index })} />)}
                    onChange={(event, values) => {
                        let data: ISelectedSkillType[] = selectedSkills.length > 0 ? selectedSkills?.filter(x => values.includes(x.name)) : [];
                        if (values.length > selectedSkills.length) {
                            data.push({
                                id: selectedSkills.length > 0 ? selectedSkills[selectedSkills.length - 1]?.id + 1 : 1,
                                name: values[values.length - 1],
                                competencyLevel: 1
                            })
                        }
                        values = data?.map(x => x.name)
                        setSelectedSkills(data);
                    }}
                    sx={{
                        backgroundColor: '#FCFBF8',
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '8px',
                            pt: '6px',
                            pb: '6px'
                        }
                    }}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="outlined"
                            onChange={(e) => setSearch(e.target.value)}
                            InputProps={{
                                ...params.InputProps,
                                startAdornment: (
                                    <>
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                        {params.InputProps.startAdornment}
                                    </>
                                )
                            }}
                            placeholder="Search skills"
                        />
                    )}

                />
            </Stack>
            <Box>
                {selectedSkills?.length > 0 ? (
                    <Box sx={{ marginTop: '24px' }}>
                        <Typography
                            variant={'titleMediumSemiBold'}
                            color={'#494949'}
                            marginBottom={'10px'}
                            component={'div'}
                        >
                            {step === 3 ? 'Selected skills and competency levels expected from applicants  ' : 'Select the competency level for skills expected from the applicants'}
                        </Typography>
                        <Box
                            component={'div'}
                            sx={{
                                mt: '12px',
                                mb: '12px',
                                gap: '12px',
                                display: 'flex',
                                flexWrap: 'wrap',
                                alignItems: 'center'
                            }}
                        >
                            {selectedSkills?.map((item, index) => (
                                <Chip
                                    label={item?.name}
                                    sx={{
                                        border: '1px solid #AAA',
                                        background: '#FFF9ED',
                                        fontWeight: 600,
                                        fontSize: '16px',
                                    }}
                                />
                            ))}
                        </Box>
                        {selectedSkills?.map((item, index) => {
                            return (
                                <Box
                                    key={index + 2}
                                    sx={{
                                        borderBottom: '1px solid #D9D9D9',
                                        backgroundColor: '#FCFBF8',
                                        padding: '20px 15px',
                                        borderRadius: '5px',
                                        marginTop: '15px'
                                    }}
                                >
                                    <FormControl
                                        sx={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            gap: '20px',
                                            width: '100%'
                                        }}
                                    >
                                        <FormLabel
                                            id="demo-controlled-radio-buttons-group"
                                            sx={{ minWidth: '50px', color: '#23282B' }}
                                        >
                                            {item?.name}
                                        </FormLabel>
                                        <RadioGroup
                                            aria-labelledby="demo-controlled-radio-buttons-group"
                                            name="controlled-radio-buttons-group"
                                            value={item?.competencyLevel}
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
                                                value={BEGINNER.level}
                                                control={
                                                    <Radio
                                                        sx={{
                                                            color: '#808080'
                                                        }}
                                                    />
                                                }
                                                label={BEGINNER.name}
                                            />
                                            <FormControlLabel
                                                sx={{
                                                    color: '#49B6FF'
                                                }}
                                                value={EXPERIENCED.level}
                                                control={
                                                    <Radio
                                                        sx={{
                                                            color: '#808080'
                                                        }}
                                                    />
                                                }
                                                label={EXPERIENCED.name}
                                            />
                                            <FormControlLabel
                                                sx={{
                                                    color: '#0D00A4'
                                                }}
                                                value={ADVANCE.level}
                                                control={
                                                    <Radio
                                                        sx={{
                                                            color: '#808080'
                                                        }}
                                                    />
                                                }
                                                label={ADVANCE.name}
                                            />
                                            <FormControlLabel
                                                sx={{
                                                    color: '#00BD9D'
                                                }}
                                                value={EXPERT.level}
                                                control={
                                                    <Radio
                                                        sx={{
                                                            color: '#808080'
                                                        }}
                                                    />
                                                }
                                                label={EXPERT.name}
                                            />
                                            <FormControlLabel
                                                sx={{
                                                    color: '#15796E'
                                                }}
                                                value={THOUGHT_LEADER.level}
                                                control={
                                                    <Radio
                                                        sx={{
                                                            color: '#808080'
                                                        }}
                                                    />
                                                }
                                                label={THOUGHT_LEADER.name}
                                            />
                                        </RadioGroup>
                                    </FormControl>
                                </Box>
                            );
                        })}
                    </Box>
                ) : null}
            </Box>
        </Box>
    );

    const AboutRole = (
        <Box sx={{ marginTop: '56px' }}>
            <Typography variant='titleMediumSemiBold' color="#494949">
                Overview
            </Typography>
            <Box sx={{ marginTop: '10px' }}>
                <InputBase
                    rows={5}
                    placeholder="Summary of the role "
                    value={overview}
                    disabled={step === 3}
                    sx={{
                        borderBottom: '1px solid #D9D9D9',
                        backgroundColor: '#FAFAFA',
                        width: '100%',
                        overflowY: 'auto',
                        borderRadius: '5px',
                        padding: 0,
                        paddingTop: '15px',
                        paddingLeft: '15px',
                        fontFamily: 'open sans',
                        color: '#23282B',
                    }}
                    onChange={(e) => setOverview(e.target.value)}
                    multiline
                />
            </Box>
        </Box>
    );

    const Qualifications = (
        <Box sx={{ marginTop: '30px' }}>
            <Typography variant='titleMediumSemiBold' color="#494949">
                Qualifications
            </Typography>
            <Box sx={{ marginTop: '10px' }}>
                <InputBase
                    value={qualifications}
                    disabled={step === 3}
                    rows={5}
                    placeholder="Applicants qualifications"
                    sx={{
                        borderBottom: '1px solid #D9D9D9',
                        backgroundColor: '#FAFAFA',
                        width: '100%',
                        overflowY: 'auto',
                        borderRadius: '5px',
                        padding: 0,
                        paddingTop: '15px',
                        paddingLeft: '15px',
                        fontFamily: 'open sans',
                        color: '#23282B',
                    }}
                    onChange={(e) => setQualifications(e.target.value)}
                    multiline
                />
            </Box>
        </Box>
    );

    const Responsibilities = (
        <Box sx={{ marginTop: '30px' }}>
            <Typography variant='titleMediumSemiBold' color="#494949">
                Responsibilities
            </Typography>
            <Box sx={{ marginTop: '10px' }}>
                <InputBase
                    rows={5}
                    disabled={step === 3}
                    value={responsibilities}
                    placeholder="Applicants responsibilities...."
                    sx={{
                        borderBottom: '1px solid #D9D9D9',
                        backgroundColor: '#FAFAFA',
                        width: '100%',
                        overflowY: 'auto',
                        borderRadius: '5px',
                        padding: 0,
                        paddingTop: '15px',
                        paddingLeft: '15px',
                        fontFamily: 'open sans',
                        color: '#23282B',
                    }}
                    onChange={(e) => {
                        setResponsibilities(e.target.value);
                    }}
                    multiline
                />
            </Box>
        </Box>
    );

    const DeadLine = (
        <Box
            sx={{
                marginTop: '30px',
                '& input[type="date"]': {
                    borderBottom: '1px solid #D9D9D9',
                }
            }}
        >
            <Typography component={'p'} variant='titleMediumSemiBold' color="#494949">
                Application Deadline
            </Typography>
            <input
                type="date"
                readOnly={edit}
                disabled={step === 3}
                value={deadLine}
                onChange={(e) => onChangeDeadLine(e)}
                style={{
                    height: '50px',
                    width: '100%',
                    padding: '15px',
                    borderTop: 0,
                    borderRight: 0,
                    borderLeft: 0,
                    backgroundColor: '#FAFAFA',
                    color: '#808080',
                    fontSize: '16px',
                    marginTop: '10px'
                }}
            />
        </Box>
    );

    const Additional1 = (
        <Box sx={{ marginTop: '30px' }}>
            <Typography variant='titleMediumSemiBold' color="#494949">
                More info about the job
            </Typography>
            <Box sx={{ marginTop: '10px' }}>
                <InputBase
                    value={additional1}
                    disabled={step === 3}
                    rows={5}
                    placeholder="Feel free to add more information about this job"
                    sx={{
                        backgroundColor: '#FAFAFA',
                        borderBottom: '1px solid #D9D9D9',
                        width: '100%',
                        overflowY: 'auto',
                        borderRadius: '5px',
                        padding: 0,
                        paddingTop: '15px',
                        paddingLeft: '15px',
                        fontFamily: 'open sans',
                        color: '#23282B',
                    }}
                    onChange={(e) => {
                        setAdditional1(e.target.value);
                    }}
                    multiline
                />
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
                    }}
                >
                    {(step === 1 || step === 3) ? (
                        <>
                            <Box>
                                <Box sx={{ marginTop: '8px' }}>
                                    <TextField
                                        value={jobTitle}
                                        onChange={(e) => setJobTitle(e.target.value)}
                                        placeholder="Ex: Product Designer"
                                        fullWidth
                                        disabled={step === 3}
                                        label='Job Title'
                                        required
                                        variant='filled'
                                        sx={{
                                            fontFamily: 'Open Sans',
                                            color: '#23282B',
                                            '& .MuiInputBase-root,.Mui-disabled': {
                                                backgroundColor: "#FCFBF8"
                                            },
                                        }}
                                    />
                                </Box>
                            </Box>
                            <Box sx={{ marginTop: '30px' }}>
                                <FormControl
                                    sx={{
                                        marginTop: '8px',
                                        '& .MuiInputLabel-shrink': {
                                            top: '16px',
                                            left: '-2px'
                                        },
                                        '& .MuiSelect-icon': {
                                            top: 'calc(50% - 1em)'
                                        },
                                        '& .Mui-disabled': {
                                            backgroundColor: "#FCFBF8"
                                        }
                                    }}
                                    fullWidth
                                >
                                    <InputLabel required>
                                        Job Type
                                    </InputLabel>
                                    <Select
                                        fullWidth
                                        disabled={step === 3}
                                        value={jobType}
                                        onChange={(e) => setJobType(e.target.value)}
                                        label='Job Type'
                                        required
                                        variant='filled'
                                        sx={{
                                            fontFamily: 'Open Sans',
                                            backgroundColor: "#FCFBF8",
                                            color: '#23282B',
                                        }}
                                        IconComponent={(props) => <Dropdown {...props} />}
                                    >
                                        {jobTypes.map(x => <MenuItem key={x} value={x}>{getJobType(x)}</MenuItem>)}
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box sx={{ marginTop: '30px' }}>
                                <Box sx={{ marginTop: '8px' }}>
                                    <TextField
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                        placeholder="Ex: Lagos, Nigeria"
                                        disabled={step === 3}
                                        fullWidth
                                        label='Job Location'
                                        required
                                        variant='filled'
                                        sx={{
                                            fontFamily: 'Open Sans',
                                            color: '#23282B',
                                            '& .MuiInputBase-root,.Mui-disabled': {
                                                backgroundColor: "#FCFBF8"
                                            }
                                        }}
                                    />
                                </Box>
                            </Box>
                            <Box sx={{ marginTop: '30px' }}>
                                <FormControl
                                    sx={{
                                        marginTop: '8px',
                                        '& .MuiInputLabel-shrink': {
                                            top: '16px',
                                            left: '-2px'
                                        },
                                        '& .MuiSelect-icon': {
                                            top: 'calc(50% - 1em)'
                                        },
                                        '& .Mui-disabled': {
                                            backgroundColor: "#FCFBF8"
                                        }
                                    }}
                                    fullWidth
                                >
                                    <InputLabel required>
                                        Workplace type
                                    </InputLabel>
                                    <Select
                                        disabled={step === 3}
                                        value={workPlaceType}
                                        onChange={(e) => setWorkPlaceType(e.target.value)}
                                        label='Job Title'
                                        required
                                        variant='filled'
                                        sx={{
                                            fontFamily: 'Open Sans',
                                            backgroundColor: "#FCFBF8",
                                            color: '#23282B',
                                        }}
                                        IconComponent={(props) => <Dropdown {...props} />}
                                    >
                                        {workPlaces.map(x => <MenuItem key={x} value={x}>{getWorkPlace(x)}</MenuItem>)}
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box sx={{ marginTop: '30px' }}>
                                <Box sx={{ marginTop: '8px' }}>
                                    <TextField
                                        value={yearsOfExp}
                                        onChange={(e) => setYearsOfExp(e.target.value)}
                                        placeholder="Ex: 2 years"
                                        disabled={step === 3}
                                        fullWidth
                                        label='Years of Experience'
                                        required
                                        variant='filled'
                                        sx={{
                                            fontFamily: 'Open Sans',
                                            color: '#23282B',
                                            '& .MuiInputBase-root,.Mui-disabled': {
                                                backgroundColor: "#FCFBF8"
                                            }
                                        }}
                                    />
                                </Box>
                            </Box>
                            <Box sx={{ marginTop: '30px' }}>
                                <Box sx={{ marginTop: '8px' }}>
                                    <TextField
                                        value={minimumScore}
                                        onChange={(e) =>
                                            setMinimumScore(e.target.value)
                                        }
                                        placeholder="Ex: 650"
                                        fullWidth
                                        label='Minimum Jobfactor score'
                                        disabled={step === 3}
                                        required
                                        variant='filled'
                                        sx={{
                                            fontFamily: 'Open Sans',
                                            color: '#23282B',
                                            '& .MuiInputBase-root,.Mui-disabled': {
                                                backgroundColor: "#FCFBF8"
                                            }
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
                                        padding: '20px 12px',
                                        borderBottom: '1px solid #D9D9D9',
                                        backgroundColor: '#FCFBF8',
                                        borderRadius: '5px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '16px',
                                    }}
                                >
                                    <Select
                                        value={currency}
                                        disabled={step === 3}
                                        onChange={(e) => setCurrency(e.target.value)}
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
                                        <MenuItem value={'NGN'}>Naira</MenuItem>
                                        <MenuItem value={'USD'}>
                                            US Dollar
                                        </MenuItem>
                                        <MenuItem value={'Rupees'}>
                                            Canadian Dollar
                                        </MenuItem>
                                        <MenuItem value={'GBP'}>
                                            British Pounds
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
                                            disabled={step === 3}
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
                                            disabled={step === 3}
                                            value={maxSalary}
                                            onChange={(e) => setMaxSalary(e.target.value)}
                                        />
                                    </Paper>
                                </Box>
                            </Box>
                        </>
                    ) : null
                    }
                    {(step === 2 || step === 3) ?
                        <>
                            {RequiredSkills}
                            {AboutRole}
                            {Qualifications}
                            {Responsibilities}
                            {DeadLine}
                            {Additional1}
                        </>
                        : null
                    }

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
                                    ? (state?.id ? 'Update Job' : 'Post Job')
                                    : 'Save and Continue'}
                            </Button>
                        )}
                    </Box>
                </Box>
            </Box>
            <DialogBox
                open={showPopup}
                updatePopup={state?.id ? true : false}
                handleClose={() => setShowPopup(false)}
                handleOnPostAnother={() => {
                    setEdit(false);
                    setStep(1);
                    setJobTitle('');
                    setJobType('FULL_TIME');
                    setLocation('');
                    setYearsOfExp('');
                    setMinimumScore('');
                    setCurrency('NGN');
                    setMinSalary('');
                    setMaxSalary('');
                    setWorkPlaceType('ONSITE');
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
