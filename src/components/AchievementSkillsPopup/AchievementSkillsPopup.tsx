import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ModalClose from '../../assets/icons/ModalClose';
import Chip from '@mui/material/Chip';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import SearchIcon from '../../assets/icons/SearchIcon';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { useGetSkills } from '../../utils/hooks/api/skills/useGetSkills';

interface IProptypes {
    selectedSkills: string[];
    handleClose: () => void;
    setSelectedSkills: (skill: string[]) => void;
}
interface ISkillType {
    id: string,
    name: string,
    type: {
        id: string,
        name: string
    }
}

const AchievementSkillsPopup = ({
    setSelectedSkills = () => { },
    handleClose = () => { },
    selectedSkills = []
}: IProptypes) => {
    const [search, setSearch] = useState<string>('');
    const [suggestedSkills, setSuggestedSkills] = useState<ISkillType[]>([]);
    const { data: skills = [], refetch } = useGetSkills(search, 10);

    const addSkill = (skill: string) => {
        if (!selectedSkills.includes(skill) && selectedSkills.length < 10) {
            setSelectedSkills([...selectedSkills, skill]);
        }
    };

    const closeModal = () => {
        setSearch('');
        setSelectedSkills([]);
        handleClose();
    }
    useEffect(() => {
        if (suggestedSkills.length === 0) {
            setSuggestedSkills(skills)
        }
    }, [skills])

    useEffect(() => {
        if (search.length > 2) {
            refetch();
        }
    }, [search])

    return (
        <>
            <Box
                sx={{
                    ml: '32px',
                    mr: '32px',
                    '& .search-field .MuiInputBase-root': {
                        borderColor: '#D9D9D9',
                        borderRadius: '8px',
                        background: ' #FCFBF8'
                    },
                    '& .search-field .MuiInputBase-root svg': {
                        mr: '13px'
                    }
                }}
            >
                <Box
                    sx={{
                        mb: '22px',
                        pt: '22px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        borderBottom: '2px solid #D9D9D9'
                    }}
                >
                    <Typography variant="titleLargeSemiBold">
                        Relevant skills acquired from this achievement
                    </Typography>
                    <IconButton onClick={closeModal}>
                        <ModalClose />
                    </IconButton>
                </Box>
                <Typography variant="titleSmallSemiBold">
                    * Be sure to add skills that others witnessed you
                    demonstrate. Maximum of 10 skills.
                </Typography>
                <InputLabel
                    required
                    sx={{
                        color: '#5B5B5B',
                        mb: '8px',
                        mt: '16px'
                    }}
                >
                    Skills
                </InputLabel>
                <Box
                    sx={{
                        position: 'relative'
                    }}
                >
                    <TextField
                        fullWidth
                        value={search}
                        variant="outlined"
                        className="search-field"
                        placeholder="Search skills"
                        InputProps={{ startAdornment: <SearchIcon /> }}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    {(skills.length > 0 && search.length > 2) ? (
                        <Paper
                            sx={{
                                maxHeight: '200px',
                                overflow: 'auto',
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                zIndex: 999
                            }}
                        >
                            {skills.map((skill: ISkillType) => (
                                <Box
                                    sx={{
                                        pl: '10px',
                                        cursor: 'pointer',
                                        borderRadius: '8px',
                                        '& :hover': {
                                            background: '#D9D9D9'
                                        }
                                    }}
                                >
                                    <Typography
                                        variant="titleMediumSemiBold"
                                        sx={{
                                            width: '100%',
                                            display: 'block',
                                            p: '5px'
                                        }}
                                        onClick={() => {
                                            addSkill(skill.name);
                                            setSearch('');
                                        }}
                                    >
                                        {skill.name}
                                    </Typography>
                                </Box>
                            ))}
                        </Paper>
                    ) : null}
                </Box>
                <Box
                    sx={{
                        background: '#FAFAFA',
                        border: '1px solid #C5C5C5',
                        borderRadius: '8px',
                        mt: '12px',
                        p: '8px 20px 20px'
                    }}
                >
                    <Typography variant="titleMediumSemiBold">
                        Suggested based on the achievement you posted
                    </Typography>

                    <Box
                        sx={{
                            mt: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            flexWrap: 'wrap'
                        }}
                    >
                        {suggestedSkills.map((item: ISkillType) => (
                            <Chip
                                label={item.name}
                                variant="outlined"
                                sx={{
                                    fontWeight: 600,
                                    fontSize: '16px',
                                    color: '#808080',
                                    cursor: 'pointer'
                                }}
                                onClick={() => addSkill(item.name)}
                            />
                        ))}
                    </Box>
                </Box>
                {selectedSkills.length > 0 ? (
                    <Box
                        sx={{
                            background: '#FAFAFA',
                            border: '1px solid #C5C5C5',
                            borderRadius: '8px',
                            mt: '24px',
                            p: '8px 20px 20px'
                        }}
                    >
                        <Typography variant="titleMediumSemiBold">
                            Selected skills
                        </Typography>

                        <Box
                            sx={{
                                mt: '20px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                flexWrap: 'wrap'
                            }}
                        >
                            {selectedSkills.map((item) => (
                                <Chip
                                    label={item}
                                    sx={{
                                        fontWeight: 600,
                                        fontSize: '16px',
                                        color: '#FFFFFF',
                                        background: '#AAAAAA',
                                        border: '1px solid #808080',
                                        '& svg': {
                                            color: 'white !important'
                                        }
                                    }}
                                    onDelete={() =>
                                        setSelectedSkills(
                                            selectedSkills.filter(
                                                (x) => x !== item
                                            )
                                        )
                                    }
                                />
                            ))}
                        </Box>
                    </Box>
                ) : null}
            </Box>
            <Box
                sx={{
                    mt: '28px',
                    p: '20px 32px',
                    background: '#FFFAF1'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}
                >
                    <Button
                        variant="contained"
                        sx={{
                            p: '14px 16px',
                            background: '#FAFAFA',
                            border: '1px solid #05668D',
                            fontSize: '12px',
                            color: '#05668D'
                        }}
                        onClick={closeModal}
                    >
                        Skip for now
                    </Button>
                    <Button
                        variant="contained"
                        sx={{
                            p: '14px 16px',
                            fontSize: '14px'
                        }}
                    >
                        Request review
                    </Button>
                </Box>
            </Box>
        </>
    );
};

export default AchievementSkillsPopup;