import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { useEffect, useState } from 'react';
import PageHeader from '../../common/PageHeader';
import { IEvidenceType, IUserType } from '../types';
import ScoreCard from '../../../components/ScoreCard.tsx';
import ArchieveBook from '../../../assets/icons/ArchieveBook';
import FormHelperText from '@mui/material/FormHelperText';
import Button from '@mui/material/Button';
import {
    creativityData,
    criticalData,
    experienceLevels,
    expertLevel,
    leadershipData,
    manageabilityData,
    personalData,
    persuasiveData
} from '../constants';

interface IPropTypes {
    details: IUserType;
    handleSubmit: () => void;
    handleBack: () => void;
}
interface ISkillType {
    skill: string;
    witness: string;
    level: string;
}

const RequestDetail = ({ details, handleBack, handleSubmit }: IPropTypes) => {
    const [skills, setSkills] = useState<ISkillType[]>([]);
    const [criticalThinking, setCriticalThinking] =
        useState<IEvidenceType[]>(criticalData);
    const [persuasiveCommunication, setPersuasiveCommunication] =
        useState<IEvidenceType[]>(persuasiveData);
    const [personalOrganization, setPersonalOrganization] =
        useState<IEvidenceType[]>(personalData);
    const [manageabilitySkills, setManageabilitySkills] =
        useState<IEvidenceType[]>(manageabilityData);
    const [leadershipSkills, setLeadershipSkills] =
        useState<IEvidenceType[]>(leadershipData);
    const [creativitySkills, setCreativitySkills] =
        useState<IEvidenceType[]>(creativityData);

    const handleSkillChange = (
        index: number,
        level: string,
        witness: string
    ) => {
        let temp = JSON.parse(JSON.stringify(skills));
        temp[index].level = level;
        temp[index].witness = witness;
        setSkills(temp);
    };
    const handleChange = (
        index: number,
        evidence: string,
        setState: React.Dispatch<React.SetStateAction<IEvidenceType[]>>,
        state: IEvidenceType[]
    ) => {
        let temp = JSON.parse(JSON.stringify(state));
        temp[index].evidence = evidence;
        setState(temp);
    };

    useEffect(() => {
        let temp: ISkillType[] = [];
        details?.skills?.map((x) =>
            temp.push({ skill: x.title, witness: '', level: '' })
        );
        setSkills(temp);
    }, []);

    return (
        <>
            <Paper>
                <PageHeader
                    handleBack={handleBack}
                    pageTitle={'Received request'}
                    hideAction={true}
                />
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '28px 45px 28px 20px',
                        gap: '42px',
                        border: '1px solid #D9D9D9',
                        ml: '28px',
                        mr: '28px',
                        mt: '32px'
                    }}
                >
                    <Avatar
                        sx={{ width: '200px', height: '200px' }}
                        src={details.image}
                    />
                    <Box
                        sx={{
                            alignSelf: 'flex-start',
                            mr: 'auto'
                        }}
                    >
                        <Typography
                            variant="headlineLargeBold"
                            sx={{
                                mt: '15px',
                                display: 'block'
                            }}
                        >
                            {details.name}
                        </Typography>
                        <Typography
                            variant="titleLargeSemiBold"
                            sx={{
                                mt: '22px',
                                display: 'block'
                            }}
                        >
                            {details.designation} at ({details.organization})
                        </Typography>
                        <Typography
                            sx={{
                                color: '#808080',
                                mt: '8px'
                            }}
                        >
                            {details.address}
                        </Typography>
                        <Typography
                            variant="titleMediumBold"
                            sx={{
                                display: 'block',
                                mt: '35px'
                            }}
                        >
                            {details?.connections && details?.connections > 400
                                ? '400+'
                                : details?.connections}
                            &nbsp;
                            <Typography
                                component="span"
                                sx={{
                                    color: '#808080'
                                }}
                            >
                                Connections
                            </Typography>
                        </Typography>
                    </Box>
                    <ScoreCard value={700} divider={800} />
                </Box>
                <Box
                    sx={{
                        ml: '28px',
                        mr: '28px',
                        pb: '27px'
                    }}
                >
                    <Box
                        sx={{
                            borderTop: '1px solid #D9D9D9',
                            borderBottom: '1px solid #D9D9D9',
                            mt: '20px',
                            pb: '20px'
                        }}
                    >
                        <Typography
                            variant="headlineSmallSemiBold"
                            sx={{
                                mt: '70px',
                                display: 'block',
                                textAlign: 'center'
                            }}
                        >
                            Skill Based Rating
                        </Typography>
                        <Typography
                            sx={{
                                mt: '32px'
                            }}
                        >
                            Joshua Nwakwo said you witnessed his use of the
                            following skills. Please share your thoughts on
                            their competency level for each skills below.
                        </Typography>
                        <Typography
                            variant="titleSmallRegular"
                            sx={{
                                color: '#808080',
                                mt: '4px'
                            }}
                        >
                            Note that rating this individual will impact your
                            Jobfactor score, so ensure to be objective.
                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                            variant="titleMediumSemiBold"
                            sx={{
                                mt: '44px',
                                display: 'block',
                                mb: '8px'
                            }}
                        >
                            Did you witness the use of these skills ?
                        </Typography>
                        {skills?.map((item: ISkillType, index: number) => (
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    pt: '12px'
                                }}
                                key={`item_${index}`}
                            >
                                <Box
                                    sx={{
                                        width: '40%'
                                    }}
                                >
                                    <Typography>{item.skill}</Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '70px'
                                    }}
                                >
                                    <FormControlLabel
                                        control={
                                            <Radio
                                                onChange={(e) =>
                                                    handleSkillChange(
                                                        index,
                                                        item.level,
                                                        'yes'
                                                    )
                                                }
                                                checked={item.witness === 'yes'}
                                            />
                                        }
                                        label="Yes"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Radio
                                                onChange={(e) =>
                                                    handleSkillChange(
                                                        index,
                                                        item.level,
                                                        'no'
                                                    )
                                                }
                                                checked={item.witness === 'no'}
                                            />
                                        }
                                        label="No"
                                    />
                                </Box>
                            </Box>
                        ))}

                        <Typography
                            variant="titleMediumSemiBold"
                            sx={{
                                display: 'block',
                                mt: '70px',
                                mb: '6px'
                            }}
                        >
                            Select your view of their competency level for the
                            various skills
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '29px',
                                mb: '8px'
                            }}
                        >
                            {experienceLevels.map((x) => (
                                <Box key={`item_${x.shortForm}`}>
                                    <Typography
                                        variant="titleSmallSemiBold"
                                        sx={{
                                            color: x.color ?? '#FFFFFF',
                                            background: 'transparent',
                                            borderRadius: '6px',
                                            display: 'flex',
                                            gap: '8px',
                                            alignItems: 'center'
                                        }}
                                    >
                                        {x.title}
                                        <Typography
                                            variant="titleSmallBold"
                                            sx={{
                                                background: x.color,
                                                padding: '0px 4px',
                                                borderRadius: '4px',
                                                color: '#FFFFFF'
                                            }}
                                        >
                                            {x.shortForm}
                                        </Typography>
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                        {skills?.map((item: ISkillType, index: number) => (
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    pt: '12px'
                                }}
                                key={`item_${index}`}
                            >
                                <Box
                                    sx={{
                                        width: '40%'
                                    }}
                                >
                                    <Typography>{item.skill}</Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '70px'
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <Radio
                                            onChange={() =>
                                                handleSkillChange(
                                                    index,
                                                    expertLevel.begineer,
                                                    item.witness
                                                )
                                            }
                                            checked={
                                                item.level ===
                                                expertLevel.begineer
                                            }
                                        />
                                        <Typography
                                            variant="labelLargeBold"
                                            sx={{
                                                background: '#E75541',
                                                padding: '0px 4px',
                                                borderRadius: '4px',
                                                color: '#FFFFFF'
                                            }}
                                        >
                                            B
                                        </Typography>
                                    </Box>

                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <Radio
                                            onChange={() =>
                                                handleSkillChange(
                                                    index,
                                                    expertLevel.mobile_int,
                                                    item.witness
                                                )
                                            }
                                            checked={
                                                item.level ===
                                                expertLevel.mobile_int
                                            }
                                        />
                                        <Typography
                                            variant="labelLargeBold"
                                            sx={{
                                                background: '#F6C70E',
                                                padding: '0px 4px',
                                                borderRadius: '4px',
                                                color: '#FFFFFF'
                                            }}
                                        >
                                            E
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <Radio
                                            onChange={() =>
                                                handleSkillChange(
                                                    index,
                                                    expertLevel.customer_experience_design,
                                                    item.witness
                                                )
                                            }
                                            checked={
                                                item.level ===
                                                expertLevel.customer_experience_design
                                            }
                                        />
                                        <Typography
                                            variant="labelLargeBold"
                                            sx={{
                                                background: '#49B6FF',
                                                padding: '0px 4px',
                                                borderRadius: '4px',
                                                color: '#FFFFFF'
                                            }}
                                        >
                                            A
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <Radio
                                            onChange={() =>
                                                handleSkillChange(
                                                    index,
                                                    expertLevel.expert,
                                                    item.witness
                                                )
                                            }
                                            checked={
                                                item.level ===
                                                expertLevel.expert
                                            }
                                        />
                                        <Typography
                                            variant="labelLargeBold"
                                            sx={{
                                                background: '#7ABE57',
                                                padding: '0px 4px',
                                                borderRadius: '4px',
                                                color: '#FFFFFF'
                                            }}
                                        >
                                            X
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <Radio
                                            onChange={() =>
                                                handleSkillChange(
                                                    index,
                                                    expertLevel.thought_leader,
                                                    item.witness
                                                )
                                            }
                                            checked={
                                                item.level ===
                                                expertLevel.thought_leader
                                            }
                                        />
                                        <Typography
                                            variant="labelLargeBold"
                                            sx={{
                                                background: '#07AF22',
                                                padding: '0px 4px',
                                                borderRadius: '4px',
                                                color: '#FFFFFF'
                                            }}
                                        >
                                            T
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                    <Box
                        sx={{
                            borderBottom: '1px solid #D9D9D9',
                            mt: '20px',
                            pb: '20px'
                        }}
                    >
                        <Typography
                            variant="headlineSmallSemiBold"
                            sx={{
                                mt: '117px',
                                display: 'block',
                                textAlign: 'center'
                            }}
                        >
                            General Rating
                        </Typography>
                        <Typography
                            sx={{
                                mt: '32px'
                            }}
                        >
                            Please rate your perception of Joshua Nwakwo with
                            regards to each statement below. You can rate Joshua
                            Nwakwo as having “No Evidence” through “Strong
                            Evidence” of demonstrating what is described in each
                            statement. For example, if you do not feel Joshua
                            Nwakwo demonstrates what is described in the
                            statement, then select “No Evidence”. Respond to all
                            survey items below, then click “Submit Review”.
                        </Typography>
                        <Typography
                            variant="titleSmallRegular"
                            sx={{
                                color: '#808080',
                                display: 'block',
                                mt: '4px'
                            }}
                        >
                            Note that rating this individual will impact your
                            Jobfactor score, so ensure to be objective.
                        </Typography>
                    </Box>
                    <Typography
                        variant="titleLargeSemiBold"
                        sx={{
                            display: 'block',
                            mt: '24px'
                        }}
                    >
                        Critical Thinking
                    </Typography>
                    <Box sx={{ overflow: 'auto' }}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: '0px 16px',
                                mb: '26px'
                            }}
                        >
                            <Box sx={{ width: '48.5%' }} />
                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: '90px',
                                    width: '50%'
                                }}
                            >
                                <Box sx={{ maxWidth: '76px' }}>
                                    <Typography
                                        sx={{
                                            textAlign: 'center'
                                        }}
                                    >
                                        No Evidence
                                    </Typography>
                                </Box>
                                <Box sx={{ maxWidth: '76px' }}>
                                    <Typography
                                        sx={{
                                            textAlign: 'center'
                                        }}
                                    >
                                        Limited Evidence
                                    </Typography>
                                </Box>
                                <Box sx={{ maxWidth: '74px' }}>
                                    <Typography
                                        sx={{
                                            textAlign: 'center'
                                        }}
                                    >
                                        Moderate Evidence
                                    </Typography>
                                </Box>
                                <Box sx={{ maxWidth: '67px' }}>
                                    <Typography
                                        sx={{
                                            textAlign: 'center'
                                        }}
                                    >
                                        Good Evidence
                                    </Typography>
                                </Box>
                                <Box sx={{ maxWidth: '67px' }}>
                                    <Typography
                                        sx={{
                                            textAlign: 'center'
                                        }}
                                    >
                                        Strong Evidence
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        {criticalThinking.map(
                            (item: IEvidenceType, index: number) => (
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        padding: '0px 16px',
                                        background: '#D9D9D9',
                                        borderRadius: '100px',
                                        mb: '8px'
                                    }}
                                    key={`item_${index}`}
                                >
                                    <Box sx={{ width: '50%' }}>
                                        <Typography>{item.title}</Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            gap: '120px',
                                            width: '50%'
                                        }}
                                    >
                                        <Radio
                                            onChange={() =>
                                                handleChange(
                                                    index,
                                                    'No Evidence',
                                                    setCriticalThinking,
                                                    criticalThinking
                                                )
                                            }
                                            checked={
                                                item.evidence === 'No Evidence'
                                            }
                                        />
                                        <Radio
                                            onChange={() =>
                                                handleChange(
                                                    index,
                                                    'Limited Evidence',
                                                    setCriticalThinking,
                                                    criticalThinking
                                                )
                                            }
                                            checked={
                                                item.evidence ===
                                                'Limited Evidence'
                                            }
                                        />
                                        <Radio
                                            onChange={() =>
                                                handleChange(
                                                    index,
                                                    'Moderate Evidence',
                                                    setCriticalThinking,
                                                    criticalThinking
                                                )
                                            }
                                            checked={
                                                item.evidence ===
                                                'Moderate Evidence'
                                            }
                                        />
                                        <Radio
                                            onChange={() =>
                                                handleChange(
                                                    index,
                                                    'Good Evidence',
                                                    setCriticalThinking,
                                                    criticalThinking
                                                )
                                            }
                                            checked={
                                                item.evidence ===
                                                'Good Evidence'
                                            }
                                        />
                                        <Radio
                                            onChange={() =>
                                                handleChange(
                                                    index,
                                                    'Strong Evidence',
                                                    setCriticalThinking,
                                                    criticalThinking
                                                )
                                            }
                                            checked={
                                                item.evidence ===
                                                'Strong Evidence'
                                            }
                                        />
                                    </Box>
                                </Box>
                            )
                        )}
                    </Box>
                    <Typography
                        variant="titleLargeSemiBold"
                        sx={{
                            display: 'block',
                            mt: '35px'
                        }}
                    >
                        Persuasive communication
                    </Typography>
                    <Box sx={{ overflow: 'auto' }}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: '0px 16px',
                                mb: '26px'
                            }}
                        >
                            <Box sx={{ width: '48.5%' }} />
                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: '90px',
                                    width: '50%'
                                }}
                            >
                                <Box sx={{ maxWidth: '76px' }}>
                                    <Typography
                                        sx={{
                                            textAlign: 'center'
                                        }}
                                    >
                                        No Evidence
                                    </Typography>
                                </Box>
                                <Box sx={{ maxWidth: '76px' }}>
                                    <Typography
                                        sx={{
                                            textAlign: 'center'
                                        }}
                                    >
                                        Limited Evidence
                                    </Typography>
                                </Box>
                                <Box sx={{ maxWidth: '74px' }}>
                                    <Typography
                                        sx={{
                                            textAlign: 'center'
                                        }}
                                    >
                                        Moderate Evidence
                                    </Typography>
                                </Box>
                                <Box sx={{ maxWidth: '67px' }}>
                                    <Typography
                                        sx={{
                                            textAlign: 'center'
                                        }}
                                    >
                                        Good Evidence
                                    </Typography>
                                </Box>
                                <Box sx={{ maxWidth: '67px' }}>
                                    <Typography
                                        sx={{
                                            textAlign: 'center'
                                        }}
                                    >
                                        Strong Evidence
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        {persuasiveCommunication.map(
                            (item: IEvidenceType, index: number) => (
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        padding: '0px 16px',
                                        background: '#D9D9D9',
                                        borderRadius: '100px',
                                        mb: '8px'
                                    }}
                                    key={`item_${index}`}
                                >
                                    <Box sx={{ width: '50%' }}>
                                        <Typography>{item.title}</Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            gap: '120px',
                                            width: '50%'
                                        }}
                                    >
                                        <Radio
                                            onChange={() =>
                                                handleChange(
                                                    index,
                                                    'No Evidence',
                                                    setPersuasiveCommunication,
                                                    persuasiveCommunication
                                                )
                                            }
                                            checked={
                                                item.evidence === 'No Evidence'
                                            }
                                        />
                                        <Radio
                                            onChange={() =>
                                                handleChange(
                                                    index,
                                                    'Limited Evidence',
                                                    setPersuasiveCommunication,
                                                    persuasiveCommunication
                                                )
                                            }
                                            checked={
                                                item.evidence ===
                                                'Limited Evidence'
                                            }
                                        />
                                        <Radio
                                            onChange={() =>
                                                handleChange(
                                                    index,
                                                    'Moderate Evidence',
                                                    setPersuasiveCommunication,
                                                    persuasiveCommunication
                                                )
                                            }
                                            checked={
                                                item.evidence ===
                                                'Moderate Evidence'
                                            }
                                        />
                                        <Radio
                                            onChange={() =>
                                                handleChange(
                                                    index,
                                                    'Good Evidence',
                                                    setPersuasiveCommunication,
                                                    persuasiveCommunication
                                                )
                                            }
                                            checked={
                                                item.evidence ===
                                                'Good Evidence'
                                            }
                                        />
                                        <Radio
                                            onChange={() =>
                                                handleChange(
                                                    index,
                                                    'Strong Evidence',
                                                    setPersuasiveCommunication,
                                                    persuasiveCommunication
                                                )
                                            }
                                            checked={
                                                item.evidence ===
                                                'Strong Evidence'
                                            }
                                        />
                                    </Box>
                                </Box>
                            )
                        )}
                    </Box>
                    <Typography
                        variant="titleLargeSemiBold"
                        sx={{
                            display: 'block',
                            mt: '35px'
                        }}
                    >
                        Personal Organization
                    </Typography>
                    <Box sx={{ overflow: 'auto' }}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: '0px 16px',
                                mb: '26px'
                            }}
                        >
                            <Box sx={{ width: '48.5%' }} />
                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: '90px',
                                    width: '50%'
                                }}
                            >
                                <Box sx={{ maxWidth: '76px' }}>
                                    <Typography
                                        sx={{
                                            textAlign: 'center'
                                        }}
                                    >
                                        No Evidence
                                    </Typography>
                                </Box>
                                <Box sx={{ maxWidth: '76px' }}>
                                    <Typography
                                        sx={{
                                            textAlign: 'center'
                                        }}
                                    >
                                        Limited Evidence
                                    </Typography>
                                </Box>
                                <Box sx={{ maxWidth: '74px' }}>
                                    <Typography
                                        sx={{
                                            textAlign: 'center'
                                        }}
                                    >
                                        Moderate Evidence
                                    </Typography>
                                </Box>
                                <Box sx={{ maxWidth: '67px' }}>
                                    <Typography
                                        sx={{
                                            textAlign: 'center'
                                        }}
                                    >
                                        Good Evidence
                                    </Typography>
                                </Box>
                                <Box sx={{ maxWidth: '67px' }}>
                                    <Typography
                                        sx={{
                                            textAlign: 'center'
                                        }}
                                    >
                                        Strong Evidence
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        {personalOrganization.map(
                            (item: IEvidenceType, index: number) => (
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        padding: '0px 16px',
                                        background: '#D9D9D9',
                                        borderRadius: '100px',
                                        mb: '8px'
                                    }}
                                    key={`item_${index}`}
                                >
                                    <Box sx={{ width: '50%' }}>
                                        <Typography>{item.title}</Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            gap: '120px',
                                            width: '50%'
                                        }}
                                    >
                                        <Radio
                                            onChange={() =>
                                                handleChange(
                                                    index,
                                                    'No Evidence',
                                                    setPersonalOrganization,
                                                    personalOrganization
                                                )
                                            }
                                            checked={
                                                item.evidence === 'No Evidence'
                                            }
                                        />
                                        <Radio
                                            onChange={() =>
                                                handleChange(
                                                    index,
                                                    'Limited Evidence',
                                                    setPersonalOrganization,
                                                    personalOrganization
                                                )
                                            }
                                            checked={
                                                item.evidence ===
                                                'Limited Evidence'
                                            }
                                        />
                                        <Radio
                                            onChange={() =>
                                                handleChange(
                                                    index,
                                                    'Moderate Evidence',
                                                    setPersonalOrganization,
                                                    personalOrganization
                                                )
                                            }
                                            checked={
                                                item.evidence ===
                                                'Moderate Evidence'
                                            }
                                        />
                                        <Radio
                                            onChange={() =>
                                                handleChange(
                                                    index,
                                                    'Good Evidence',
                                                    setPersonalOrganization,
                                                    personalOrganization
                                                )
                                            }
                                            checked={
                                                item.evidence ===
                                                'Good Evidence'
                                            }
                                        />
                                        <Radio
                                            onChange={() =>
                                                handleChange(
                                                    index,
                                                    'Strong Evidence',
                                                    setPersonalOrganization,
                                                    personalOrganization
                                                )
                                            }
                                            checked={
                                                item.evidence ===
                                                'Strong Evidence'
                                            }
                                        />
                                    </Box>
                                </Box>
                            )
                        )}
                    </Box>
                    <Typography
                        variant="titleLargeSemiBold"
                        sx={{
                            display: 'block',
                            mt: '35px'
                        }}
                    >
                        Manageability Skills
                    </Typography>
                    <Box sx={{ overflow: 'auto' }}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: '0px 16px',
                                mb: '26px'
                            }}
                        >
                            <Box sx={{ width: '48.5%' }} />
                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: '90px',
                                    width: '50%'
                                }}
                            >
                                <Box sx={{ maxWidth: '76px' }}>
                                    <Typography
                                        sx={{
                                            textAlign: 'center'
                                        }}
                                    >
                                        No Evidence
                                    </Typography>
                                </Box>
                                <Box sx={{ maxWidth: '76px' }}>
                                    <Typography
                                        sx={{
                                            textAlign: 'center'
                                        }}
                                    >
                                        Limited Evidence
                                    </Typography>
                                </Box>
                                <Box sx={{ maxWidth: '74px' }}>
                                    <Typography
                                        sx={{
                                            textAlign: 'center'
                                        }}
                                    >
                                        Moderate Evidence
                                    </Typography>
                                </Box>
                                <Box sx={{ maxWidth: '67px' }}>
                                    <Typography
                                        sx={{
                                            textAlign: 'center'
                                        }}
                                    >
                                        Good Evidence
                                    </Typography>
                                </Box>
                                <Box sx={{ maxWidth: '67px' }}>
                                    <Typography
                                        sx={{
                                            textAlign: 'center'
                                        }}
                                    >
                                        Strong Evidence
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        {manageabilitySkills.map(
                            (item: IEvidenceType, index: number) => (
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        padding: '0px 16px',
                                        background: '#D9D9D9',
                                        borderRadius: '100px',
                                        mb: '8px'
                                    }}
                                    key={`item_${index}`}
                                >
                                    <Box sx={{ width: '50%' }}>
                                        <Typography>{item.title}</Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            gap: '120px',
                                            width: '50%'
                                        }}
                                    >
                                        <Radio
                                            onChange={() =>
                                                handleChange(
                                                    index,
                                                    'No Evidence',
                                                    setManageabilitySkills,
                                                    manageabilitySkills
                                                )
                                            }
                                            checked={
                                                item.evidence === 'No Evidence'
                                            }
                                        />
                                        <Radio
                                            onChange={() =>
                                                handleChange(
                                                    index,
                                                    'Limited Evidence',
                                                    setManageabilitySkills,
                                                    manageabilitySkills
                                                )
                                            }
                                            checked={
                                                item.evidence ===
                                                'Limited Evidence'
                                            }
                                        />
                                        <Radio
                                            onChange={() =>
                                                handleChange(
                                                    index,
                                                    'Moderate Evidence',
                                                    setManageabilitySkills,
                                                    manageabilitySkills
                                                )
                                            }
                                            checked={
                                                item.evidence ===
                                                'Moderate Evidence'
                                            }
                                        />
                                        <Radio
                                            onChange={() =>
                                                handleChange(
                                                    index,
                                                    'Good Evidence',
                                                    setManageabilitySkills,
                                                    manageabilitySkills
                                                )
                                            }
                                            checked={
                                                item.evidence ===
                                                'Good Evidence'
                                            }
                                        />
                                        <Radio
                                            onChange={() =>
                                                handleChange(
                                                    index,
                                                    'Strong Evidence',
                                                    setManageabilitySkills,
                                                    manageabilitySkills
                                                )
                                            }
                                            checked={
                                                item.evidence ===
                                                'Strong Evidence'
                                            }
                                        />
                                    </Box>
                                </Box>
                            )
                        )}
                    </Box>
                    <Typography
                        variant="titleLargeSemiBold"
                        sx={{
                            display: 'block',
                            mt: '35px'
                        }}
                    >
                        Leadership Skills
                    </Typography>
                    <Box sx={{ overflow: 'auto' }}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: '0px 16px',
                                mb: '26px'
                            }}
                        >
                            <Box sx={{ width: '48.5%' }} />
                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: '90px',
                                    width: '50%'
                                }}
                            >
                                <Box sx={{ maxWidth: '76px' }}>
                                    <Typography
                                        sx={{
                                            textAlign: 'center'
                                        }}
                                    >
                                        No Evidence
                                    </Typography>
                                </Box>
                                <Box sx={{ maxWidth: '76px' }}>
                                    <Typography
                                        sx={{
                                            textAlign: 'center'
                                        }}
                                    >
                                        Limited Evidence
                                    </Typography>
                                </Box>
                                <Box sx={{ maxWidth: '74px' }}>
                                    <Typography
                                        sx={{
                                            textAlign: 'center'
                                        }}
                                    >
                                        Moderate Evidence
                                    </Typography>
                                </Box>
                                <Box sx={{ maxWidth: '67px' }}>
                                    <Typography
                                        sx={{
                                            textAlign: 'center'
                                        }}
                                    >
                                        Good Evidence
                                    </Typography>
                                </Box>
                                <Box sx={{ maxWidth: '67px' }}>
                                    <Typography
                                        sx={{
                                            textAlign: 'center'
                                        }}
                                    >
                                        Strong Evidence
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        {leadershipSkills.map(
                            (item: IEvidenceType, index: number) => (
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        padding: '0px 16px',
                                        background: '#D9D9D9',
                                        borderRadius: '100px',
                                        mb: '8px'
                                    }}
                                    key={`item_${index}`}
                                >
                                    <Box sx={{ width: '50%' }}>
                                        <Typography>{item.title}</Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            gap: '120px',
                                            width: '50%'
                                        }}
                                    >
                                        <Radio
                                            onChange={() =>
                                                handleChange(
                                                    index,
                                                    'No Evidence',
                                                    setLeadershipSkills,
                                                    leadershipSkills
                                                )
                                            }
                                            checked={
                                                item.evidence === 'No Evidence'
                                            }
                                        />
                                        <Radio
                                            onChange={() =>
                                                handleChange(
                                                    index,
                                                    'Limited Evidence',
                                                    setLeadershipSkills,
                                                    leadershipSkills
                                                )
                                            }
                                            checked={
                                                item.evidence ===
                                                'Limited Evidence'
                                            }
                                        />
                                        <Radio
                                            onChange={() =>
                                                handleChange(
                                                    index,
                                                    'Moderate Evidence',
                                                    setLeadershipSkills,
                                                    leadershipSkills
                                                )
                                            }
                                            checked={
                                                item.evidence ===
                                                'Moderate Evidence'
                                            }
                                        />
                                        <Radio
                                            onChange={() =>
                                                handleChange(
                                                    index,
                                                    'Good Evidence',
                                                    setLeadershipSkills,
                                                    leadershipSkills
                                                )
                                            }
                                            checked={
                                                item.evidence ===
                                                'Good Evidence'
                                            }
                                        />
                                        <Radio
                                            onChange={() =>
                                                handleChange(
                                                    index,
                                                    'Strong Evidence',
                                                    setLeadershipSkills,
                                                    leadershipSkills
                                                )
                                            }
                                            checked={
                                                item.evidence ===
                                                'Strong Evidence'
                                            }
                                        />
                                    </Box>
                                </Box>
                            )
                        )}
                    </Box>
                    <Typography
                        variant="titleLargeSemiBold"
                        sx={{
                            display: 'block',
                            mt: '35px'
                        }}
                    >
                        Creativity Skills
                    </Typography>
                    <Box sx={{ overflow: 'auto' }}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: '0px 16px',
                                mb: '26px'
                            }}
                        >
                            <Box sx={{ width: '48.5%' }} />
                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: '90px',
                                    width: '50%'
                                }}
                            >
                                <Box sx={{ maxWidth: '76px' }}>
                                    <Typography
                                        sx={{
                                            textAlign: 'center'
                                        }}
                                    >
                                        No Evidence
                                    </Typography>
                                </Box>
                                <Box sx={{ maxWidth: '76px' }}>
                                    <Typography
                                        sx={{
                                            textAlign: 'center'
                                        }}
                                    >
                                        Limited Evidence
                                    </Typography>
                                </Box>
                                <Box sx={{ maxWidth: '74px' }}>
                                    <Typography
                                        sx={{
                                            textAlign: 'center'
                                        }}
                                    >
                                        Moderate Evidence
                                    </Typography>
                                </Box>
                                <Box sx={{ maxWidth: '67px' }}>
                                    <Typography
                                        sx={{
                                            textAlign: 'center'
                                        }}
                                    >
                                        Good Evidence
                                    </Typography>
                                </Box>
                                <Box sx={{ maxWidth: '67px' }}>
                                    <Typography
                                        sx={{
                                            textAlign: 'center'
                                        }}
                                    >
                                        Strong Evidence
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        {creativitySkills.map(
                            (item: IEvidenceType, index: number) => (
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        padding: '0px 16px',
                                        background: '#D9D9D9',
                                        borderRadius: '100px',
                                        mb: '8px'
                                    }}
                                    key={`item_${index}`}
                                >
                                    <Box sx={{ width: '50%' }}>
                                        <Typography>{item.title}</Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            gap: '120px',
                                            width: '50%'
                                        }}
                                    >
                                        <Radio
                                            onChange={() =>
                                                handleChange(
                                                    index,
                                                    'No Evidence',
                                                    setCreativitySkills,
                                                    creativitySkills
                                                )
                                            }
                                            checked={
                                                item.evidence === 'No Evidence'
                                            }
                                        />
                                        <Radio
                                            onChange={() =>
                                                handleChange(
                                                    index,
                                                    'Limited Evidence',
                                                    setCreativitySkills,
                                                    creativitySkills
                                                )
                                            }
                                            checked={
                                                item.evidence ===
                                                'Limited Evidence'
                                            }
                                        />
                                        <Radio
                                            onChange={() =>
                                                handleChange(
                                                    index,
                                                    'Moderate Evidence',
                                                    setCreativitySkills,
                                                    creativitySkills
                                                )
                                            }
                                            checked={
                                                item.evidence ===
                                                'Moderate Evidence'
                                            }
                                        />
                                        <Radio
                                            onChange={() =>
                                                handleChange(
                                                    index,
                                                    'Good Evidence',
                                                    setCreativitySkills,
                                                    creativitySkills
                                                )
                                            }
                                            checked={
                                                item.evidence ===
                                                'Good Evidence'
                                            }
                                        />
                                        <Radio
                                            onChange={() =>
                                                handleChange(
                                                    index,
                                                    'Strong Evidence',
                                                    setCreativitySkills,
                                                    creativitySkills
                                                )
                                            }
                                            checked={
                                                item.evidence ===
                                                'Strong Evidence'
                                            }
                                        />
                                    </Box>
                                </Box>
                            )
                        )}
                    </Box>
                    <Box
                        sx={{
                            padding: '20px',
                            background: '#FFFAF1',
                            borderBottom: '1px solid #D9D9D9',
                            mt: '50px'
                        }}
                    >
                        <TextField
                            sx={{
                                '& .MuiInput-underline': {
                                    fontSize: '14px'
                                },
                                '& .MuiInput-underline::before': {
                                    border: '0px !important'
                                },
                                '& .MuiInput-underline::after': {
                                    border: '0px !important'
                                }
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <ArchieveBook />
                                    </InputAdornment>
                                )
                            }}
                            variant="standard"
                            placeholder="Write a short comment: "
                        />
                        <FormHelperText>
                            Joshua is a very diligent individual. He put his
                            heart into his jobs. And he is worth every review.
                        </FormHelperText>
                    </Box>
                    <Box
                        sx={{
                            mt: '32px',
                            textAlign: 'center'
                        }}
                    >
                        <Button
                            variant="contained"
                            sx={{
                                p: '12px 20px',
                                width: 'auto',
                                fontFamily: 'Open Sans',
                                fontWeight: 600,
                                fontSize: '16px'
                            }}
                            onClick={handleSubmit}
                        >
                            Submit Review
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </>
    );
};

export default RequestDetail;
