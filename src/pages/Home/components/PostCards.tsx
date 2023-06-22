import React, { useEffect, useState } from 'react';
import {
    Box,
    Button,
    IconButton,
    InputBase,
    Modal,
    ImageList,
    ImageListItem,
    ImageListItemBar,
    Typography,
    Radio,
    FormControlLabel,
    Chip
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import UploadImage from '../../../assets/icons/UploadImage';
import UploadVideo from '../../../assets/icons/UploadVideo';
import UploadMore from '../../../assets/icons/UploadMore';
import UserGroup from '../../../assets/icons/UserGroup';
import Schedule from '../../../assets/icons/Schedule';
import Global from '../../../assets/icons/Global';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CancelIcon from '@mui/icons-material/Cancel';
import { FeedItem } from './FeedItem';
import HatIcon from '../../../assets/icons/HatIcon';
import Camera from '../../../assets/icons/CameraIconMui';
import AchievementMedal from '../../../assets/icons/AchievementMedal';
import AchievementSkillsPopup from '../../../components/AchievementSkillsPopup/AchievementSkillsPopup';

const modalstyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: 0,
    boxShadow: 24,
    p: 3,
    outline: 'none',
    maxHeight: 800,
    overflowY: 'auto'
};

const childmodalstyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    border: 0,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 3,
    outline: 'none'
};

interface PostCardProps {
    showModal: boolean;
    data: any;
    hideModal: (e?: any) => void;
    repostPopup?: boolean;
    achievementModal?: boolean;
}

const PostCards = ({
    showModal,
    data,
    hideModal,
    achievementModal = false,
    repostPopup = false
}: PostCardProps) => {
    const [editorText, setEditorText] = useState<string>('');
    const [activity, setActivity] = useState<string>('');
    const [assetArea, setAssetArea] = useState<string[]>([]);
    const [open, setOpen] = React.useState<boolean>(false);
    const [step, setStep] = React.useState<number>(0);
    const [type, setType] = useState<string>('Connections');
    const [disable, setDisable] = useState<boolean>(false);
    const [btnTitle, setBtnTitle] = useState<string>('Post');
    const [selectedSkills, setSelectedSkills] = useState<Array<string>>([
        'Figma',
        'HTML'
    ]);

    const TypeData = [{ name: 'Connections' }, { name: 'Anyone on Jobfactor' }];

    const reset = () => {
        setEditorText('');
        setAssetArea([]);
    };

    const inputref = React.useRef<HTMLInputElement>(null);

    const onChangeImage = (e: any) => {
        let temp: any = [];
        for (let i = 0; i < e.target.files?.length; i++) {
            temp.push(URL.createObjectURL(e.target.files[i]));
        }
        setAssetArea([...assetArea, ...temp]);
    };

    const onPostData = async () => {
        let temp = {
            profileImage: data?.userimage ?? data?.profileImage,
            fullName: data?.username ?? data?.fullName,
            jobTitle: 'Digital Marketer',
            description: editorText,
            views: 1852,
            likes: 150,
            comments: 236,
            shares: 55,
            images: assetArea,
            activity,
            skills: selectedSkills,
            isAccountVerified: true
        };
        localStorage.setItem('feedsdata', JSON.stringify(temp));
        hideModal();
        window.location.reload();
        reset();
    };

    const onDeletImage = async (item: any) => {
        const filterdata = assetArea?.filter((x: any) => x !== item);
        setAssetArea(filterdata);
    };

    const ChildModal = () => {
        return (
            <React.Fragment>
                <Modal
                    open={open}
                    onClose={() => {
                        setOpen(false);
                    }}
                    aria-labelledby="child-modal-title"
                    aria-describedby="child-modal-description"
                >
                    <Box sx={{ ...childmodalstyle }}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                border: 0,
                                borderBottomWidth: 1,
                                borderBottomColor: '#CCC',
                                borderStyle: 'solid',
                                marginBottom: 2,
                                paddingBottom: 1
                            }}
                        >
                            <Box>
                                <h4 style={{ marginTop: 0, marginBottom: 0 }}>
                                    Choose audience
                                </h4>
                            </Box>
                            <Box>
                                <div
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => {
                                        setOpen(false);
                                    }}
                                >
                                    <CancelIcon style={{ color: '#808080' }} />
                                </div>
                            </Box>
                        </Box>
                        {TypeData?.map((item, index) => {
                            return (
                                <Box
                                    key={index + 2}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        border: 0,
                                        borderBottomWidth: 1,
                                        borderBottomColor: '#CCC',
                                        borderStyle: 'solid',
                                        marginBottom: 2,
                                        paddingBottom: 1,
                                        cursor: 'pointer'
                                    }}
                                    onClick={() => {
                                        setType(item?.name);
                                        setOpen(false);
                                    }}
                                >
                                    <Box>
                                        {index === 0 ? (
                                            <UserGroup />
                                        ) : (
                                            <Global />
                                        )}
                                    </Box>
                                    <Box>
                                        <h4
                                            style={{
                                                marginTop: 0,
                                                marginBottom: '7px',
                                                paddingLeft: 10,
                                                fontWeight: '400'
                                            }}
                                        >
                                            {item?.name}
                                        </h4>
                                    </Box>
                                </Box>
                            );
                        })}
                    </Box>
                </Modal>
            </React.Fragment>
        );
    };

    useEffect(() => {
        if (step === 1) {
            setBtnTitle('Continue');
            if (!activity) {
                setDisable(true);
            } else {
                setDisable(false);
            }
        } else if (step === 2) {
            setBtnTitle('Post and get reviews');
            if (!editorText) {
                setDisable(true);
            } else {
                setDisable(false);
            }
        } else {
            setBtnTitle('Post');
        }
    }, [step, activity, editorText]);

    useEffect(() => {
        if (achievementModal) {
            setStep(1);
        }
    }, [achievementModal]);

    return (
        <Modal
            open={showModal}
            onClose={() => {
                reset();
                hideModal();
            }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box
                sx={[
                    modalstyle,
                    {
                        background: step > 2 ? '#FCFBF8' : '#F7F7F7',
                        p: step > 2 ? 0 : 3,
                        borderRadius: step > 2 ? '8px' : 0,
                        minWidth: 900
                    }
                ]}
            >
                {step === 3 ? (
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            padding: '32px 136px',
                            gap: '32px'
                        }}
                    >
                        <AchievementMedal />
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '8px',
                                maxWidth: '405px'
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily: 'Open Sans',
                                    fontWeight: 600,
                                    fontSize: '20px',
                                    lineHeight: '28px',
                                    color: '#23282B'
                                }}
                            >
                                Achievement Posted
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: 'Open Sans',
                                    color: '#808080',
                                    letterSpacing: '0.005em'
                                }}
                            >
                                You can now request up to 5 reviews from your
                                connections who witnessed this achievement.
                            </Typography>
                        </Box>
                        <Button
                            variant="outlined"
                            sx={{
                                p: '14px 36px',
                                background: '#FCFBF8',
                                border: '1px solid #05668D',
                                borderRadius: '8px',
                                width: 'auto',
                                minWidth: '227px',
                                '&:hover': {
                                    background: '#05668D',
                                    color: 'white'
                                }
                            }}
                            onClick={() => setStep(4)}
                        >
                            Continue
                        </Button>
                    </Box>
                ) : step === 4 ? (
                    <>
                        <AchievementSkillsPopup
                            handleClose={() => {
                                reset();
                                hideModal();
                            }}
                            selectedSkills={selectedSkills}
                            setSelectedSkills={setSelectedSkills}
                        />
                    </>
                ) : (
                    <>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                border: 0,
                                borderBottomWidth: 1,
                                borderBottomColor: '#CCC',
                                borderStyle: 'solid',
                                marginBottom: 2,
                                paddingBottom: 1
                            }}
                        >
                            <Box>
                                <h4 style={{ marginTop: 0, marginBottom: 0 }}>
                                    Create a Post
                                </h4>
                            </Box>
                            <Box>
                                <div
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => {
                                        reset();
                                        hideModal();
                                    }}
                                >
                                    <ClearIcon />
                                </div>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                background: repostPopup
                                    ? '#FCFBF8'
                                    : 'transparent'
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-start'
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        gap: '16px',
                                        alignItems: 'center'
                                    }}
                                >
                                    <img
                                        height={65}
                                        width={65}
                                        src={
                                            data?.userimage ??
                                            data?.profileImage
                                        }
                                        alt="icon"
                                        style={{ borderRadius: 100 }}
                                    />
                                    <Box
                                        sx={{ cursor: 'pointer' }}
                                        onClick={() => {
                                            setOpen(true);
                                        }}
                                    >
                                        <h4 style={{ margin: 0 }}>
                                            {data?.username ?? data?.fullName}
                                        </h4>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '10px',
                                                borderWidth: 1,
                                                borderColor: '#CCC',
                                                borderStyle: 'solid',
                                                padding: '4px 12px',
                                                borderRadius: 5,
                                                marginTop: '5px'
                                            }}
                                        >
                                            {type === 'Connections' ? (
                                                <UserGroup />
                                            ) : (
                                                <Global />
                                            )}
                                            <h5
                                                style={{
                                                    margin: 0,
                                                    fontWeight: '400'
                                                }}
                                            >
                                                {type}
                                            </h5>
                                            <ArrowDropDownIcon />
                                        </Box>
                                    </Box>
                                </Box>
                                <Box
                                    sx={{
                                        alignItems: 'center',
                                        display: 'flex',
                                        color: '#05668D',
                                        height: 'fit-content',
                                        borderRadius: '5px',
                                        background: '#fcfbf8',
                                        padding: '10px 20px',
                                        fontSize: '14px',
                                        gap: '8px',
                                        fontWeight: '600'
                                    }}
                                >
                                    <IconButton
                                        edge="start"
                                        color="inherit"
                                        aria-label="photo"
                                        sx={{ padding: 0 }}
                                        disabled={true}
                                    >
                                        <Schedule />
                                    </IconButton>
                                    Schedule
                                </Box>
                            </Box>
                            {step === 1 ? (
                                <Box sx={{ marginTop: '40px' }}>
                                    <Typography
                                        sx={{
                                            fontFamily: 'Open Sans',
                                            color: '#23282B',
                                            fontWeight: '600',
                                            fontSize: '20px',
                                            lineHeight: '28px'
                                        }}
                                    >
                                        What is the achievement?
                                    </Typography>
                                    <Box
                                        sx={{
                                            mt: '20px',
                                            p: '6px 16px',
                                            background:
                                                activity ===
                                                'Completed a course'
                                                    ? '#EDEDED'
                                                    : '#FAFAFA',
                                            borderBottom: `1px solid ${
                                                activity ===
                                                'Completed a course'
                                                    ? '#EDEDED'
                                                    : '#D8D8D8'
                                            }`
                                        }}
                                    >
                                        <FormControlLabel
                                            sx={{
                                                '& .MuiFormControlLabel-label':
                                                    {
                                                        fontFamily: 'Open Sans',
                                                        fontWeight:
                                                            activity ===
                                                            'Completed a course'
                                                                ? 600
                                                                : 400,
                                                        letterSpacing:
                                                            '0.005em',
                                                        color:
                                                            activity ===
                                                            'Completed a course'
                                                                ? '#23282B'
                                                                : '#808080'
                                                    }
                                            }}
                                            value={activity}
                                            control={
                                                <Radio
                                                    sx={{
                                                        color:
                                                            activity ===
                                                            'Completed a course'
                                                                ? '#05668D !important'
                                                                : '#AAAAAA !important'
                                                    }}
                                                    checked={
                                                        activity ===
                                                        'Completed a course'
                                                            ? true
                                                            : false
                                                    }
                                                    onChange={(e) => {
                                                        if (e.target.checked) {
                                                            setActivity(
                                                                'Completed a course'
                                                            );
                                                        }
                                                    }}
                                                />
                                            }
                                            label="Completed a course"
                                        />
                                    </Box>
                                    <Box
                                        sx={{
                                            p: '6px 16px',
                                            background:
                                                activity ===
                                                'Learnt a new skill'
                                                    ? '#EDEDED'
                                                    : '#FAFAFA',
                                            borderBottom: `1px solid ${
                                                activity ===
                                                'Learnt a new skill'
                                                    ? '#EDEDED'
                                                    : '#D8D8D8'
                                            }`
                                        }}
                                    >
                                        <FormControlLabel
                                            sx={{
                                                '& .MuiFormControlLabel-label':
                                                    {
                                                        fontFamily: 'Open Sans',
                                                        fontWeight:
                                                            activity ===
                                                            'Learnt a new skill'
                                                                ? 600
                                                                : 400,
                                                        letterSpacing:
                                                            '0.005em',
                                                        color:
                                                            activity ===
                                                            'Learnt a new skill'
                                                                ? '#23282B'
                                                                : '#808080'
                                                    }
                                            }}
                                            value={activity}
                                            control={
                                                <Radio
                                                    sx={{
                                                        color:
                                                            activity ===
                                                            'Learnt a new skill'
                                                                ? '#05668D !important'
                                                                : '#AAAAAA !important'
                                                    }}
                                                    checked={
                                                        activity ===
                                                        'Learnt a new skill'
                                                            ? true
                                                            : false
                                                    }
                                                    onChange={(e) => {
                                                        if (e.target.checked) {
                                                            setActivity(
                                                                'Learnt a new skill'
                                                            );
                                                        }
                                                    }}
                                                />
                                            }
                                            label="Learnt a new skill"
                                        />
                                    </Box>
                                    <Box
                                        sx={{
                                            p: '6px 16px',
                                            background:
                                                activity ===
                                                'Worked on a new project'
                                                    ? '#EDEDED'
                                                    : '#FAFAFA',
                                            borderBottom: `1px solid ${
                                                activity ===
                                                'Worked on a new project'
                                                    ? '#EDEDED'
                                                    : '#D8D8D8'
                                            }`
                                        }}
                                    >
                                        <FormControlLabel
                                            sx={{
                                                '& .MuiFormControlLabel-label':
                                                    {
                                                        fontFamily: 'Open Sans',
                                                        fontWeight:
                                                            activity ===
                                                            'Worked on a new project'
                                                                ? 600
                                                                : 400,
                                                        letterSpacing:
                                                            '0.005em',
                                                        color:
                                                            activity ===
                                                            'Worked on a new project'
                                                                ? '#23282B'
                                                                : '#808080'
                                                    }
                                            }}
                                            value={activity}
                                            control={
                                                <Radio
                                                    sx={{
                                                        color:
                                                            activity ===
                                                            'Worked on a new project'
                                                                ? '#05668D !important'
                                                                : '#AAAAAA !important'
                                                    }}
                                                    checked={
                                                        activity ===
                                                        'Worked on a new project'
                                                            ? true
                                                            : false
                                                    }
                                                    onChange={(e) => {
                                                        if (e.target.checked) {
                                                            setActivity(
                                                                'Worked on a new project'
                                                            );
                                                        }
                                                    }}
                                                />
                                            }
                                            label="Worked on a new project"
                                        />
                                    </Box>
                                    <Box
                                        sx={{
                                            p: '6px 16px',
                                            background:
                                                activity === 'Received an award'
                                                    ? '#EDEDED'
                                                    : '#FAFAFA',
                                            borderBottom: `1px solid ${
                                                activity === 'Received an award'
                                                    ? '#EDEDED'
                                                    : '#D8D8D8'
                                            }`
                                        }}
                                    >
                                        <FormControlLabel
                                            sx={{
                                                '& .MuiFormControlLabel-label':
                                                    {
                                                        fontFamily: 'Open Sans',
                                                        fontWeight:
                                                            activity ===
                                                            'Received an award'
                                                                ? 600
                                                                : 400,
                                                        letterSpacing:
                                                            '0.005em',
                                                        color:
                                                            activity ===
                                                            'Received an award'
                                                                ? '#23282B'
                                                                : '#808080'
                                                    }
                                            }}
                                            value={activity}
                                            control={
                                                <Radio
                                                    sx={{
                                                        color:
                                                            activity ===
                                                            'Received an award'
                                                                ? '#05668D !important'
                                                                : '#AAAAAA !important'
                                                    }}
                                                    checked={
                                                        activity ===
                                                        'Received an award'
                                                            ? true
                                                            : false
                                                    }
                                                    onChange={(e) => {
                                                        if (e.target.checked) {
                                                            setActivity(
                                                                'Received an award'
                                                            );
                                                        }
                                                    }}
                                                />
                                            }
                                            label="Received an award"
                                        />
                                    </Box>
                                </Box>
                            ) : step === 2 ? (
                                <Box
                                    sx={{
                                        border: '1px solid #D9D9DA',
                                        borderRadius: '8px',
                                        p: '16px',
                                        mt: '16px'
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            gap: '24px'
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontFamily: 'Open Sans',
                                                color: '#23282B',
                                                fontWeight: '600',
                                                letterSpacing: '0.005em'
                                            }}
                                        >
                                            Tell us about your course
                                        </Typography>
                                        <Button
                                            variant="outlined"
                                            sx={{
                                                fontFamily: 'Open Sans',
                                                color: '#05668D',
                                                fontSize: '14px',
                                                fontWeight: '600',
                                                letterSpacing: '0.001em',
                                                lineHeight: '20px',
                                                p: '14px 16px',
                                                background: '#F2F2F2',
                                                border: '1px solid #05668D',
                                                borderRadius: '8px',
                                                maxWidth: '212px',
                                                '&:hover': {
                                                    background: '#05668D',
                                                    color: 'white'
                                                }
                                            }}
                                            onClick={() => setStep(1)}
                                        >
                                            Change your achievement
                                        </Button>
                                    </Box>
                                    <Box
                                        sx={{
                                            mt: '24px',
                                            backgroundColor: '#FFFAF1',
                                            padding: '12px 32px 24px'
                                        }}
                                    >
                                        <InputBase
                                            rows={5}
                                            placeholder="I just completed a course in..."
                                            sx={{
                                                backgroundColor: '#FFFAF1',
                                                width: '100%',
                                                overflowY: 'auto',
                                                fontFamily: 'open sans',
                                                color: '#23282B'
                                            }}
                                            onChange={(e) => {
                                                setEditorText(e.target.value);
                                            }}
                                            multiline
                                        />
                                        <Box
                                            sx={{
                                                background: '#FFFFFF',
                                                border: '1px dashed #05668D',
                                                borderRadius: '16px',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                p: '29px',
                                                mt: '10px'
                                            }}
                                        >
                                            <Button
                                                variant="contained"
                                                startIcon={<Camera />}
                                                sx={{
                                                    fontFamily: 'Open Sans',
                                                    color: '#05668D',
                                                    fontSize: '14px',
                                                    fontWeight: '600',
                                                    letterSpacing: '0.0035em',
                                                    lineHeight: '20px',
                                                    p: '10px 16px',
                                                    background: '#F2F2F2',
                                                    borderRadius: '8px',
                                                    width: 'auto',
                                                    m: 'auto'
                                                }}
                                                onClick={() => {
                                                    inputref.current?.click();
                                                }}
                                            >
                                                Add Photo
                                            </Button>
                                            <input
                                                type="file"
                                                ref={inputref}
                                                multiple
                                                accept="image/jpg, image/jpeg, image/png"
                                                name="image"
                                                id="imageFile"
                                                onChange={(e) => {
                                                    onChangeImage(e);
                                                }}
                                                style={{ display: 'none' }}
                                            />
                                        </Box>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '20px',
                                            flexWrap: 'wrap',
                                            p: '20px',
                                            background: 'white'
                                        }}
                                    >
                                        {assetArea.map((item) => (
                                            <Box
                                                sx={{
                                                    position: 'relative'
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        cursor: 'pointer',
                                                        position: 'absolute',
                                                        right: '7px',
                                                        top: '7px'
                                                    }}
                                                    onClick={() => {
                                                        onDeletImage(item);
                                                    }}
                                                >
                                                    <CancelIcon />
                                                </Box>
                                                <img
                                                    src={item}
                                                    style={{
                                                        width: '200px',
                                                        height: '200px'
                                                    }}
                                                    alt=""
                                                />
                                            </Box>
                                        ))}
                                    </Box>
                                </Box>
                            ) : (
                                <>
                                    <Box sx={{ marginTop: '24px' }}>
                                        <InputBase
                                            rows={5}
                                            placeholder="What’s happening?"
                                            sx={{
                                                backgroundColor: '#FCFBF8',
                                                width: '100%',
                                                overflowY: 'auto',
                                                padding: 0,
                                                paddingTop: '24px',
                                                paddingLeft: '32px',
                                                fontFamily: 'open sans',
                                                color: '#23282B'
                                            }}
                                            onChange={(e) => {
                                                setEditorText(e.target.value);
                                            }}
                                            multiline
                                        />
                                    </Box>
                                    {assetArea?.length > 0 && (
                                        <Box
                                            sx={{
                                                padding: '20px',
                                                background: '#fcfbf8'
                                            }}
                                        >
                                            <ImageList
                                                sx={{
                                                    width: '100%',
                                                    maxHeight: 250,
                                                    transform: 'translateZ(0)'
                                                }}
                                                rowHeight={200}
                                                gap={12}
                                            >
                                                {assetArea.map(
                                                    (
                                                        item: any,
                                                        index: number
                                                    ) => {
                                                        const cols =
                                                            item?.featured
                                                                ? 2
                                                                : 1;
                                                        const rows =
                                                            item?.featured
                                                                ? 2
                                                                : 1;
                                                        return (
                                                            <ImageListItem
                                                                sx={{
                                                                    objectFit:
                                                                        'fill',
                                                                    overflow:
                                                                        'hidden'
                                                                }}
                                                                key={index + 2}
                                                                cols={cols}
                                                                rows={rows}
                                                            >
                                                                <img
                                                                    src={item}
                                                                    alt={
                                                                        'images'
                                                                    }
                                                                    loading="lazy"
                                                                    style={{
                                                                        objectFit:
                                                                            'fill',
                                                                        maxWidth:
                                                                            '200px'
                                                                    }}
                                                                />
                                                                <ImageListItemBar
                                                                    sx={{
                                                                        background:
                                                                            '#ffffff0d'
                                                                    }}
                                                                    position="top"
                                                                    actionIcon={
                                                                        <div
                                                                            style={{
                                                                                cursor: 'pointer',
                                                                                padding: 10
                                                                            }}
                                                                            onClick={() => {
                                                                                onDeletImage(
                                                                                    item
                                                                                );
                                                                            }}
                                                                        >
                                                                            <CancelIcon />
                                                                        </div>
                                                                    }
                                                                    actionPosition="left"
                                                                />
                                                            </ImageListItem>
                                                        );
                                                    }
                                                )}
                                            </ImageList>
                                        </Box>
                                    )}
                                </>
                            )}
                            {repostPopup ? (
                                <Box
                                    sx={{
                                        background: '#F2F2F2',
                                        border: '1px solid #C5C5C5',
                                        borderRadius: '12px',
                                        ml: '32px',
                                        mr: '32px'
                                    }}
                                >
                                    <FeedItem feed={data} />
                                </Box>
                            ) : null}
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                paddingLeft: '15px',
                                marginTop: '30px'
                            }}
                        >
                            {step > 0 ? (
                                <Button
                                    startIcon={<HatIcon color="#747474" />}
                                    variant="contained"
                                    sx={{
                                        width: 'auto',
                                        fontFamily: 'Open Sans',
                                        fontWeight: 600,
                                        fontSize: '14px',
                                        lineHeight: '20px',
                                        letterSpacing: '0.001em',
                                        color: '#808080'
                                    }}
                                    disabled={true}
                                >
                                    Achievements
                                </Button>
                            ) : (
                                <Box sx={{ display: 'flex', gap: '20px' }}>
                                    <Box
                                        sx={{
                                            alignItems: 'center',
                                            display: 'flex',
                                            gap: '5px'
                                        }}
                                    >
                                        <IconButton
                                            edge="start"
                                            color="inherit"
                                            aria-label="photo"
                                            sx={{
                                                backgroundColor: '#FCFBF8',
                                                borderRadius: '5px'
                                            }}
                                            onClick={() => {
                                                inputref.current?.click();
                                            }}
                                        >
                                            <UploadImage />
                                            <input
                                                type="file"
                                                ref={inputref}
                                                multiple
                                                accept="image/jpg, image/jpeg, image/png"
                                                name="image"
                                                id="imageFile"
                                                onChange={(e) => {
                                                    onChangeImage(e);
                                                }}
                                                style={{ display: 'none' }}
                                            />
                                        </IconButton>
                                    </Box>
                                    <Box
                                        sx={{
                                            alignItems: 'center',
                                            display: 'flex',
                                            gap: '5px'
                                        }}
                                    >
                                        <IconButton
                                            edge="start"
                                            color="inherit"
                                            aria-label="photo"
                                            sx={{
                                                backgroundColor: '#FCFBF8',
                                                borderRadius: '5px',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            <UploadVideo />
                                        </IconButton>
                                    </Box>
                                    <Box
                                        sx={{
                                            alignItems: 'center',
                                            display: 'flex',
                                            gap: '5px'
                                        }}
                                    >
                                        <IconButton
                                            edge="start"
                                            color="inherit"
                                            aria-label="photo"
                                            sx={{
                                                backgroundColor: '#FCFBF8',
                                                borderRadius: '5px',
                                                cursor: 'pointer'
                                            }}
                                            onClick={() => setStep(1)}
                                        >
                                            <HatIcon />
                                        </IconButton>
                                    </Box>
                                    <Box
                                        sx={{
                                            alignItems: 'center',
                                            display: 'flex',
                                            gap: '5px'
                                        }}
                                    >
                                        <IconButton
                                            edge="start"
                                            color="inherit"
                                            aria-label="photo"
                                            sx={{
                                                backgroundColor: '#FCFBF8',
                                                borderRadius: '5px',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            <UploadMore />
                                        </IconButton>
                                    </Box>
                                </Box>
                            )}
                            <Button
                                variant="contained"
                                sx={{ width: 'auto', py: 1 }}
                                onClick={() => {
                                    if (step === 0) {
                                        onPostData();
                                    } else {
                                        setStep((prev) => prev + 1);
                                    }
                                }}
                                disabled={disable}
                            >
                                {btnTitle}
                            </Button>
                        </Box>
                        <Box>
                            <ChildModal />
                        </Box>
                    </>
                )}
            </Box>
        </Modal>
    );
};

export default PostCards;
